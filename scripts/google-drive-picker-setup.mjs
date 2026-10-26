import { randomBytes, timingSafeEqual } from "node:crypto";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { access, writeFile } from "node:fs/promises";
import { constants } from "node:fs";

const SCOPE = "https://www.googleapis.com/auth/drive.file";
const EXPECTED_REDIRECT_URI = "http://localhost:4173/oauth2callback";
const EXPECTED_MIME_TYPE = "application/vnd.google-apps.folder";
const TOKEN_FILE = ".env.google-drive-refresh-token";
const TIMEOUT_MS = 10 * 60 * 1000;

function readRequiredEnv(primary, fallback) {
  const value = process.env[primary] || (fallback ? process.env[fallback] : "");
  if (!value) throw new Error(`Missing required environment variable: ${primary}`);
  return value;
}

function constantTimeEqual(actual, expected) {
  const left = Buffer.from(actual || "");
  const right = Buffer.from(expected);
  return left.length === right.length && timingSafeEqual(left, right);
}

function openBrowser(url) {
  const allowedEnvKeys = process.platform === "win32"
    ? ["PATH", "Path", "PATHEXT", "SYSTEMROOT", "WINDIR", "TEMP", "TMP", "USERPROFILE", "HOMEDRIVE", "HOMEPATH", "LOCALAPPDATA", "ComSpec"]
    : ["PATH", "HOME", "DISPLAY", "WAYLAND_DISPLAY", "XDG_RUNTIME_DIR", "DBUS_SESSION_BUS_ADDRESS"];
  const env = Object.fromEntries(allowedEnvKeys.filter((key) => process.env[key]).map((key) => [key, process.env[key]]));
  const executable = process.platform === "win32" ? "rundll32.exe" : process.platform === "darwin" ? "open" : "xdg-open";
  const args = process.platform === "win32" ? ["url.dll,FileProtocolHandler", url] : [url];
  const child = spawn(executable, args, { detached: true, stdio: "ignore", env });
  return new Promise((resolve, reject) => {
    child.once("spawn", () => {
      child.unref();
      resolve();
    });
    child.once("error", reject);
  });
}

async function exchangeAuthorizationCode(code, clientId, clientSecret) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: EXPECTED_REDIRECT_URI,
      grant_type: "authorization_code",
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Google token exchange failed.");
  return response.json();
}

async function verifyFolderAccess(folderId, accessToken) {
  const url = new URL(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(folderId)}`);
  url.searchParams.set("fields", "id,mimeType");
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Could not verify access to the selected Drive folder.");
  const file = await response.json();
  if (file.id !== folderId || file.mimeType !== EXPECTED_MIME_TYPE) {
    throw new Error("The selected Drive item is not the expected destination folder.");
  }
}

async function ensureTokenFileDoesNotExist() {
  try {
    await access(TOKEN_FILE, constants.F_OK);
    throw new Error(`A previous token file already exists at ${TOKEN_FILE}. Provision or remove it before running setup again.`);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

async function waitForOAuthCallback(server, expectedState) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("OAuth setup timed out. Run the setup command again.")), TIMEOUT_MS);
    timeout.unref();
    server.on("request", (request, response) => {
      const url = new URL(request.url || "/", EXPECTED_REDIRECT_URI);
      response.setHeader("Cache-Control", "no-store");
      response.setHeader("Referrer-Policy", "no-referrer");
      response.setHeader("X-Content-Type-Options", "nosniff");
      response.setHeader("Content-Type", "text/html; charset=utf-8");

      if (request.method === "GET" && url.pathname === "/complete") {
        response.writeHead(200).end("Authorization received. Return to the setup terminal; no token is shown in this browser.");
        return;
      }

      if (request.method !== "GET" || url.pathname !== "/oauth2callback") {
        response.writeHead(404).end("Not found.");
        return;
      }

      if (!constantTimeEqual(url.searchParams.get("state"), expectedState)) {
        response.writeHead(400).end("Invalid authorization state. You may close this page.");
        return;
      }

      clearTimeout(timeout);
      const oauthError = url.searchParams.get("error");
      if (oauthError) {
        response.writeHead(400).end("Google authorization was not completed. You may close this page and retry in the terminal.");
        reject(new Error("Google authorization was canceled or denied."));
        return;
      }

      const pickedIds = (url.searchParams.get("picked_file_ids") || "").split(",").filter(Boolean);
      const code = url.searchParams.get("code");
      const scopes = (url.searchParams.get("scope") || "").split(/\s+/).filter(Boolean);
      if (!code || pickedIds.length !== 1 || scopes.length !== 1 || scopes[0] !== SCOPE) {
        response.writeHead(400).end("Google did not return the expected folder selection and drive.file grant. You may close this page.");
        reject(new Error("Google returned an unexpected Picker selection or OAuth scope."));
        return;
      }

      response.writeHead(303, { Location: "/complete" }).end();
      resolve({ code, pickedFolderId: pickedIds[0] });
    });
  });
}

async function main() {
  const clientId = readRequiredEnv("GOOGLE_DRIVE_CLIENT_ID", "GOOGLE_CLIENT_ID");
  const clientSecret = readRequiredEnv("GOOGLE_DRIVE_CLIENT_SECRET", "GOOGLE_CLIENT_SECRET");
  const expectedFolderId = readRequiredEnv("GOOGLE_DRIVE_FOLDER_ID");
  await ensureTokenFileDoesNotExist();

  const state = randomBytes(32).toString("base64url");
  const authorizationUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authorizationUrl.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: EXPECTED_REDIRECT_URI,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
    include_granted_scopes: "false",
    trigger_onepick: "true",
    allow_folder_selection: "true",
    state,
  }).toString();

  const server = createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(4173, "localhost", resolve);
  });

  try {
    const callbackPromise = waitForOAuthCallback(server, state);
    callbackPromise.catch(() => {});
    // The Google authorization URL is opened in the user's browser, not printed to the terminal.
    await openBrowser(authorizationUrl.toString());
    console.log("Google authorization opened in your browser. Select the existing CV destination folder.");
    console.log("This local setup waits up to 10 minutes and does not print OAuth credentials or tokens.");

    const callback = await callbackPromise;
    if (callback.pickedFolderId !== expectedFolderId) {
      throw new Error("The selected folder does not match GOOGLE_DRIVE_FOLDER_ID. No token was saved.");
    }

    const tokens = await exchangeAuthorizationCode(callback.code, clientId, clientSecret);
    if (!tokens.refresh_token || !tokens.access_token) {
      throw new Error("Google did not return the required offline refresh token. No token was saved; revoke the app grant and retry with consent.");
    }
    const tokenScopes = typeof tokens.scope === "string" ? tokens.scope.split(/\s+/).filter(Boolean) : [];
    if (tokenScopes.length && (tokenScopes.length !== 1 || tokenScopes[0] !== SCOPE)) {
      throw new Error("Google granted an unexpected OAuth scope. No token was saved; revoke the old grant and retry.");
    }

    await verifyFolderAccess(expectedFolderId, tokens.access_token);
    await writeFile(TOKEN_FILE, tokens.refresh_token, { flag: "wx", mode: 0o600 });
    console.log(`Setup complete. The new refresh token is stored in the Git-ignored local file ${TOKEN_FILE}.`);
    console.log("Pipe that file directly into `vercel env add` or `vercel env update` as a Production Secret; do not open or print its contents.");
  } finally {
    server.close();
  }
}

main().catch(() => {
  console.error("Google Drive Picker setup failed. No token value was printed. Check the setup instructions and try again.");
  process.exitCode = 1;
});
