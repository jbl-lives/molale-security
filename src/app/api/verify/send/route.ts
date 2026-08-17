// src/app/api/verify/send/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    // Format SA phone: 0834238976 → 0834238976 (SMSPortal accepts local format)
    const formatted = phone.replace(/\D/g, "");
    const finalPhone = formatted.startsWith("0") ? formatted : `0${formatted}`;

    // Send OTP
    const response = await axios.post(
      "https://api.smsportal.com/v1/sms/send",
      {
        to: finalPhone,
        message: `Molale Security OTP: {{code}}. Expires in 5 mins. Reply STOP to unsubscribe.`,
        sender_id: process.env.SMSPORTAL_SENDER_ID!,
      },
      {
        auth: {
          username: process.env.SMSPORTAL_USERNAME!,
          password: process.env.SMSPORTAL_PASSWORD!,
        },
      }
    );

    if (response.data.success) {
      return NextResponse.json({ sid: response.data.message_id });
    } else {
      throw new Error(response.data.error || "Failed to send");
    }
  } catch (error: any) {
    console.error("SMSPortal error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Failed to send code. Try WhatsApp or call 073 123 4567." },
      { status: 400 }
    );
  }
}