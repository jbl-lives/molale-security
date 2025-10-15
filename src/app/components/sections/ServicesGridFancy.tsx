"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesFancy } from "@/data/services";
import {
  ShieldCheck, Shield, Star, Camera, IdCard, Search, ArrowRight,
} from "lucide-react";

// Optional: small blurb + icon lookup by slug (keeps your data file unchanged)
const BLURBS: Record<string, string> = {
  "armed-response": "24/7 control room, rapid dispatch and GPS-tracked vehicles.",
  "physical-guarding": "Vetted guards for homes, business, events & sites.",
  "vip-protection": "Discreet executive protection with advance planning.",
  "cctv-alarms": "Installations, upgrades and monitoring integration.",
  screening: "Background checks and access control for safer operations.",
  "private-investigations": "Evidence gathering, interviews and surveillance.",
};

const ICONS: Record<string, React.ComponentType<any>> = {
  "armed-response": ShieldCheck,
  "physical-guarding": Shield,
  "vip-protection": Star,
  "cctv-alarms": Camera,
  screening: IdCard,
  "private-investigations": Search,
};

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <header className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What we offer</h2>
          <p className="mt-2 text-gray-600">Flexible packages for homes, businesses and industrial sites.</p>
        </header>

        <div className="mt-8 grid gap-6 sm:gap-8 sm:grid-cols-2">
          {servicesFancy.map((s, idx) => {
            const Icon = ICONS[s.slug] ?? ShieldCheck;
            const blurb = s.blurb ?? BLURBS[s.slug] ?? "";

            return (
              <article
                key={s.slug}
                className="
                  group relative overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,.06)]
                  ring-1 ring-black/5 transition hover:shadow-[0_16px_40px_rgba(0,0,0,.10)]
                "
              >
                {/* image */}
                <div className="relative h-56 md:h-64">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 will-change-transform group-hover:scale-[1.02]"
                    priority={idx < 2}
                  />
                  {/* subtle dark overlay for legibility */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* glassy banner inside the image */}
                <div className="pointer-events-none absolute bottom-3 left-3 right-3">
                  <div
                    className="
                      relative rounded-xl px-4 py-3 md:px-5 md:py-3
                      text-white backdrop-blur-md
                      bg-white/10 ring-1 ring-white/25
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      {/* title + (optional) blurb */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="inline-grid h-8 w-8 place-items-center rounded-lg bg-white/20 ring-1 ring-white/30">
                            <Icon className="h-4 w-4 text[var(--color-primary)]" />
                          </span>
                          <h3 className="truncate text-base md:text-lg font-semibold">{s.title}</h3>
                        </div>
                        {blurb && (
                          <p className="mt-1 line-clamp-1 text-xs md:text-sm text-white/85">
                            {blurb}
                          </p>
                        )}
                      </div>

                      {/* “Learn more” chip INSIDE the banner */}
                      <Link
                        href={`/services/${s.slug}`}
                        className="
                          pointer-events-auto inline-flex items-center gap-1.5 rounded-full
                          bg-yellow-100/90 px-3 py-1.5 text-xs md:text-sm font-medium text-gray-900
                          shadow hover:bg-white transition
                        "
                        aria-label={`Learn more about ${s.title}`}
                      >
                        Learn more <ArrowRight className="h-3.5 w-3.5" />
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
