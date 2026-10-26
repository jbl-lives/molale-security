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
    <section className="relative w-full py-20 md:py-24 bg-slate-950 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8f692b]/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#c29a50]/5 blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-[#e0c58e] uppercase">
              The Molale Standard
            </span>
            <h2 className="text-3xl md:text-4xl mt-3 font-semibold text-white tracking-tight">
              A standard built on <span className="text-slate-300">trust.</span>
            </h2>
          </div>
          <div className="h-px flex-1 bg-white/10 mx-10 hidden lg:block mb-4" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map(({ title, desc, icon: Icon, points }) => (
            <article
              key={title}
              className="group relative p-7 md:p-8 rounded-2xl bg-white/[0.06] border border-white/10 transition-colors duration-300 hover:bg-white/[0.09] hover:border-[#c29a50]/40"
            >
              {/* Icon Container */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-[#e0c58e] border border-white/10">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white tracking-tight">{title}</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{desc}</p>

              {/* Added mini-checkpoints for extra "Professional" feel */}
              <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#e0c58e]" />
                    <span className="text-xs font-medium text-slate-300">{point}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Decorative Line */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
