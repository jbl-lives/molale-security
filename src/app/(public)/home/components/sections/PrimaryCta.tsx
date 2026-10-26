"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, PhoneCall, ArrowRight } from "lucide-react";

export default function PrimaryCta() {
  const phoneNumber = "27813660159"; // Updated to the correct number
  const message = "Hi Molale Security, I need urgent assistance.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section className="w-full bg-[#f0ede6] relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-y-0 left-0 w-1.5 bg-[#b88a35]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
          
          {/* Left: Persuasive Copy (5 columns) */}
          <div className="md:col-span-5 text-center md:text-left">
            <span className="text-xs font-semibold tracking-[0.18em] text-[#80602b] uppercase">
              Immediate Assistance
            </span>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-950 leading-tight tracking-tight">
              Ready to secure your asset?
            </h3>
            <p className="mt-4 text-slate-600 text-base max-w-md mx-auto md:mx-0 leading-relaxed">
              Our tactical dispatch is standing by. Secure a professional 
              assessment and rapid deployment plan today.
            </p>
          </div>

          {/* Middle: Cinematic Phone Graphic (3 columns) */}
          <div className="md:col-span-3 flex justify-center relative">
            <div className="relative h-40 w-40 md:h-52 md:w-52">
              <Image
                src="/assets/images/phone.png"
                alt="Molale Tactical Dispatch"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right: Premium Actions (4 columns) */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col justify-center items-center md:items-end gap-3">
            <Link
              href="/contact"
              className="group w-full max-w-[240px] min-h-12 flex items-center justify-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-slate-800"
            >
              <PhoneCall className="h-4 w-4 text-[#c29a50]" />
              <span className="text-sm tracking-wide">REQUEST A QUOTE</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-[240px] min-h-12 flex items-center justify-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold border border-slate-300 transition-colors hover:bg-slate-50"
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
