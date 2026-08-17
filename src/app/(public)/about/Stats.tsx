"use client";

import { stats } from "@/data/company";
import { Activity, Users, Clock, Shield } from "lucide-react";

// Map icons to the stats for a more "Dashboard" feel
const ICON_MAP: Record<string, any> = {
  "Avg Dispatch Time": Clock,
  "Active Clients": Users,
  "Hours on Duty / month": Activity,
  "Response Coverage": Shield,
};

export default function Stats() {
  return (
    <section className="w-full bg-slate-900 py-20 md:py-28 relative overflow-hidden">
      {/* Background Glows for Depth */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#D4A017]/10 blur-[120px] -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.4em] text-[#D4A017] uppercase">
            Performance Metrics
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 font-bold text-white tracking-tight">
            Molale <span className="font-light italic text-slate-400">At a Glance</span>
          </h2>
          <div className="mt-6 h-px w-12 bg-white/20 mx-auto" />
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => {
            const Icon = ICON_MAP[s.label] || Activity;
            
            return (
              <div 
                key={s.label} 
                className="group relative p-8 rounded-4xl bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-[#D4A017]/30"
              >
                {/* Icon Wrapper */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#D4A017] group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </div>

                {/* The Big Number */}
                <div className="text-4xl font-black text-white tracking-tighter mb-2 group-hover:text-[#D4A017] transition-colors">
                  {s.value}
                </div>

                {/* The Label */}
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight">
                  {s.label}
                </div>

                {/* Animated Bottom Bar */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-linear-to-r from-transparent via-[#D4A017]/0 to-transparent group-hover:via-[#D4A017]/40 transition-all duration-700" />
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-center text-slate-500 text-xs font-medium italic">
          *Real-time operational data verified through our centralized Command & Control system.
        </p>
      </div>
    </section>
  );
}