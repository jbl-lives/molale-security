// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Match /admin/* (from (admin)/admin/)
  if (pathname.startsWith("/admin")) {
    const adminCookie = req.cookies.get("admin")?.value;

    if (!adminCookie || adminCookie !== "true") {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.search = ""; // Clear query params
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*", // This matches /admin/courses/list
  ],
};