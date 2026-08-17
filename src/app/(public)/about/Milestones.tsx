"use client";

import Image from "next/image";
import { milestones } from "@/data/company";
import { History, Calendar, CheckCircle2 } from "lucide-react";

export default function Milestones() {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute top-10 left-10 text-[15rem] font-black text-slate-50 select-none leading-none -z-10">
        GROWTH
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Sticky Header Section (5 columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-[#D4A017] rounded-xl flex items-center justify-center shadow-lg">
                <History className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase">Our Evolution</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              The Journey of <br />
              <span className="text-[#D4A017]">Tactical Growth.</span>
            </h2>
            
            <p className="mt-6 text-slate-500 leading-relaxed max-w-sm">
              Since 2006, Molale Security has evolved from a local guarding service into a 
              multi-disciplinary security powerhouse. Each year marks a new standard in 
              protection excellence.
            </p>

            {/* Cinematic Support Image */}
            <div className="mt-10 relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
               <Image
                src="/assets/images/about-pics/molale-fleet.jpg" // Use a photo of your cars or control room here
                alt="Molale Fleet"
                fill
                className="object-cover"
               />
               <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
               <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#D4A017]" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Est. 2006</span>
               </div>
            </div>
          </div>

          {/* Right: Premium Timeline (7 columns) */}
          <div className="lg:col-span-7">
            <div className="relative border-l-2 border-slate-100 ml-4 md:ml-6 space-y-12 pb-12">
              {milestones.map((m, index) => (
                <div key={m.year} className="relative pl-10 group">
                  {/* The Timeline Dot */}
                  <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full border-4 border-white bg-slate-200 group-hover:bg-[#D4A017] group-hover:scale-125 transition-all duration-300 shadow-sm" />
                  
                  {/* Year Label */}
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-[#D4A017] text-[10px] font-bold tracking-widest mb-4">
                    {m.year}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {m.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base max-w-xl">
                    {m.blurb}
                  </p>

                  {/* Subtle Divider for mobile readability */}
                  <div className="mt-8 h-px w-12 bg-slate-100 group-hover:w-24 transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* End of Journey Note */}
            <div className="ml-4 md:ml-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-4">
               <CheckCircle2 className="h-6 w-6 text-[#D4A017] shrink-0" />
               <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">And the journey continues...</h4>
                  <p className="text-xs text-slate-500 mt-1">We are constantly expanding our fleet and technology to serve the North West more effectively.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}