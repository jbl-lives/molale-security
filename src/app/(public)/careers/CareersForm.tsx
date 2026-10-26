"use client";

import { useRef, useState } from "react";
import { Loader2, UploadCloud } from "lucide-react";

const inputClass = "mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#c29a50]/70 focus:ring-4 focus:ring-[#c29a50]/10";
const labelClass = "text-[10px] font-bold uppercase tracking-[0.2em] text-[#c29a50]";

export default function CareersForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const inFlight = useRef(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;
    const form = e.currentTarget;
    const file = (new FormData(form).get("cv")) as File | null;
    if (!file || file.size > 4 * 1024 * 1024) {
      setMessage({ type: "error", text: "Choose a CV file that is 4 MB or smaller." });
      return;
    }
    inFlight.current = true;
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/careers", { method: "POST", body: new FormData(form) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "We could not submit your CV. Please try again.");
      form.reset();
      setMessage({ type: "success", text: "Thank you. Your CV has been submitted successfully." });
    } catch (error) {
      setMessage({ type: "error", text: error instanceof Error ? error.message : "We could not submit your CV. Please try again." });
    } finally {
      inFlight.current = false;
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="careers-company-website">Leave this field empty</label>
        <input id="careers-company-website" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label className={labelClass} htmlFor="careers-name">Full name</label>
        <input className={inputClass} id="careers-name" name="fullName" autoComplete="name" maxLength={120} required />
      </div>
      <div>
        <label className={labelClass} htmlFor="careers-email">Email address</label>
        <input className={inputClass} id="careers-email" name="email" type="email" autoComplete="email" maxLength={254} required />
      </div>
      <div>
        <label className={labelClass} htmlFor="careers-phone">Contact number</label>
        <input className={inputClass} id="careers-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} required />
      </div>
      <div>
        <label className={labelClass} htmlFor="careers-cv">CV file</label>
        <input
          className={`${inputClass} file:mr-4 file:rounded-full file:border-0 file:bg-[#c29a50] file:px-4 file:py-2 file:text-xs file:font-bold file:text-slate-950`}
          id="careers-cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          required
        />
      </div>
      <button
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c29a50] px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={loading}
      >
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending CV...</> : <><UploadCloud className="h-4 w-4" /> Upload CV</>}
      </button>
      {message && (
        <p role="status" aria-live="polite" className={`text-sm ${message.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>
          {message.text}
        </p>
      )}
    </form>
  );
}
