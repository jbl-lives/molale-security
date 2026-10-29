// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from "@/lib/admin-session";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Match /admin/* (from (admin)/admin/)
  if (pathname.startsWith("/admin")) {
    const adminCookie = req.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    if (!(await verifyAdminSession(adminCookie))) {
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
