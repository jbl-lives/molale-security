// src/components/about/MissionVision.tsx
import { missionIntro, missionPillars, vision } from "@/data/company";

export default function MissionVision() {
  return (
    <section className="w-full border-t bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 grid gap-6 md:grid-cols-2">
        {/* Vision */}
        <article
          className="
            rounded-2xl p-6 md:p-8
            shadow-[0_8px_24px_rgba(0,0,0,.06)] ring-1 ring-black/5
            bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(16,185,129,0.10)_100%)]
          "
        >
          <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-gray-900">
            VISION
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">{vision}</p>
        </article>

        {/* Mission */}
        <article
          className="
            rounded-2xl p-6 md:p-8
            shadow-[0_8px_24px_rgba(0,0,0,.06)] ring-1 ring-black/5
            bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(16,185,129,0.10)_100%)]
          "
        >
          <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-gray-900">
            MISSION
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">{missionIntro}</p>

          <div className="mt-5 space-y-4">
            {missionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4"
              >
                <h3 className="font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-1 text-gray-700 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
