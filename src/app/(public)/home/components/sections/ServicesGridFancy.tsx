"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesFancy } from "@/data/services";
import {
  ShieldCheck, Shield, Star, Camera, IdCard, Search, ArrowRight,
} from "lucide-react";

const BLURBS: Record<string, string> = {
  "armed-response": "Elite rapid-response teams with GPS-tracked vehicle dispatch.",
  "physical-guarding": "Professional on-site presence for residential and industrial assets.",
  "vip-protection": "Specialized executive protection for high-profile individuals.",
  "cctv-alarms": "State-of-the-art surveillance and integrated monitoring systems.",
  screening: "Comprehensive background vetting and tactical access control.",
  "private-investigations": "Discrete evidence gathering and corporate intelligence.",
};

const ICONS: Record<string, any> = {
  "armed-response": ShieldCheck,
  "physical-guarding": Shield,
  "vip-protection": Star,
  "cctv-alarms": Camera,
  screening: IdCard,
  "private-investigations": Search,
};

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header: Corporate Left-Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase">
              Operational Divisions
            </span>
            <h2 className="text-4xl md:text-5xl mt-3 font-bold text-slate-900 tracking-tight">
              Our <span className="text-[#D4A017]">Core Services</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-500 text-sm leading-relaxed md:text-right">
            Tailored security architecture designed to mitigate risk across diverse environments.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesFancy.map((s, idx) => {
            const Icon = ICONS[s.slug] ?? ShieldCheck;
            const blurb = s.blurb ?? BLURBS[s.slug] ?? "";

            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image: Grayscale to Color */}
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                  priority={idx < 3}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent transition-opacity group-hover:opacity-40" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
                    
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 bg-[#D4A017] rounded-xl flex items-center justify-center text-slate-950 shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{s.title}</h3>
                    </div>

                    {/* Blurb: Hidden until hover on desktop, visible on mobile */}
                    <p className="text-sm text-slate-200 leading-relaxed mb-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 line-clamp-2 md:line-clamp-none">
                      {blurb}
                    </p>

                    {/* Action Line */}
                    <div className="flex items-center gap-2 text-[#D4A017] font-bold text-xs tracking-widest uppercase">
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}