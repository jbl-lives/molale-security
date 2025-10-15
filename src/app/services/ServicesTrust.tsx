"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ShieldCheck, ClipboardSignature, MessageSquare, ChevronDown, Circle } from "lucide-react";

const guarantees = [
  { icon: ShieldCheck,        title: "Compliance first",      desc: "PSIRA-registered company and officers. Documented SOPs and lawful conduct at all times." },
  { icon: ClipboardSignature, title: "Service-level clarity", desc: "Written post orders, escalation paths and scheduled reviews to keep quality visible." },
  { icon: MessageSquare,      title: "Clear communication",   desc: "Control room updates via phone/WhatsApp, with incident numbers and follow-ups." },
];

const QA = [
  { q: "Do you cover areas outside Klerksdorp?", a: "Yes. Primary coverage ~25 km and on-demand up to ~40 km (Orkney, Stilfontein, Khuma, Jouberton, Vaal Reefs and surrounds)." },
  { q: "Are you PSIRA compliant?", a: "Yes. Company and officers are PSIRA compliant. We maintain SOPs, site-post orders, and incident-report standards." },
  { q: "Typical response times?", a: "10–20 minutes in primary areas. Traffic and distance may affect ETA; we’ll confirm on booking." },
  { q: "Can you integrate with existing systems?", a: "We install, upgrade, and integrate most mainstream CCTV and alarm systems with monitoring." },
];

export default function ServicesTrust() {
  return (
    <section className="w-full py-12 md:py-16 border-y">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* RIGHT: FAQ (dark gray everywhere, white text) */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900">FAQs</h2>

            <Accordion type="single" collapsible className="space-y-3">
              {QA.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`q${i}`}
                  className={`
                    relative overflow-hidden rounded-md border bg-[#364153] text-white
                    ring-1 ring-white/20 border-white/10
                    before:absolute before:inset-y-0 before:left-0 before:w-[3px]
                    before:bg-transparent
                    data-[state=open]:before:bg-[var(--color-primary)]
                  `}
                >
                  <AccordionTrigger
                    className="
                      group flex items-center justify-between gap-4
                      px-4 md:px-5 py-4 text-left font-medium
                      hover:no-underline
                      [&>svg]:hidden
                    "
                  >
                    <span className="pr-8">{item.q}</span>

                    {/* circular chevron */}
                    <span
                      className="
                        grid h-8 w-8 place-items-center rounded-full bg-white/90 text-gray-800
                        transition
                        group-data-[state=open]:bg-[var(--color-primary)]
                        group-data-[state=open]:text-white
                      "
                    >
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </span>
                  </AccordionTrigger>

                  {/* content matches dark background + white text */}
                  <AccordionContent className="px-4 md:px-5 pb-4">
                    <div className="rounded-md bg-[#364153]">
                      <ul className="space-y-2 text-white/90">
                        <li className="flex items-start gap-2">
                          <Circle className="mt-1 h-3 w-3 text-white/90" />
                          <span>{item.a}</span>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* LEFT: Commitments (stacked, no boxes) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our commitments</h2>

            <div className="mt-6">
              {guarantees.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="relative py-6 border-b border-gray-400/70 last:border-none">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-700 text-[var(--color-primary)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-gray-700">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
