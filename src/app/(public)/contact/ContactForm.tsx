"use client";

import { SendHorizontal, ChevronDown } from "lucide-react";
import { useCallback } from "react";

export default function ContactForm() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    console.log(Object.fromEntries(fd.entries()));
    alert("Inquiry Received. A security consultant will contact you shortly.");
  }, []);

  const inputStyles = `
    mt-2 w-full rounded-2xl bg-white/5 border border-white/10 text-white 
    placeholder-slate-500 px-5 py-4 outline-none transition-all
    focus:border-[#D4A017]/50 focus:bg-white/[0.08] focus:ring-4 focus:ring-[#D4A017]/10
  `;

  const labelStyles = "text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A017] ml-1";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelStyles}>Full Name</label>
          <input name="name" type="text" placeholder="John Doe" className={inputStyles} required />
        </div>
        <div>
          <label className={labelStyles}>Contact Number</label>
          <input name="phone" type="tel" placeholder="083 123 4567" className={inputStyles} required />
        </div>
      </div>

      <div>
        <label className={labelStyles}>Email Address (Optional)</label>
        <input name="email" type="email" placeholder="johndoe@consultant.com" className={inputStyles} />
      </div>

      <div className="relative">
        <label className={labelStyles}>Required Service</label>
        <select
          name="service"
          className={`${inputStyles} appearance-none cursor-pointer`}
          defaultValue=""
          required
        >
          <option value="" disabled className="bg-slate-900">Select an operational unit</option>
          <option value="Armed Response" className="bg-slate-900">Armed Response</option>
          <option value="Physical Guarding" className="bg-slate-900">Physical Guarding</option>
          <option value="VIP Protection" className="bg-slate-900">VIP Protection</option>
          <option value="CCTV & Alarms" className="bg-slate-900">CCTV & Alarms</option>
          <option value="Screening" className="bg-slate-900">Background Screening</option>
          <option value="Investigations" className="bg-slate-900">Private Investigations</option>
        </select>
        <ChevronDown className="absolute right-5 bottom-4 h-5 w-5 text-slate-500 pointer-events-none" />
      </div>

      <div>
        <label className={labelStyles}>Operational Brief / Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Briefly describe your security requirements..."
          className={inputStyles}
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="group relative inline-flex items-center gap-3 rounded-full bg-[#D4A017]
                    px-10 py-4 font-bold text-slate-950 transition-all 
                    hover:scale-105 hover:shadow-[0_0_30px_rgba(212,160,23,0.3)] 
                    active:scale-95 cursor-pointer overflow-hidden"
        >
          <span className="relative z-10 uppercase text-xs tracking-widest">Submit Inquiry</span>
          <SendHorizontal className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </form>
  );
}