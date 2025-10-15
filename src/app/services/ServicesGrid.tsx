// src/components/services/ServicesGrid.tsx  (the SERVICES PAGE version)

"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesFancy } from "@/data/services";
import {
  ShieldCheck, Shield, Star, Camera, IdCard, Search, ArrowRight, MapPin, CheckCircle2,
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

// 🔁 Only used on this page: swap images without touching the data file
const IMAGE_OVERRIDE: Record<string, string> = {
  "armed-response": "/assets/services/armed-service.jpg",     // change extension if needed
  "physical-guarding": "/assets/services/guarding-service.jpg",
  "vip-protection": "/assets/services/vip-service.jpg",
  // leave others alone or add more overrides later
};

const BLURBS: Record<string, string> = {
  "armed-response": "24/7 control room, rapid deployment, GPS-tracked vehicles and clear escalation.",
  "physical-guarding": "Uniformed, vetted officers for sites, retail, estates, events and assets.",
  "vip-protection": "Discreet close protection, itinerary planning and venue sweeps.",
  "cctv-alarms": "Installations, upgrades, maintenance and monitoring integrations.",
  screening: "ID verification, contractor vetting and access management.",
  "private-investigations": "Evidence gathering, surveillance and professional reporting.",
};

const FEATURES: Record<string, string[]> = {
  "armed-response": [
    "Alarm activations & perimeter checks",
    "Patrol routes & incident logs",
    "SAPS liaison if required",
  ],
  "physical-guarding": [
    "Access control & visitor registry",
    "Post orders & shift handovers",
    "De-escalation & site etiquette",
  ],
  "vip-protection": ["Advance route planning", "Secure transport options", "Close protection officers"],
  "cctv-alarms": ["Camera placement & tuning", "Panels, sensors, maintenance", "Remote viewing setup"],
  screening: ["Credential & ID checks", "Induction & badges", "Turnstiles & access logs"],
  "private-investigations": ["Surveillance & interviews", "Evidence handling", "Report packs for counsel"],
};

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 md:py-16 ">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <header className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-2 text-gray-600">
            Tailored plans for homes, businesses, events and industrial or mining environments.
          </p>
        </header>

        <div className="mt-8 space-y-6 md:space-y-8">
          {servicesFancy.map((s, idx) => {
            const Icon = ICONS[s.slug] ?? ShieldCheck;
            const blurb = s.blurb ?? BLURBS[s.slug] ?? "";
            const bullets = FEATURES[s.slug] ?? [];

            // ✅ choose page-specific image if present
            const imgSrc = IMAGE_OVERRIDE[s.slug] ?? s.img;

            const imgOrder = idx % 2 === 1 ? "md:order-2" : "";
            const textOrder = idx % 2 === 1 ? "md:order-1" : "";

            return (
              <article
                key={s.slug}
                className="group rounded-xl overflow-hidden bg-white/95 shadow-lg ring-1 ring-black/5 hover:shadow-md transition"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`relative ${imgOrder}`}>
                    <div className="relative h-56 md:h-full min-h-[260px] overflow-hidden rounded-t-3xl md:rounded-t-none md:rounded-s-3xl">
                      <Image
                        src={imgSrc}
                        alt={s.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition will-change-transform group-hover:scale-[1.02]"
                        priority={idx < 2}
                      />
                      <div className="pointer-events-none absolute bottom-3 left-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/90 text-gray-900 text-xs px-3 py-1 shadow-sm">24/7 Service</span>
                        <span className="rounded-full bg-white/80 text-gray-800 text-xs px-3 py-1 shadow-sm">Professional</span>
                      </div>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-center p-6 md:p-8 ${textOrder}`}>
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{s.title}</h3>
                        {blurb && <p className="mt-1 text-gray-600">{blurb}</p>}
                      </div>
                    </div>

                    {!!bullets.length && (
                      <ul className="mt-4 space-y-2">
                        {bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 text-[var(--color-primary)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs text-gray-700">
                        <MapPin className="h-3.5 w-3.5" /> Klerksdorp & Surrounds
                      </span>

                      <Link
                        href={`/services/${s.slug}`}
                        className="ml-auto inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black transition"
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
