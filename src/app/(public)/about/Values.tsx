// src/components/about/Values.tsx
import { values } from "@/data/company";
import {
  ShieldCheck,        // Integrity
  Zap,                // Preparedness
  Handshake,          // Respect
  ClipboardList,      // Accountability
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
    <section className="w-full bg-[var(--color-primary)] py-14 md:py-16 border-y">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        {/* Heading contrasts against the primary background */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">Our Values</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {values.map((v) => {
            const key = v.title.trim().toLowerCase();
            const Icon = ICON_MAP[key] ?? ShieldCheck; // fallback
            return (
              <div
                key={v.title}
                className="p-6 bg-gradient-to-br from-white to-gray-50
                           shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]
                           hover:shadow-[0_8px_28px_rgb(0_0_0_/_0.10)]
                           transition rounded-xl"
              >
                {/* icon chip (consistent with the rest of the site) */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl
                                bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
