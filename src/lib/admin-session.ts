export const ADMIN_SESSION_COOKIE = "molale_admin_session";
export const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8;

const encoder = new TextEncoder();

function base64UrlEncode(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlDecode(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function getSigningKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

export async function createAdminSession(secret = process.env.ADMIN_SESSION_SECRET) {
  if (!secret || secret.length < 32) throw new Error("Admin session signing key is not configured.");
  const expiresAt = Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE;
  const data = encoder.encode(`molale-admin-session:${expiresAt}`);
  const signature = await crypto.subtle.sign("HMAC", await getSigningKey(secret), data);
  return `${expiresAt}.${base64UrlEncode(new Uint8Array(signature))}`;
}

export async function verifyAdminSession(token?: string | null, secret = process.env.ADMIN_SESSION_SECRET) {
  if (!token || !secret || secret.length < 32) return false;

  try {
    const [expiresText, signatureText, ...extra] = token.split(".");
    if (extra.length || !/^\d{10}$/.test(expiresText) || !signatureText) return false;

    const expiresAt = Number(expiresText);
    const now = Math.floor(Date.now() / 1000);
    if (expiresAt <= now || expiresAt > now + ADMIN_SESSION_MAX_AGE + 60) return false;

    return await crypto.subtle.verify(
      "HMAC",
      await getSigningKey(secret),
      base64UrlDecode(signatureText),
      encoder.encode(`molale-admin-session:${expiresAt}`),
    );
  } catch {
    return false;
  }
}

export async function hasAdminSession(request: Request) {
  const cookie = request.headers.get("cookie") || "";
  const prefix = `${ADMIN_SESSION_COOKIE}=`;
  const value = cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith(prefix))?.slice(prefix.length);
  try {
    return await verifyAdminSession(value ? decodeURIComponent(value) : null);
  } catch {
    return false;
  }
}
