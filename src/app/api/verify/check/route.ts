// src/app/api/verify/check/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { verificationId, code } = await req.json();

    // Verify OTP (SMSPortal API)
    const response = await axios.post(
      "https://api.smsportal.com/v1/otp/verify",
      {
        message_id: verificationId,
        code,
      },
      {
        auth: {
          username: process.env.SMSPORTAL_USERNAME!,
          password: process.env.SMSPORTAL_PASSWORD!,
        },
      }
    );

    if (response.data.valid) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Invalid code" }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: "Verification failed" }, { status: 400 });
  }
}