// src/app/api/applications/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { courseTitle, fullName, phone } = body;

    if (!courseTitle || !fullName || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const course = await prisma.course.findFirst({ where: { title: courseTitle } });
    if (!course) return NextResponse.json({ error: "Invalid course" }, { status: 404 });

    await prisma.application.create({
      data: {
        courseId: course.id,
        fullName,
        email: body.email || null,
        phone,
        notes: body.notes || null,
        status: "PENDING",
        paid: false,
      },
    });

    // SEND WHATSAPP
    await fetch("https://api.twilio.com/2010-04-01/Accounts/" + process.env.TWILIO_SID + "/Messages.json", {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(process.env.TWILIO_SID + ":" + process.env.TWILIO_TOKEN).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        To: "whatsapp:" + phone,
        From: process.env.TWILIO_WHATSAPP!,
        Body: `🎉 Welcome ${fullName}! \n\nThank you for applying to *${courseTitle}* at Molale Security Training Academy.\n\nWe'll confirm your seat and send joining instructions within 24 hours.\n\nQuestions? Reply here or call 073 123 4567\n\nSee you soon! 🚔`,
      }),
    });

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}