// src/components/about/Leadership.tsx
"use client";

import Image from "next/image";
import { leadership } from "@/data/company";

// --- tiny helpers for the fallback header ---
function getInitials(name: string) {
  const [a = "", b = ""] = name.trim().split(/\s+/);
  return ((a[0] ?? "") + (b[0] ?? "")).toUpperCase() || "U";
}
function hashHue(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % 360;
}
function bgForName(name: string) {
  const hue = hashHue(name);
  return `hsl(${hue} 70% 45%)`;
}
function toQuote(src: string, maxWords = 12) {
  const words = src.trim().split(/\s+/);
  return words.slice(0, maxWords).join(" ") + (words.length > maxWords ? "…" : "");
}

export default function Leadership() {
  return (
    <section className="w-full  py-12 md:py-16 border-y">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900 text-center md:text-left">Leadership</h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {leadership.map((m) => {
            const quote = toQuote(m.bio);
            return (
              <article
                key={m.name}
                className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-white text-gray-700 shadow-md"
              >
                {/* Media header (image area) */}
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
                  {m.avatar ? (
                    <Image
                      src={m.avatar}
                      alt={m.name}
                      fill
                      sizes="(min-width:1024px) 320px, (min-width:640px) 45vw, 90vw"
                      className="object-cover"
                      priority={false}
                    />
                  ) : (
                    <div
                      className="h-full w-full grid place-items-center text-white"
                      style={{
                        background: `linear-gradient(90deg, ${bgForName(m.name)}, color-mix(in oklab, ${bgForName(
                          m.name
                        )} 85%, #000))`,
                      }}
                      aria-hidden="true"
                    >
                      <span className="text-4xl font-bold tracking-wide">{getInitials(m.name)}</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-semibold leading-snug text-gray-900">{m.name}</h3>
                  <p className="text-sm font-medium text-gray-600">{m.role}</p>
                  
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
