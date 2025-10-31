// src/app/api/applications/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const { courseTitle, fullName, email, phone, notes, startDate } = body;

  if (!courseTitle || !fullName || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const course = await prisma.course.findFirst({ where: { title: courseTitle } });
  if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });

  const application = await prisma.application.create({
    data: {
      courseId: course.id,
      fullName,
      email: email || null,
      phone,
      notes: notes || null,
      status: "PENDING",
    },
  });

  return NextResponse.json({ message: "Application submitted successfully" }, { status: 201 });
}