// src/app/api/admin/update-status/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { hasAdminSession } from "@/lib/admin-session";

export async function POST(req: Request) {
  if (!(await hasAdminSession(req))) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id, status } = await req.json();
  await prisma.application.update({ where: { id }, data: { status } });
  return NextResponse.json({ success: true });
}
