"use client";

import { Building2, Users, ShieldCheck, Briefcase } from "lucide-react";

export default function ClientTrust() {
  const sectors = [
    { label: "Mining & Industrial", icon: Building2, desc: "Specialized perimeter & asset protection." },
    { label: "Retail & Commercial", icon: Briefcase, desc: "Loss prevention and 24/7 site monitoring." },
    { label: "Residential Estates", icon: ShieldCheck, desc: "Access control and rapid armed response." },
    { label: "Private VIP Clients", icon: Users, desc: "Discreet executive and close protection." },
  ];

  return (
    <section className="bg-white py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Authority Text */}
          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase">
              Proven Reliability
            </span>
            <h2 className="text-4xl md:text-5xl mt-3 font-bold text-slate-900 tracking-tight leading-[1.1]">
              Securing the <span className="text-[#D4A017]">North West</span> Since Inception.
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed max-w-md">
              While we value client confidentiality, our track record speaks for itself. 
              Molale Security is the preferred partner for high-stakes environments 
              where failure is not an option.
            </p>
            
            {/* Quick Stats instead of generic quotes */}
            <div className="mt-10 flex gap-10">
              <div>
                <p className="text-3xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">PSIRA Compliant</p>
              </div>
              <div className="border-l border-slate-200 pl-10">
                <p className="text-3xl font-bold text-slate-900">24/7</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Live Monitoring</p>
              </div>
            </div>
          </div>

          {/* Right Side: Sector Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {sectors.map((item, index) => (
              <div 
                key={index} 
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:bg-slate-900 hover:text-white group"
              >
                <item.icon className="h-8 w-8 text-[#D4A017] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2">{item.label}</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}