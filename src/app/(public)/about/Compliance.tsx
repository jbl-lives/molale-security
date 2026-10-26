"use client";

import { certifications } from "@/data/company";
import Image from "next/image";
import { ShieldCheck, Award, FileCheck } from "lucide-react";

const accreditationLogos = [
  { src: "/assets/images/creditations/psira.jpg", alt: "PSIRA Registered" },
  { src: "/assets/images/creditations/qcto.png", alt: "QCTO Registered" },
  { src: "/assets/images/creditations/sasseta.png", alt: "SASSETA Registered" },
  { src: "/assets/images/creditations/seta-logo.png", alt: "SETA Registered" },
];

export default function Compliance() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Top: Compliance Cards */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-[#c29a50]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Compliance & <span className="text-[#c29a50]">Training</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
  {certifications.map((c) => (
    <div
      key={c.label}
      className="group p-8 bg-amber-50/80 rounded-3xl border border-[#c29a50]/30 shadow-sm transition-all duration-300 hover:bg-[#c29a50] hover:border-[#c29a50] hover:shadow-xl hover:shadow-[#c29a50]/20 hover:-translate-y-1"
    >
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#a77c2e] mb-3 group-hover:text-slate-950 transition-colors">
        {c.label}
      </div>
      <div className="text-slate-800 group-hover:text-slate-950 text-sm leading-relaxed font-medium transition-colors">
        {c.desc}
      </div>
    </div>
  ))}
</div>
        </div>

        {/* Bottom: Accreditations (The Logo Wall) */}
        <div className="relative pt-16 border-t border-slate-200">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-full mb-4">
              <Award className="h-4 w-4 text-[#c29a50]" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Official Accreditations</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Our operations are fully vetted and compliant with South African national safety and education standards.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditationLogos.map((logo) => (
              <div 
                key={logo.alt}
                className="bg-white rounded-2xl border border-slate-200 p-8 h-40 flex items-center justify-center transition-all duration-500 hover:border-[#c29a50]/50 hover:shadow-lg group"
              >
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            <FileCheck className="h-4 w-4 text-slate-400" />
            <p className="text-xs text-slate-400 font-medium tracking-wide">
              Official registration documents and unit standards available on request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}