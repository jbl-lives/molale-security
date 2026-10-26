"use client";

import { ShieldCheck, Clock, Radio, ClipboardList, type LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; title: string; desc: string };

const items: Item[] = [
  { icon: ShieldCheck,   title: "PSIRA Compliant", desc: "Fully accredited company and vetted officers with active registration." },
  { icon: Clock,         title: "Rapid Dispatch",  desc: "GPS-optimized response times (10–20 min) within our primary perimeter." },
  { icon: Radio,         title: "24/7 Command",   desc: "Always-on control room with real-time patrol tracking and digital logs." },
  { icon: ClipboardList, title: "Clear SLAs",      desc: "Contractual excellence with documented escalation and performance reviews." },
];

export default function ServicesHighlights() {
  return (
    <section className="relative w-full py-20 bg-slate-950 overflow-hidden border-y border-white/5">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {/* Subtle Glows to prevent it looking "flat" */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#8f692b]/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#c29a50]/5 blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#c29a50]/30 hover:-translate-y-2 shadow-2xl"
            >
              {/* Icon Container with Molale Gold */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-[#c29a50] shadow-xl border border-white/5 transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>

              {/* Title & Description */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#c29a50] transition-colors">
                  {title}
                </h3>
                {/* Gold accent line that expands on hover */}
                <div className="mt-3 h-[2px] w-8 bg-[#c29a50]/40 group-hover:w-full transition-all duration-700" />
                
                <p className="mt-4 text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {desc}
                </p>
              </div>

              {/* Decorative "Status" Light */}
              <div className="absolute top-8 right-8 h-1.5 w-1.5 rounded-full bg-[#a77c2e] animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}