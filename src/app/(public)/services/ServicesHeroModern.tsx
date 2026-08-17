"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-white pt-12 pb-20 overflow-hidden">
      {/* Subtle Background Branding */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-[-15deg] translate-x-24" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.4em] text-blue-600 uppercase">
              Operational Excellence
            </span>
            <h1 className="text-5xl md:text-7xl mt-4 font-bold tracking-tight text-slate-900 leading-[0.9]">
              Professional <br /> 
              <span className="text-[#D4A017]">Security Services</span>
            </h1>
          </div>
          <p className="max-w-md text-slate-500 text-sm leading-relaxed border-l-2 border-[#D4A017] pl-6 py-2">
            Deploying a multi-layered defense strategy through advanced 
            technology, vetted manpower, and intelligence-led rapid 
            response protocols across the North West.
          </p>
        </div>

        {/* The Visual Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Tactical Stats (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
               <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Zap className="h-5 w-5 text-[#D4A017]" />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
               </div>
               <h2 className="text-5xl font-bold mb-1 tracking-tighter">≤ 15m</h2>
               <p className="text-[#D4A017] text-[10px] font-black uppercase tracking-[0.2em]">Average Dispatch</p>
               <p className="mt-4 text-slate-400 text-xs leading-relaxed">Real-time GPS tracking ensures our closest unit is always en route to your location.</p>
            </div>

            <div className="flex-1 bg-[#D4A017] rounded-[2.5rem] p-8 text-slate-950 shadow-xl relative overflow-hidden group">
               <Activity className="absolute -right-4 -bottom-4 h-24 w-24 text-black/5" />
               <div className="h-10 w-10 bg-black/10 rounded-xl flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5 text-slate-950" />
               </div>
               <h2 className="text-5xl font-bold mb-1 tracking-tighter">PSIRA</h2>
               <p className="text-slate-950/60 text-[10px] font-black uppercase tracking-[0.2em]">Full Compliance</p>
               <p className="mt-4 text-slate-950/80 text-xs font-medium leading-relaxed">All officers and company operations meet the highest national regulatory standards.</p>
            </div>
          </div>

          {/* Right: The Cinematic Monitoring Image (8 columns) */}
          <div className="lg:col-span-8 relative">
            <div className="relative h-full min-h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/monitoring.jpg"
                alt="24/7 Monitoring Command Center"
                fill
                priority
                className="object-cover"
              />
              
              {/* Floating "Live" Banner */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
                   <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                   <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Command</span>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-5">
                 <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6 divide-x divide-white/20">
                        <div className="pr-6">
                          <p className="text-white text-sm font-bold tracking-tight">24/7 Response</p>
                          <p className="text-white/60 text-[10px] uppercase tracking-widest">Constant Vigilance</p>
                        </div>
                        <div className="pl-6">
                          <p className="text-white text-sm font-bold tracking-tight">Advanced Tech</p>
                          <p className="text-white/60 text-[10px] uppercase tracking-widest">AI-Driven Insights</p>
                        </div>
                    </div>
                    
                    <Link 
                      href="/contact" 
                      className="group h-12 w-12 bg-white rounded-full flex items-center justify-center text-slate-950 hover:bg-[#D4A017] hover:text-white transition-all shadow-lg"
                    >
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Division Ticker */}
        <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start opacity-40">
            {["Guarding", "Armed Response", "CCTV", "Screening", "Investigations"].map((service) => (
              <span key={service} className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.3em]">
                {service}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}