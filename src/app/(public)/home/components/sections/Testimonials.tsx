"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string | null; // optional
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Professional team and fast response times. They handled our site with care and clear communication.",
    name: "Jenny Wilson",
    role: "Project Manager at Microsoft",
    avatar: "/assets/images/people/jenny.jpg",
  },
  {
    quote: "Reliable, discreet, and well-trained. We’ve used them for events and ongoing guarding.",
    name: "Robert Fox",
    role: "Founder at Brain.co",
    avatar: null, // → initials
  },
  {
    quote:
      "Upgraded our CCTV and tightened access control. The follow-up and reporting were excellent.",
    name: "Kristin Watson",
    role: "UX Designer at Google",
    // avatar omitted → initials
  },
  {
    quote:
      "Their control room is on point. Response times are consistent and officers are courteous.",
    name: "Thabo M.",
    role: "Facilities Lead at RetailCo",
    avatar: "/assets/images/people/thabo.jpg",
  },
  {
    quote:
      "Great partner for multi-site security. Clear SLAs and helpful incident summaries.",
    name: "Anika P.",
    role: "Operations at Warehousing SA",
    avatar: undefined, // → initials
  },
];

// utils: initials + deterministic color from name
function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  const letters = (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
  return (letters || "U").toUpperCase();
}
function hashHue(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % 360;
}
function bgForName(name: string) {
  return `hsl(${hashHue(name)} 70% 45%)`;
}

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Clients Say</h2>
          <p className="mt-2 text-gray-600">
            Trusted by homeowners and businesses across Klerksdorp &amp; beyond.
          </p>
        </header>

        <div className="mt-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            slidesPerView={1}
            spaceBetween={16}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            aria-label="Customer testimonials"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <figure className="mx-auto h-full rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
                  {/* avatar / initials */}
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                    {t.avatar ? (
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                        priority={false}
                      />
                    ) : (
                      <div
                        className="grid h-full w-full place-items-center text-white text-xl font-semibold"
                        style={{ background: bgForName(t.name) }}
                        aria-hidden="true"
                        title={t.name}
                      >
                        {getInitials(t.name)}
                      </div>
                    )}
                    {/* quote badge */}
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-[var(--color-primary)] text-white text-xs">
                      “
                    </span>
                  </div>

                  <blockquote className="mt-6 text-center text-gray-700 leading-relaxed">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-6 text-center">
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
