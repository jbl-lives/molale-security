"use client"; // <--- Add this line

import { coverageAreas } from "@/data/coverage";
import dynamic from "next/dynamic";

// Dynamically import CoverageMap and explicitly disable SSR
const CoverageMap = dynamic(
  () => import("../map/CoverageMap"),
  { ssr: false } // This is now allowed because this file is a Client Component
);

export default function Coverage() {
  return (
    <section
      className="
        relative isolate w-full py-12 md:py-16
        bg-[url('/assets/images/monitoring.jpg')] bg-cover bg-center bg-no-repeat
      "
    >
      {/* overlay: darken + slight blur for a cool, readable surface */}
      <div className="absolute inset-0 -z-10 bg-black/35 backdrop-blur-[2px]" />

      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm">Coverage Areas</h2>
        <p className="mt-2 max-w-3xl text-white/90 drop-shadow">
          Headquartered in Klerksdorp, we provide rapid response across the wider area—including Orkney,
          Kanana, Stilfontein, Khuma, Jouberton, Hartbeesfontein, Tigane and the{" "}
          <span className="whitespace-nowrap">Vaal Reefs</span> mining sector. Primary coverage is shown below; we
          also accommodate <strong>on-demand</strong> call-outs to surrounding towns as we expand our fleet.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* This <CoverageMap /> component will now only be loaded in the browser */}
          <CoverageMap />

          {/* List card */}
          <div className="rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-[0_4px_16px_rgb(0_0_0_/_0.10)]">
            <h3 className="text-lg font-semibold text-gray-900">Estimated Response Times</h3>
            <p className="mt-1 text-xs text-gray-600">
              Indicative windows based on typical traffic & availability.
            </p>

            <div className="mt-4 divide-y divide-gray-200/50">
              {coverageAreas.map((a) => (
                <div key={a.name} className="flex items-center justify-between py-3">
                  <span className="font-medium text-gray-800">{a.name}</span>
                  <span className="text-gray-600">{a.eta}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-md bg-gray-50 p-3 text-xs text-gray-600">
              Need coverage outside these areas? We regularly service nearby towns on request—contact us for availability.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}