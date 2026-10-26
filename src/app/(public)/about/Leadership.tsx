"use client";

import Image from "next/image";
import { leadership } from "@/data/company";
import { Linkedin, Mail } from "lucide-react";

// --- refined helpers ---
function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")).toUpperCase();
}

export default function Leadership() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.4em] text-[#8f692b] uppercase">
              The Frontline
            </span>
            <h2 className="text-4xl md:text-5xl mt-3 font-bold text-slate-900 tracking-tight">
              Executive <span className="text-[#c29a50]">Leadership</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-500 text-sm leading-relaxed">
            Our directors bring decades of combined tactical and administrative 
            expertise to the North West security landscape.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {leadership.map((m) => (
            <article key={m.name} className="group">
              {/* Image Container: Clean, Framed look */}
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-100 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {m.avatar ? (
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center bg-slate-900 text-white">
                    <span className="text-5xl font-light tracking-tighter text-slate-700">
                      {getInitials(m.name)}
                    </span>
                  </div>
                )}
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Links on Hover */}
                <div className="absolute bottom-6 left-6 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#c29a50] transition-colors cursor-pointer">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#c29a50] transition-colors cursor-pointer">
                    <Mail className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{m.name}</h3>
                <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
                  <div className="h-px w-4 bg-[#c29a50]" />
                  <p className="text-xs font-bold text-[#8f692b] uppercase tracking-widest">{m.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}