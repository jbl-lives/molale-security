// src/components/about/MissionVision.tsx
import { missionIntro, missionPillars, vision } from "@/data/company";

export default function MissionVision() {
  return (
    <section className="w-full py-12 md:py-16 shadow-xl">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 grid gap-6 md:grid-cols-2">
        <div className="px-6 py-10 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-700">Our Vision</h2>
          <p className="mt-3 text-gray-500 leading-relaxed">{vision}</p>
        </div>
        <div className="px-6 py-10 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-3 text-gray-500 leading-relaxed">{missionIntro}</p>
          <div className="mt-4 space-y-2">
            {missionPillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="font-semibold text-gray-700">{pillar.title}</h3>
                <p className="mt-1 text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
