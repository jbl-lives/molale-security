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
    <section className="bg-[#fbfaf7] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header: Corporate Left-Aligned */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-[#8f692b] uppercase">
              Operational Divisions
            </span>
            <h2 className="text-3xl md:text-4xl mt-3 font-semibold text-slate-900 tracking-tight">
              Our <span className="text-[#c29a50]">Core Services</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-600 text-base leading-relaxed md:text-right">
            Tailored security architecture designed to mitigate risk across diverse environments.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {servicesFancy.map((s, idx) => {
            const Icon = ICONS[s.slug] ?? ShieldCheck;
            const blurb = s.blurb ?? BLURBS[s.slug] ?? "";

            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative h-[390px] md:h-[410px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b88a35]"
              >
                {/* Background Image: Grayscale to Color */}
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                  priority={idx < 3}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/35 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-end">
                  <div>
                    
                    {/* Icon & Title Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 bg-[#c29a50] rounded-lg flex items-center justify-center text-slate-950">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight">{s.title}</h3>
                    </div>

                    {/* Blurb: Hidden until hover on desktop, visible on mobile */}
                    <p className="text-sm text-slate-200 leading-relaxed mb-5 line-clamp-3">
                      {blurb}
                    </p>

                    {/* Action Line */}
                    <div className="flex items-center gap-2 text-[#e0c58e] font-semibold text-xs tracking-wide">
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
