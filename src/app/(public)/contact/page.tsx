import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import ContactOptions from "./ContactOptions";

export const metadata = {
  title: "Contact Us | 24/7 Security Dispatch & Quotes",
  description: "Get in touch with Molale Security for professional guarding, armed response, and K-9 services. Our command center is active 24/7 in the North West region.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/27838874914?text=${encodeURIComponent("Hi Molale Security, I need assistance")}`;

  return (
    <main className="w-full bg-white overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Info & Branding */}
          <div className="space-y-10">
            <div className="max-w-xl">
              <span className="text-xs font-semibold tracking-[0.18em] text-[#8f692b] uppercase">
                24/7 Dispatch Center
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl mt-4 font-semibold text-slate-900 tracking-tight leading-[1.04]">
                Get in touch <span className="text-[#c29a50]">with us.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed">
                Our control room is operational 24/7. Whether you require immediate 
                armed response or a long-term commercial security strategy, 
                our consultants are standing by.
              </p>
            </div>

            {/* Direct Contact Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Phone, label: "Emergency Line", val: "+27 18 477 1412", href: "tel:+27184771412" },
                { icon: Mail, label: "Official Enquiries", val: "info@molalesecurity.com", href: "mailto:info@molalesecurity.com" },
                { icon: MessageSquare, label: "WhatsApp Dispatch", val: "Instant Chat", href: whatsappUrl },
                { icon: MapPin, label: "Regional HQ", val: "No 15 Third Avenue, Orkney", href: undefined },
              ].map((item) => (
                <div key={item.label} className="group flex flex-col items-start">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#c29a50] group-hover:text-white transition-all duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 text-slate-900 font-semibold hover:text-[#8f692b] transition-colors">{item.val}</a>
                  ) : <span className="mt-1 text-slate-900 font-semibold">{item.val}</span>}
                </div>
              ))}
            </div>

            {/* Trust indicator */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                <ShieldCheck className="h-4 w-4 text-[#c29a50]" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">PSIRA Accredited Force</span>
              </div>
            </div>
          </div>

          {/* Direct contact options */}
          <div className="relative">
            {/* Design Accents */}
            <div className="absolute -inset-4 bg-[#c29a50]/10 rounded-[3rem] blur-3xl -z-10" />
            
            <div className="relative rounded-2xl bg-slate-900 p-7 md:p-10 shadow-xl border border-slate-800 overflow-hidden">
              <div className="relative z-10">
                <div className="mb-7">
                  <h2 className="text-2xl font-semibold text-white tracking-tight">Speak with our team</h2>
                  <p className="text-slate-300 text-sm mt-2">Choose the channel that works best for your inquiry.</p>
                </div>
                <ContactOptions whatsappUrl={whatsappUrl} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
