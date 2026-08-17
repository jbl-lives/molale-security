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
    <section className="relative w-full py-24 overflow-hidden bg-slate-900">
      {/* Background Image with sophisticated "Command Center" Overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-[url('/assets/images/monitoring.jpg')] bg-cover bg-center opacity-30 grayscale" 
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-slate-950 via-slate-900/90 to-slate-950" />
      
      {/* Subtle Scanline Effect for that "Security Monitor" feel */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-size-[100%_4px,4px_100%]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-4 w-4 text-blue-500 animate-pulse" />
              <span className="text-xs font-bold tracking-[0.4em] text-blue-500 uppercase">Operational Reach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Coverage <span className="text-[#D4A017]">Perimeter</span>
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
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
            <div className="absolute -inset-1 bg-linear-to-r from-[#D4A017]/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <CoverageMap />
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4A017] m-4 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4A017] m-4 pointer-events-none" />
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
                <Navigation className="h-5 w-5 text-[#D4A017]" />
              </div>

              <div className="space-y-1">
                {coverageAreas.map((area) => (
                  <div 
                    key={area.name} 
                    className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-slate-500 group-hover:text-[#D4A017] transition-colors" />
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {area.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-3 w-3 text-blue-500" />
                      <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                        {area.eta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expansion Alert */}
              <div className="mt-8 p-4 rounded-xl bg-[#D4A017]/5 border border-[#D4A017]/20">
                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  <span className="text-[#D4A017] font-bold">Expansion Advisory:</span> We regularly accommodate on-demand call-outs to surrounding sectors. Contact dispatch for custom fleet allocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}