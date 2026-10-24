import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
// Stay below Vercel's 4.5 MB function request limit, leaving room for multipart fields and boundaries.
const MAX_REQUEST_SIZE = 4.4 * 1024 * 1024;
const DEFAULT_FOLDER_ID = "1hFvl6cO-FbrwyATGFMAWdn7RH29Zj4p7";
const MIME_BY_EXTENSION: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

class DriveAuthorizationError extends Error {}

async function getDriveAccessToken() {
  const clientId = process.env.GOOGLE_DRIVE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET || process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) throw new DriveAuthorizationError();

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new DriveAuthorizationError();
  const token = await response.json() as { access_token?: string };
  if (!token.access_token) throw new DriveAuthorizationError();
  return token.access_token;
}

function isValidFileContent(extension: string, bytes: Buffer) {
  if (extension === "pdf") {
    return bytes.length >= 32
      && bytes.subarray(0, 5).toString("ascii") === "%PDF-"
      && bytes.subarray(Math.max(0, bytes.length - 1024)).includes(Buffer.from("%%EOF"));
  }
  if (extension === "doc") {
    return bytes.length >= 512
      && bytes.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]));
  }
  if (extension === "docx") {
    return bytes[0] === 0x50
      && bytes[1] === 0x4b
      && bytes.includes(Buffer.from("[Content_Types].xml"))
      && bytes.includes(Buffer.from("word/document.xml"));
  }
  return false;
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length"));
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_SIZE) {
      return NextResponse.json({ error: "Your upload request is too large. Choose a CV under 4 MB." }, { status: 413 });
    }

    const origin = request.headers.get("origin");
    if (origin && origin !== new URL(request.url).origin) {
      return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
    }

    const form = await request.formData();
    // A honeypot field deters basic form bots without storing applicant data.
    if (String(form.get("companyWebsite") || "").trim()) {
      return NextResponse.json({ message: "CV uploaded" }, { status: 201 });
    }

    const fullName = String(form.get("fullName") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const file = form.get("cv");

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!fullName || fullName.length > 120 || !validEmail || email.length > 254 || !phone || phone.length > 30) {
      return NextResponse.json({ error: "Enter your name, email address and contact number." }, { status: 400 });
    }
    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: "Choose a CV file to upload." }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Your CV must be 4 MB or smaller." }, { status: 413 });
    }

    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    const mimeType = MIME_BY_EXTENSION[extension];
    // Ignore the client-supplied MIME type; use an allowlisted extension plus content signatures.
    if (!mimeType) {
      return NextResponse.json({ error: "Upload a PDF, DOC or DOCX file." }, { status: 400 });
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    if (!isValidFileContent(extension, bytes)) {
      return NextResponse.json({ error: "The file contents do not match the selected document type." }, { status: 400 });
    }

    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || DEFAULT_FOLDER_ID;
    const accessToken = await getDriveAccessToken();
    const uploadId = randomUUID();
    const boundary = `molale_${uploadId}`;
    const safeName = fullName.replace(/[\\/:*?"<>|\u0000-\u001f\u202a-\u202e\u2066-\u2069]/g, " ").replace(/\s+/g, " ").trim().slice(0, 100) || "Applicant";
    const date = new Date().toISOString().slice(0, 10);
    const metadata = JSON.stringify({
      name: `CV - ${safeName} - ${date} - ${uploadId.slice(0, 8)}.${extension}`,
      mimeType,
      parents: [folderId],
    });
    const payload = Buffer.concat([
      Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n`),
      Buffer.from(`--${boundary}\r\nContent-Type: ${mimeType}\r\n\r\n`),
      bytes,
      Buffer.from(`\r\n--${boundary}--`),
    ]);
    const upload = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true&fields=id", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": `multipart/related; boundary=${boundary}`,
        "Content-Length": String(payload.byteLength),
      },
      body: payload,
      cache: "no-store",
    });
    if (!upload.ok) {
      // Log only the upstream status; never log applicant data or OAuth responses.
      console.error("[careers] Drive upload failed with status", upload.status);
      return NextResponse.json({ error: "We could not save your CV. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ message: "CV uploaded" }, { status: 201 });
  } catch (error) {
    if (error instanceof DriveAuthorizationError) {
      console.error("[careers] Drive OAuth is missing, expired, or invalid.");
      return NextResponse.json({ error: "CV uploads are temporarily unavailable. Please contact us directly." }, { status: 503 });
    }
    console.error("[careers] CV upload request failed.");
    return NextResponse.json({ error: "We could not submit your CV. Please try again later." }, { status: 500 });
  }
}
