// src/app/api/admin/toggle-paid/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id, paid } = await req.json();
  await prisma.application.update({ where: { id }, data: { paid } });
  return NextResponse.json({ success: true });
}