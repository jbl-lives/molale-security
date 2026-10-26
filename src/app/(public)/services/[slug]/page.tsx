import { notFound } from "next/navigation";
import { servicesFancy } from "@/data/services";
import Image from "next/image";
import { CheckCircle2, ArrowLeft, ShieldCheck, PhoneCall, ArrowUpRight } from "lucide-react";
import Link from "next/link";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: PageProps) {
  // 1. Next.js 15 async params resolution
  const { slug } = await params;

  // Find matching service
  const service = servicesFancy.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/27838874914?text=${encodeURIComponent(
    `Hi Molale Security, I need information regarding ${service.title}`
  )}`;

  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-[#c29a50] selection:text-slate-950">
      {/* Tactical Hero */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden border-b border-white/10">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover grayscale opacity-30 transition-all duration-1000 hover:scale-105 hover:grayscale-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c29a50] hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return to Catalog
            </Link>
            
            <div className="flex items-center gap-3 mb-3">
              <div className="h-2 w-2 rounded-full bg-[#a77c2e] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Active Tactical Division
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          
          {/* Service Specifications */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#a77c2e]">
                Operational Briefing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Protection Architecture: <span className="text-[#c29a50]">{service.title}</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light">
                {service.blurb ||
                  "Molale Security provides top-tier security solutions tailored to your specific needs. Our team is highly trained and PSIRA registered to ensure the safety of your assets and personnel."}
              </p>
            </div>

            {/* Core Capabilities Card */}
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="h-6 w-6 text-[#c29a50]" />
                <h3 className="text-lg font-bold uppercase tracking-widest text-white">
                  Division Capabilities
                </h3>
              </div>

              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "24/7 Command Monitoring",
                  "Vetted PSIRA Personnel",
                  "GPS-Optimized Dispatch",
                  "Detailed Digital Logs",
                  "Tactical Site Placement",
                  "SAPS Direct Liaison"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="h-5 w-5 text-[#c29a50] shrink-0" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Action Station */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-8 md:p-10 rounded-[2.5rem] bg-slate-900 border border-[#c29a50]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c29a50]/10 blur-3xl rounded-full pointer-events-none" />

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c29a50] block mb-2">
                Deployment Protocol
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                Request Unit <br />
                Deployment
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Initiate a site risk assessment or schedule operational deployment for {service.title}.
              </p>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-between w-full px-6 py-4 bg-[#c29a50] text-slate-950 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-xl active:scale-95 group"
                >
                  <span>Request Official Quote</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-6 py-4 bg-white/5 text-white border border-white/10 font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all active:scale-95"
                >
                  <span>Direct WhatsApp</span>
                  <PhoneCall className="h-4 w-4 text-[#c29a50]" />
                </a>
              </div>

              <p className="mt-8 text-[10px] text-slate-500 text-center font-bold uppercase tracking-widest">
                24/7 Command Center Active
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}