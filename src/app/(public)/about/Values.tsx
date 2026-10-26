"use client";

import { values } from "@/data/company";
import {
  ShieldCheck,   // Integrity
  Zap,           // Preparedness
  Handshake,     // Respect
  ClipboardList, // Accountability
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  integrity: ShieldCheck,
  preparedness: Zap,
  respect: Handshake,
  accountability: ClipboardList,
};

export default function Values() {
  return (
    <section className="relative w-full bg-slate-950 py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background Decorative Element: Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.4em] text-[#c29a50] uppercase">
            The Molale Standard
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 font-bold text-white tracking-tight">
            Our Core <span className="font-light italic text-slate-400">Values</span>
          </h2>
          <div className="mt-6 h-1 w-16 bg-[#c29a50] mx-auto rounded-full" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {values.map((v) => {
            const key = v.title.trim().toLowerCase();
            const Icon = ICON_MAP[key] ?? ShieldCheck;

            return (
              <div
                key={v.title}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-4xl transition-all duration-500 hover:bg-white/10 hover:border-[#c29a50]/30 hover:-translate-y-2 shadow-2xl"
              >
                {/* Icon Container with Glow */}
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-[#c29a50] shadow-lg border border-white/5 transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                  {/* Subtle Glow behind icon on hover */}
                  <div className="absolute inset-0 bg-[#c29a50]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white tracking-tight uppercase group-hover:text-[#c29a50] transition-colors">
                    {v.title}
                  </h3>
                  <div className="mt-2 h-px w-8 bg-[#c29a50]/30 group-hover:w-full transition-all duration-500" />
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {v.desc}
                  </p>
                </div>

                {/* Corner Decorative Accent */}
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                   <ShieldCheck className="h-12 w-12 text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}