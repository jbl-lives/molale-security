"use client";

import { ShieldCheck, Zap, UserCheck, Check } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      title: "PSIRA Compliant",
      desc: "Operating strictly under PSIRA regulations with documented SOPs and continuous officer upskilling.",
      icon: ShieldCheck,
      points: ["Regular Audits", "Accredited Training"]
    },
    {
      title: "Rapid Response",
      desc: "24/7 control-room monitoring with real-time GPS dispatch for protection when every second counts.",
      icon: Zap,
      points: ["Direct Escalation", "GPS Tracking"]
    },
    {
      title: "Vetted Officers",
      desc: "Background-checked personnel trained in site etiquette, de-escalation, and professional reporting.",
      icon: UserCheck,
      points: ["ID Verified", "Tactical Training"]
    },
  ] as const;

  return (
    <section className="relative w-full py-24 bg-slate-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#D4A017]/5 blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.4em] text-[#D4A017] uppercase">
              The Molale Standard
            </span>
            <h2 className="text-4xl md:text-5xl mt-3 font-bold text-white tracking-tight">
              Why Corporate Leaders <br />
              <span className="text-slate-400 font-light italic">Trust Our Shield.</span>
            </h2>
          </div>
          <div className="h-px flex-1 bg-white/10 mx-10 hidden lg:block mb-4" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map(({ title, desc, icon: Icon, points }) => (
            <article
              key={title}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#D4A017]/30 hover:-translate-y-2 shadow-2xl"
            >
              {/* Icon Container */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-[#D4A017] shadow-xl border border-white/5 transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white tracking-tight">{title}</h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">{desc}</p>

              {/* Added mini-checkpoints for extra "Professional" feel */}
              <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-[#D4A017]" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{point}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-linear-to-r from-transparent via-[#D4A017]/0 to-transparent group-hover:via-[#D4A017]/50 transition-all duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}