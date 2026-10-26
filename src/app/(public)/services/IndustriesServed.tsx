"use client";

import Image from "next/image";
import {
  Building2,
  Home,
  GraduationCap,
  Factory,
  Store,
  Hammer,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Industry = {
  icon: LucideIcon;
  name: string;
  desc: string;
  img: string;
};

const industries: Industry[] = [
  { icon: Home, name: "Residential", desc: "Estates, complexes, and standalone property protection.", img: "/assets/images/industries/residential.jpg" },
  { icon: Store, name: "Retail", desc: "Malls, shopping centers, and high-volume warehousing.", img: "/assets/images/industries/retail.jpg" },
  { icon: Building2, name: "Commercial", desc: "Corporate office parks, clinics, and mixed-use sites.", img: "/assets/images/industries/commercial.jpg" },
  { icon: Factory, name: "Industrial", desc: "Manufacturing plants, yards, and logistics hubs.", img: "/assets/images/industries/industrial.jpg" },
  { icon: Hammer, name: "Construction", desc: "Active project sites and critical asset protection.", img: "/assets/images/industries/construction.jpg" },
  { icon: GraduationCap, name: "Education", desc: "Schools, colleges, and private training venues.", img: "/assets/images/industries/education.jpg" },
];

export default function IndustriesServed() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.4em] text-[#8f692b] uppercase">
              Sector Expertise
            </span>
            <h2 className="text-4xl md:text-5xl mt-3 font-bold text-slate-900 tracking-tight">
              Industries <span className="text-[#c29a50]">We Protect</span>
            </h2>
          </div>
          <p className="max-w-xs text-slate-500 text-sm leading-relaxed">
            Bespoke security architecture tailored for high-risk environments and critical infrastructure.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, name, desc, img }) => (
            <article
              key={name}
              className="group relative h-[400px] w-full overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Layer: Grayscale to Color */}
              <Image
                src={img}
                alt={name}
                fill
                className="object-cover opacity-50 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
              />
              
              {/* Tactical Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  
                  {/* Icon & Title Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#c29a50] text-slate-950 flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {desc}
                  </p>

                  {/* Decorative Bottom Bar */}
                  <div className="mt-6 h-0.5 w-0 bg-[#c29a50] transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}