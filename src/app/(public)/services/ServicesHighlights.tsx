// src/app/services/ServicesHighlights.tsx
import { ShieldCheck, Clock, Radio, ClipboardList, type LucideIcon } from "lucide-react";

type Item = { icon: LucideIcon; title: string; desc: string };

const items: Item[] = [
  { icon: ShieldCheck,   title: "PSIRA Compliant", desc: "Company & officers registered. SOPs and audits in place." },
  { icon: Clock,         title: "Rapid Dispatch",  desc: "Typical 10–20 min in primary areas; ETA confirmed upfront." },
  { icon: Radio,         title: "24/7 Monitoring", desc: "Always-on control room with GPS-tracked patrols and logs." },
  { icon: ClipboardList, title: "Clear SLAs",      desc: "Post orders, escalation paths and scheduled reviews." },
];

/**
 * Very feint diagonal gradients (white → color with ~8–12% opacity).
 * Adjust the rgba alpha at the end of each gradient if you want stronger/weaker color.
 */
const CARD_BG = [
  "bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(236,72,153,0.10)_100%)]",   // pink
  "bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(14,165,233,0.10)_100%)]",   // sky
  "bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(139,92,246,0.10)_100%)]",   // violet
  "bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(20,184,166,0.10)_100%)]",   // teal
];

const CHIP = [
  "bg-[rgba(236,72,153,0.12)] text-[rgb(236,72,153)]",  // pink
  "bg-[rgba(14,165,233,0.12)]  text-[rgb(14,165,233)]", // sky
  "bg-[rgba(139,92,246,0.12)]  text-[rgb(139,92,246)]", // violet
  "bg-[rgba(20,184,166,0.12)]  text-[rgb(20,184,166)]", // teal
];

export default function ServicesHighlights() {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className={[
                "rounded-2xl p-6",
                "shadow-md ring-1 ring-black/5",
                "hover:shadow-[0_16px_40px_rgba(0,0,0,.10)] transition",
                "backdrop-blur-[1px]", // tiny bit of glassiness
                CARD_BG[i % CARD_BG.length],
              ].join(" ")}
            >
              <span
                className={[
                  "inline-grid h-12 w-12 place-items-center rounded-xl",
                  "ring-1 ring-black/5 bg-white/60", // subtle glass chip base
                  CHIP[i % CHIP.length],
                ].join(" ")}
              >
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
