// src/components/services/ServicesFaq.tsx
"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const QA = [
  {
    q: "Do you cover areas outside Klerksdorp?",
    a: "Yes. Primary coverage ~25 km and on-demand up to ~40 km (Orkney, Stilfontein, Khuma, Jouberton, Vaal Reefs and surrounds).",
  },
  {
    q: "Are you PSIRA compliant?",
    a: "Yes. Company and officers are PSIRA compliant. We maintain SOPs, site-post orders, and incident-report standards.",
  },
  {
    q: "Typical response times?",
    a: "10–20 minutes in primary areas. Traffic and distance may affect ETA; we’ll confirm on booking.",
  },
  {
    q: "Can you integrate with existing systems?",
    a: "We install, upgrade, and integrate most mainstream CCTV and alarm systems with monitoring.",
  },
];

export default function ServicesFaq() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-screen-md px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">FAQs</h2>
        <Accordion type="single" collapsible className="mt-8 divide-y rounded-xl border bg-white">
          {QA.map((item, i) => (
            <AccordionItem key={i} value={`q${i}`} className="px-4">
              <AccordionTrigger className="text-left text-gray-900">{item.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
