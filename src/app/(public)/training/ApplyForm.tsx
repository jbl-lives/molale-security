"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";

interface ApplyFormProps {
  preselectedCourse?: string;
  onSubmitted?: () => void;
}

export default function ApplyForm({ preselectedCourse, onSubmitted }: ApplyFormProps) {
  const router = useRouter();
  const [step, setStep] = useState<"form" | "verify">("form");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationId, setVerificationId] = useState("");

  // Step 1: Send verification code
  const sendCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!phone.trim()) {
      toast.error("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    const formattedPhone = phone.replace(/\D/g, "");
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
        throw new Error(data.error || "Failed to send verification code.");
      }

      setVerificationId(data.sid);
      setStep("verify");
      toast.success("Code Dispatched", {
        description: `SMS sent to ${finalPhone}`,
      });
    } catch (err: any) {
      toast.error("Verification Error", { description: err.message });
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verificationId, code }),
      });
      
      const verifyData = await verifyRes.json();
      if (!verifyRes.ok) throw new Error(verifyData.error || "Invalid verification code.");

      const appRes = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseTitle: preselectedCourse || "General Application",
          fullName,
          phone,
        }),
      });

      if (!appRes.ok) throw new Error("Failed to record application.");

      toast.success("Enrollment Successful", {
        description: "Application confirmed. Check your SMS for confirmation details.",
      });

      // Call the callback to close the modal dialog if present
      if (onSubmitted) {
        onSubmitted();
      }

      router.push("/training");
    } catch (err: any) {
      toast.error("Verification Failed", { description: err.message || "Please re-check your code." });
    } finally {
      setLoading(false);
    }
  };

  if (step === "verify") {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#c29a50] mb-2">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Security Check</h3>
          <p className="text-slate-400 text-xs">
            Enter the 6-digit SMS code sent to <span className="text-white font-mono">{phone}</span>
          </p>
        </div>

        <form onSubmit={verifyAndSubmit} className="space-y-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="0 0 0 0 0 0"
            maxLength={6}
            className="w-full text-center text-2xl font-mono tracking-widest py-4 px-3 bg-slate-900 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-[#c29a50] transition-all"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c29a50] text-slate-950 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl disabled:opacity-50 active:scale-95"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
              </>
            ) : (
              <>
                Confirm Enrollment <CheckCircle2 className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    );
  }

  return (
    <form onSubmit={sendCode} className="space-y-5">
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block">
          Full Name
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder="e.g. John Doe"
          className="w-full p-4 bg-slate-900 border border-white/10 rounded-2xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c29a50] transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block">
          Mobile Number (SMS Verification)
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="083 123 4567"
          className="w-full p-4 bg-slate-900 border border-white/10 rounded-2xl text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#c29a50] transition-all"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#c29a50] text-slate-950 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl disabled:opacity-50 active:scale-95"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Requesting Code...
          </>
        ) : (
          <>
            Proceed to Verification <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}