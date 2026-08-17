"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesFancy } from "@/data/services";
import {
  ShieldCheck,
  Shield,
  Star,
  Camera,
  IdCard,
  Search,
  ArrowRight,
  MapPin,
  CheckCircle2,
  type LucideIcon
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "armed-response": ShieldCheck,
  "physical-guarding": Shield,
  "vip-protection": Star,
  "cctv-alarms": Camera,
  screening: IdCard,
  "private-investigations": Search,
};

const IMAGE_OVERRIDE: Record<string, string> = {
  "armed-response": "/assets/services/armed-service.jpg",
  "physical-guarding": "/assets/services/guarding-service.jpg",
  "vip-protection": "/assets/services/vip-service.jpg",
};

const FEATURES: Record<string, string[]> = {
  "armed-response": ["24/7 Alarm Activations", "GPS-Tracked Patrol Routes", "Direct SAPS Liaison"],
  "physical-guarding": ["Tactical Site Placement", "Strict De-escalation Protocol", "Vetted Access Control"],
  "vip-protection": ["Advance Itinerary Planning", "Secure Transit Logistics", "Close Protection Teams"],
  "cctv-alarms": ["High-Definition Monitoring", "System Health Audits", "Remote Viewing Integration"],
  screening: ["ID & Credential Vetting", "Bio-Metric Integration", "Contractor Induction Logs"],
  "private-investigations": ["Forensic Evidence Gathering", "Surveillance Intelligence", "Legal Counsel Reporting"],
};

export default function ServicesGrid() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-[0.4em] text-blue-600 uppercase">Division Catalog</span>
          <h2 className="text-4xl md:text-5xl mt-3 font-bold text-slate-900 tracking-tight">
            Specialized <span className="text-[#D4A017]">Protection Units</span>
          </h2>
          <div className="mt-6 h-0.5 w-16 bg-[#D4A017]" />
        </div>

        {/* Services List */}
        <div className="space-y-16 md:space-y-32">
          {servicesFancy.map((s, idx) => {
            const Icon = ICONS[s.slug] ?? ShieldCheck;
            const bullets = FEATURES[s.slug] ?? [];
            const imgSrc = IMAGE_OVERRIDE[s.slug] ?? s.img;
            
            // Alternating logic
            const isEven = idx % 2 === 1;

            return (
              <article key={s.slug} className="group relative">
                <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
                  
                  {/* Image Side (7 columns) */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-16/10 md:aspect-16/8 overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-100">
                      <Image
                        src={imgSrc}
                        alt={s.title}
                        fill
                        className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-700" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6">
                         <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/20">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Active Division</span>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side (5 columns) */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-12 w-12 shrink-0 bg-slate-900 text-[#D4A017] rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{s.title}</h3>
                      </div>

                      <p className="text-slate-500 leading-relaxed mb-8">
                        {s.blurb || "Professional security architecture tailored for high-risk environments and critical asset protection."}
                      </p>

                      {/* Capabilities List */}
                      <div className="space-y-4 mb-10">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Core Capabilities</p>
                        <ul className="grid grid-cols-1 gap-3">
                          {bullets.map((b) => (
                            <li key={b} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                              <CheckCircle2 className="h-4 w-4 text-[#D4A017] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-slate-400">
                          <MapPin className="h-3 w-3" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">North West Regional</span>
                        </div>
                        
                        <Link
                          href={`/services/${s.slug}`}
                          className="group/btn flex items-center gap-3 bg-slate-950 text-white px-6 py-3 rounded-xl font-bold text-xs transition-all hover:bg-blue-600 hover:shadow-xl active:scale-95"
                        >
                          EXPLORE UNIT
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div> {/* End Action Bar */}
                    </div> {/* End flex column */}
                  </div> {/* End Content Side */}

                </div> {/* End Grid */}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}