// src/middleware.ts
import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/admin")) {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token || token !== process.env.ADMIN_TOKEN) {
      return new NextResponse("Unauthorized", { status: 401, headers: { "WWW-Authenticate": "Bearer" } });
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
