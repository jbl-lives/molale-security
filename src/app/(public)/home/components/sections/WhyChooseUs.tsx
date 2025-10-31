"use client";

import { ShieldCheck, Zap, UserCheck } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      title: "PSIRA Compliant",
      desc:
        "We operate under PSIRA regulations with documented SOPs, regular audits, and continuous officer upskilling.",
      icon: ShieldCheck,
    },
    {
      title: "Rapid Response",
      desc:
        "24/7 control-room monitoring with real-time dispatch and clear escalation paths—protection day or night.",
      icon: Zap,
    },
    {
      title: "Vetted Officers",
      desc:
        "Identity-verified and background-checked personnel trained in site etiquette, de-escalation, and incident reporting.",
      icon: UserCheck,
    },
  ] as const;

  return (
    <section className="w-full py-12 md:py-16 border-t border-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Molale</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map(({ title, desc, icon: Icon }) => (
            <article
              key={title}
              className="
                group relative p-6
                bg-gradient-to-br from-white to-gray-50
                shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]
                transition
                hover:shadow-[0_8px_28px_rgb(0_0_0_/_0.10)] hover:-translate-y-0.5
                focus-within:shadow-[0_8px_28px_rgb(0_0_0_/_0.12)]
                rounded-xl
              "
            >
              {/* icon chip */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl
                              bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>

              {/* subtle sheen on hover (very light) */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
                              bg-[radial-gradient(120%_80%_at_10%_-20%,rgba(255,255,255,.6),transparent_60%)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
