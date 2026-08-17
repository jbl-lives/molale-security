"use client";

import { ClipboardList, PhoneCall, Car, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  { 
    icon: PhoneCall, 
    title: "Consultation", 
    desc: "Immediate needs assessment via phone, WhatsApp, or a strategic site visit." 
  },
  { 
    icon: ClipboardList, 
    title: "Site Architecture", 
    desc: "Risk review and custom post orders with response routes finalized in writing." 
  },
  { 
    icon: Car, 
    title: "Active Deployment", 
    desc: "Vetted officers briefed, tactical tech installed, and 24/7 monitoring live." 
  },
  { 
    icon: FileCheck, 
    title: "Sustained Review", 
    desc: "Continuous incident logging and KPI reviews to maintain elite service quality." 
  },
];

export default function Process() {
  return (
    <section className="relative w-full py-24 bg-slate-950 overflow-hidden border-t border-white/5">
      {/* Background Texture & Glows */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.4em] text-[#D4A017] uppercase">
            Operational Protocol
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 font-bold text-white tracking-tight">
            How the <span className="text-slate-400 font-light italic text-5xl">Shield Activates.</span>
          </h2>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <article key={title} className="group relative">
                
                {/* Step Number Badge */}
                <div className="mb-6 flex items-center justify-between relative z-10">
                  <div className="h-24 w-24 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#D4A017] shadow-2xl transition-all duration-500 group-hover:border-[#D4A017]/50 group-hover:bg-slate-800">
                    <Icon className="h-10 w-10 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="text-5xl font-black text-white/5 group-hover:text-[#D4A017]/10 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#D4A017] transition-colors">
                    {title}
                  </h3>
                  <div className="mt-3 h-0.5 w-8 bg-[#D4A017] group-hover:w-full transition-all duration-500" />
                  <p className="mt-4 text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {desc}
                  </p>
                </div>

                {/* Desktop Arrow Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 translate-x-1/2">
                    <ArrowRight className="h-5 w-5 text-white/10 group-hover:text-[#D4A017] transition-colors" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col items-center gap-6">
           <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Ready to begin deployment?</p>
           <button className="px-10 py-4 bg-[#D4A017] text-slate-950 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#D4A017]/20">
              START CONSULTATION
           </button>
        </div>
      </div>
    </section>
  );
}