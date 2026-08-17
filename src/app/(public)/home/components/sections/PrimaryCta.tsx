"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, PhoneCall, ArrowRight } from "lucide-react";

export default function PrimaryCta() {
  const phoneNumber = "27838874914";
  const message = "Hi Molale Security, I need urgent assistance.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section className="w-full bg-[#D4A017] relative overflow-hidden py-6">
      {/* Subtle "Security Mesh" Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
      
      {/* Radial "Glow" for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-0 relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-12">
          
          {/* Left: Persuasive Copy (5 columns) */}
          <div className="md:col-span-5 text-center md:text-left">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-900/60 uppercase">
              Immediate Assistance
            </span>
            <h3 className="mt-2 text-3xl md:text-5xl font-bold text-slate-950 leading-tight tracking-tighter">
              Ready to <br className="hidden md:block" /> 
              <span className="italic font-light">Secure Your Asset?</span>
            </h3>
            <p className="mt-4 text-slate-800 text-sm md:text-base font-medium max-w-sm mx-auto md:mx-0">
              Our tactical dispatch is standing by. Secure a professional 
              assessment and rapid deployment plan today.
            </p>
          </div>

          {/* Middle: Cinematic Phone Graphic (3 columns) */}
          <div className="md:col-span-3 flex justify-center relative">
            <div className="relative h-56 w-56 md:h-72 md:w-72 -mb-8 md:-mb-12 mt-4">
              <Image
                src="/assets/images/phone.png"
                alt="Molale Tactical Dispatch"
                fill
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)] animate-float"
              />
            </div>
          </div>

          {/* Right: Premium Actions (4 columns) */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col justify-center items-center md:items-end gap-4">
            <Link
              href="/contact"
              className="group w-full max-w-[240px] flex items-center justify-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-xl font-bold transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95"
            >
              <PhoneCall className="h-4 w-4 text-[#D4A017]" />
              <span className="text-sm tracking-wide">REQUEST A QUOTE</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-[240px] flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold border border-slate-200 transition-all hover:bg-slate-50 hover:shadow-lg active:scale-95"
            >
              <MessageSquare className="h-4 w-4 text-green-600" />
              <span className="text-sm tracking-wide">WHATSAPP US</span>
              <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}