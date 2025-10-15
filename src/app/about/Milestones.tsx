// src/components/about/Milestones.tsx
import Image from "next/image";
import { milestones } from "@/data/company";

export default function Milestones() {
  return (
    <section
      className="
        relative isolate w-full py-12 md:py-16
        bg-white
      "
    >
      {/* gradient wash: transparent on left → primary tint on right */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--color-primary),#fff_88%)]
          to-[color-mix(in_oklab,var(--color-primary),#fff_12%)]
        "
      />

      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
          {/* Left: timeline (top-aligned with image) */}
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-gray-900">Our Journey</h2>
            <ol className="relative border-l border-black/10 pl-6">
              {milestones.map((m) => (
                <li key={m.year} className="mb-6 ml-2">
                  <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-[var(--color-primary)]" />
                  <div className="font-semibold text-gray-900">
                    {m.year} — {m.title}
                  </div>
                  <div className="text-gray-700">{m.blurb}</div>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: image (no sticky → aligned with timeline start) */}
          <div>
            <div
              className="
                relative aspect-[4/3] mb-5 w-full overflow-hidden
                
              "
            >
              <Image
                src="/assets/images/molale-logo.png"  // your image in /public
                alt="Molale Security through the years"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-contain"           // use 'cover' if you want full-bleed crop
                priority={false}
              />
            </div>
            {/* optional caption */}
            {/* <p className="mt-3 text-sm text-gray-600">A look at our growth—control room, fleet, academy.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
