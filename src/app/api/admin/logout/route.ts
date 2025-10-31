// src/app/api/admin/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  (await cookies()).delete("admin");
  const response = NextResponse.redirect(new URL("/login", "http://localhost:3000"));
  response.cookies.delete("admin");
  return response;
}