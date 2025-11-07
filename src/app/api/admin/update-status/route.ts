// src/app/api/admin/update-status/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, status } = await req.json();
  await prisma.application.update({ where: { id }, data: { status } });
  return NextResponse.json({ success: true });
}