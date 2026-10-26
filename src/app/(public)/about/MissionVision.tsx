"use client";

import { missionIntro, missionPillars, vision } from "@/data/company";
import { Target, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Top Section: Vision (The North Star) */}
        <div className="relative mb-20">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#c29a50]/5 rounded-full blur-3xl -z-10" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                  <Compass className="h-5 w-5 text-[#c29a50]" />
                </div>
                <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">Strategic Direction</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Our <span className="text-[#c29a50]">Vision</span>
              </h2>
            </div>
            
            <div className="lg:col-span-7">
              <div className="relative p-8 md:p-10 bg-slate-900 rounded-4xl shadow-2xl overflow-hidden group">
                {/* Decorative Icon Background */}
                <Target className="absolute -right-10 -bottom-10 h-64 w-64 text-white/5 group-hover:rotate-12 transition-transform duration-1000" />
                
                <p className="relative z-10 text-xl md:text-2xl text-white leading-relaxed font-light italic">
                  "{vision}"
                </p>
                <div className="mt-6 h-1 w-20 bg-[#c29a50] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Mission (The Foundation) */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Mission Intro (Left) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
             <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-[#8f692b]" />
                </div>
                <span className="text-xs font-bold tracking-[0.3em] text-[#8f692b] uppercase">Our Commitment</span>
              </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              {missionIntro}
            </p>
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <p className="text-xs text-slate-500 font-medium">
                 "We don't just secure sites; we engineer safety environments that allow businesses to thrive."
               </p>
            </div>
          </div>

          {/* Mission Pillars (Right) */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {missionPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-[#c29a50]/10 transition-colors">
                    <CheckCircle2 className="h-6 w-6 text-slate-400 group-hover:text-[#c29a50] transition-colors" />
                  </div>
                  <span className="text-4xl font-black text-slate-50 tracking-tighter">0{i + 1}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}