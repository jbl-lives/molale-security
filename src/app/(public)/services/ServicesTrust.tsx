"use client";

import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from "@/components/ui/accordion";
import { 
  ShieldCheck, 
  ClipboardSignature, 
  MessageSquare, 
  ChevronDown, 
  CheckCircle2,
  HelpCircle
} from "lucide-react";

const guarantees = [
  { icon: ShieldCheck, title: "Compliance First", desc: "Full PSIRA accreditation for company and personnel. Strict adherence to documented SOPs and lawful tactical conduct." },
  { icon: ClipboardSignature, title: "SLA Precision", desc: "Written post orders and escalation protocols with scheduled performance reviews to ensure measurable quality." },
  { icon: MessageSquare, title: "Tactical Communication", desc: "Direct command center updates via encrypted channels, providing incident tracking and comprehensive follow-ups." },
];

const QA = [
  { q: "Operational coverage perimeter?", a: "We maintain a 25km primary rapid-response radius from Klerksdorp, with on-demand tactical support extending up to 40km including Vaal Reefs and surrounding mining sectors." },
  { q: "Regulatory compliance status?", a: "Molale Security is 100% PSIRA compliant. We maintain active registrations, liability insurance, and rigorous internal audit standards for all deployed units." },
  { q: "Standard response timeframes?", a: "Our benchmark is 10–20 minutes within primary zones. Real-time GPS dispatching allows us to provide an accurate ETA the moment a call is logged." },
  { q: "Infrastructure integration?", a: "Our technical division specializes in the installation and integration of high-definition CCTV and AI-driven alarm systems into our centralized monitoring grid." },
];

export default function ServicesTrust() {
  return (
    <section className="w-full py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          
          {/* LEFT: Our Commitments (The Promise) */}
          <div className="space-y-12">
            <div>
              <span className="text-xs font-bold tracking-[0.4em] text-[#8f692b] uppercase">Reliability</span>
              <h2 className="text-4xl md:text-5xl mt-3 font-bold text-slate-900 tracking-tight">
                Our <span className="text-[#c29a50]">Commitments</span>
              </h2>
            </div>

            <div className="space-y-10">
              {guarantees.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="group flex gap-6">
                  <div className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-[#c29a50] shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
                    <p className="mt-2 text-slate-500 text-sm leading-relaxed max-w-md">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT: FAQ (The Command Panel) */}
          <div className="relative p-8 md:p-12 bg-slate-950 rounded-[2.5rem] shadow-2xl overflow-hidden">
            {/* Background Accent */}
            <HelpCircle className="absolute -right-10 -top-10 h-64 w-64 text-white/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-1 w-12 bg-[#c29a50] rounded-full" />
                <h2 className="text-2xl font-bold text-white tracking-tight">Operational FAQ</h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {QA.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`q${i}`}
                    className="border-none bg-white/5 rounded-2xl overflow-hidden transition-all data-[state=open]:bg-white/10"
                  >
                    <AccordionTrigger
                      className="group flex items-center justify-between px-6 py-5 text-left hover:no-underline"
                    >
                      <span className="text-sm md:text-base font-semibold text-slate-200 group-data-[state=open]:text-[#c29a50] transition-colors pr-4">
                        {item.q}
                      </span>
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-all group-data-[state=open]:bg-[#c29a50] group-data-[state=open]:rotate-180">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#c29a50] flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">
                          {item.a}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}