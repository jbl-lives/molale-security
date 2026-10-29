"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Shield } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 -skew-x-12 translate-x-32" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-7 md:gap-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.18em] text-[#8f692b] uppercase">
              Our Legacy
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mt-4 font-semibold tracking-tight text-slate-900 leading-[1.02]">
              About <br /> 
              <span className="text-[#c29a50]">Molale Security</span>
            </h1>
          </div>
          <p className="max-w-md text-slate-600 text-base leading-relaxed border-l-2 border-[#b88a35] pl-6 py-2">
            Founded on the principles of integrity and tactical precision, we have 
            grown into the North West's premier security force, protecting 
            industrial assets and private interests since 2016.
          </p>
        </div>

        {/* The Main Visual Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-7 items-stretch">
          
          {/* Left: Detailed Stat Cards (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 bg-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
               <Award className="absolute -right-4 -bottom-4 h-24 w-24 text-white/5 group-hover:scale-110 transition-transform" />
               <p className="text-[#c29a50] text-[10px] font-black uppercase tracking-[0.2em] mb-2">Established</p>
               <h2 className="text-5xl font-bold mb-1">2016</h2>
               <p className="text-slate-400 text-xs">A decade of operational experience in high-risk environments.</p>
            </div>

            <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group">
               <Users className="absolute -right-4 -bottom-4 h-24 w-24 text-slate-50 group-hover:scale-110 transition-transform" />
               <p className="text-[#8f692b] text-[10px] font-black uppercase tracking-[0.2em] mb-2">Manpower</p>
               <h2 className="text-5xl font-bold text-slate-900 mb-1">350+</h2>
               <p className="text-slate-500 text-xs">Vetted, PSIRA-registered, and tactically trained officers on active duty.</p>
            </div>
          </div>

          {/* Right: The Cinematic Hero Image (8 columns) */}
          <div className="lg:col-span-8 relative">
            <div className="relative h-full min-h-[360px] md:min-h-[420px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/about-heros.jpg"
                alt="Molale Security Operations"
                fill
                priority
                className="object-cover"
              />
              
              {/* Bottom "Compliance" Label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4">
                 <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                       <Shield className="h-5 w-5 text-[#c29a50]" />
                    </div>
                    <div>
                       <p className="text-white text-sm font-bold tracking-tight">24/7 Command Center</p>
                       <p className="text-white/60 text-[10px] uppercase tracking-widest">Real-time GPS Monitoring</p>
                    </div>
                 </div>
                 
                 <Link 
                  href="/contact" 
                  className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-slate-950 hover:bg-[#c29a50] hover:text-white transition-all shadow-lg"
                 >
                    <ArrowRight className="h-4 w-4" />
                 </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text for Hero */}
        <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start border-t border-slate-100 pt-8">
            <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8f692b]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SAIDSA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8f692b]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PSIRA Accredited</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8f692b]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ISO Standards</span>
            </div>
        </div>
      </div>
    </section>
  );
}
