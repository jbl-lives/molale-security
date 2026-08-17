"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useApplyDialog } from "./ApplyDialogProvider";

const trainingSectors = [
  { src: "/assets/images/training/access-control.webp", label: "Access Control" },
  { src: "/assets/images/training/control-room.webp", label: "Control Room" },
  { src: "/assets/images/training/patrol.webp", label: "Patrol Operations" },
  { src: "/assets/images/training/supervisor.webp", label: "Site Supervision" },
];

export default function TrainingHero() {
  const { openWithCourse } = useApplyDialog();

  return (
    <section className="bg-white pt-12 pb-20">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase">
              Professional Excellence
            </span>
            <h1 className="text-5xl md:text-7xl mt-2 font-light tracking-tight text-slate-900">
              Training <span className="font-bold">Academy</span>
            </h1>
          </div>
          <p className="max-w-md text-slate-500 text-sm leading-relaxed border-l border-slate-200 pl-6">
            Providing PSIRA-accredited specialized training modules designed for 
            modern corporate environments and high-stakes security operations.
          </p>
        </div>
      </div>

      {/* Cinematic Row Container */}
      <div className="w-full px-4 md:px-0">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row h-[600px] w-full gap-1 overflow-hidden rounded-2xl md:rounded-none">
            {trainingSectors.map((sector, index) => (
              <div 
                key={index} 
                className="relative flex-1 group overflow-hidden cursor-crosshair transition-all duration-700 ease-in-out md:hover:flex-[1.5] h-[150px] md:h-full"
              >
                <Image
                  src={sector.src}
                  alt={sector.label}
                  fill
                  className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-black/20 md:bg-black/40 md:group-hover:bg-black/20 transition-colors duration-500" />
                
                <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center">
                   <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase opacity-100 md:opacity-80 md:group-hover:opacity-100 transition-opacity">
                    {sector.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* High-End Action Bar */}
      <div className="mx-auto max-w-7xl px-6 -mt-10 relative z-20">
        <div className="bg-slate-900 text-white p-6 md:p-10 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex gap-8 md:gap-12">
            <div>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Accreditation</p>
              <p className="text-xs md:text-sm font-medium">PSIRA Grades E - A</p>
            </div>
            <div className="hidden sm:block border-l border-white/10" />
            <div>
              <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Methodology</p>
              <p className="text-xs md:text-sm font-medium">Scenario-Based</p>
            </div>
          </div>

          <button
            onClick={() => openWithCourse()}
            className="group flex items-center justify-center gap-4 bg-white text-slate-900 px-6 py-4 md:px-8 md:py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 w-full md:w-auto shadow-lg"
          >
            {/* Responsive Text */}
            <span className="md:hidden">ENROLL NOW</span>
            <span className="hidden md:inline">SECURE YOUR ENROLLMENT</span>
            
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}