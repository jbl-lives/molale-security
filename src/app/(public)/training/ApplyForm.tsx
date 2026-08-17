// src/app/(public)/training/ApplyForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Play, CheckCircle } from "lucide-react";

export default function ApplyForm({ preselectedCourse }: { preselectedCourse?: string }) {
  const router = useRouter();
  const [step, setStep] = useState<"form" | "verify">("form");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationId, setVerificationId] = useState("");

  // Step 1: Send verification code
  const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const fd = new FormData(e.currentTarget as HTMLFormElement);
  const rawPhone = fd.get("phone")?.toString().trim();

  if (!rawPhone) {
    toast.error("Enter phone number");
    setLoading(false);
    return;
  }

  // Format phone: 0834238976 → +27834238976
  const formattedPhone = rawPhone.replace(/\D/g, "");
  const finalPhone = formattedPhone.startsWith("0")
    ? `+27${formattedPhone.slice(1)}`
    : formattedPhone.startsWith("27")
    ? `+${formattedPhone}`
    : `+27${formattedPhone}`;

  try {
    const res = await fetch("/api/verify/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: finalPhone }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to send code");
    }

    setVerificationId(data.sid);
    setStep("verify");
    toast.success("Code Sent!", {
      description: `Check SMS on ${rawPhone}`,
    });
  } catch (err: any) {
    toast.error("Failed", { description: err.message });
  } finally {
    setLoading(false);
  }
};

  // Step 2: Verify code + submit application
  const verifyAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const verifyRes = await fetch("/api/verify/check", {
        method: "POST",
        body: JSON.stringify({ verificationId, code }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyRes.ok) throw new Error(verifyData.error);

      // Now submit full application
      const appRes = await fetch("/api/applications", {
        method: "POST",
        body: JSON.stringify({
          courseTitle: preselectedCourse,
          fullName: "Verified User", // You can collect name later
          phone,
        }),
      });
      if (!appRes.ok) throw new Error("Application failed");

      toast.success("Welcome!", {
        description: "Check your SMS — we just sent your welcome message!",
      });
      router.push("/training");
    } catch (err: any) {
      toast.error("Invalid Code", { description: "Try again" });
    } finally {
      setLoading(false);
    }
  };

  if (step === "verify") {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Enter Code</h2>
        <form onSubmit={verifyAndSubmit} className="space-y-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="123456"
            maxLength={6}
            className="w-full text-center text-2xl font-mono p-4 border rounded-xl"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
          >
            {loading ? "Verifying..." : <>Verify <CheckCircle /></>}
          </button>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={sendCode} className="space-y-5">
      <div>
        <label>Phone Number</label>
        <input name="phone" required placeholder="083 423 8976" className="input-field" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
      >
        {loading ? "Sending Code..." : <>Send Code <Play className="h-5 w-5" /></>}
      </button>
    </form>
  );
}