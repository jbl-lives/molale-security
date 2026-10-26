"use client";

import { coverageAreas } from "@/data/coverage";
import dynamic from "next/dynamic";
import { MapPin, Navigation, Clock, Activity } from "lucide-react";

// Dynamically import CoverageMap with a loading state for better UX
const CoverageMap = dynamic(
  () => import("../map/CoverageMap"),
  { 
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-slate-800 animate-pulse rounded-2xl flex items-center justify-center text-slate-500">Initializing Tactical Map...</div>
  }
);

export default function Coverage() {
  return (
    <section className="relative w-full py-20 md:py-24 overflow-hidden bg-slate-900">
      {/* Background Image with sophisticated "Command Center" Overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-[url('/assets/images/monitoring.jpg')] bg-cover bg-center opacity-30 grayscale" 
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-950 via-slate-900/90 to-slate-950" />
      
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-4 w-4 text-[#e0c58e]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#e0c58e] uppercase">Operational Reach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Coverage <span className="text-[#c29a50]">Perimeter</span>
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
              Headquartered in <span className="text-white font-semibold">Klerksdorp</span>, our rapid-response fleet maintains a strategic presence across the North West, including the Vaal Reefs mining sector.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Systems Online</span>
             </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Tactical Map Container (Large) */}
          <div className="lg:col-span-3 relative group">
            <div className="relative h-[380px] sm:h-[430px] w-full rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <CoverageMap />
            </div>
          </div>

          {/* Response Telemetry (The List) */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Response Telemetry</h3>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Live Indicative ETA Windows</p>
                </div>
                <Navigation className="h-5 w-5 text-[#c29a50]" />
              </div>

              <div className="space-y-1">
                {coverageAreas.map((area) => (
                  <div 
                    key={area.name} 
                    className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-slate-500 group-hover:text-[#c29a50] transition-colors" />
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {area.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-3 w-3 text-[#a77c2e]" />
                      <span className="text-xs font-mono text-[#d0ad6d] bg-[#a77c2e]/10 px-2 py-1 rounded border border-[#a77c2e]/20">
                        {area.eta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expansion Alert */}
              <div className="mt-8 p-4 rounded-xl bg-[#c29a50]/5 border border-[#c29a50]/20">
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  <span className="text-[#c29a50] font-bold">Expansion Advisory:</span> We regularly accommodate on-demand call-outs to surrounding sectors. Contact dispatch for custom fleet allocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
