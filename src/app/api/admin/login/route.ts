// src/app/api/admin/login/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_EMAIL = "admin@molale.co.za";
const ADMIN_PASSWORD = "molale2025";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const cookieStore = cookies();
    (await cookieStore).set("admin", "true", {
      httpOnly: true,
      secure: false, // Local dev
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid" }, { status: 401 });
}