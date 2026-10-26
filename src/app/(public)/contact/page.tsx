import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageSquare, ShieldCheck } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | 24/7 Security Dispatch & Quotes",
  description: "Get in touch with Molale Security for professional guarding, armed response, and K-9 services. Our command center is active 24/7 in the North West region.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/27838874914?text=${encodeURIComponent("Hi Molale Security, I need assistance")}`;

  return (
    <main className="w-full bg-white overflow-hidden">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        
        <div className="grid gap-20 lg:grid-cols-2 items-start">
          
          {/* LEFT SIDE: Info & Branding */}
          <div className="space-y-12">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-[0.4em] text-[#8f692b] uppercase">
                24/7 Dispatch Center
              </span>
              <h1 className="text-5xl md:text-7xl mt-4 font-bold text-slate-900 tracking-tight leading-[0.9]">
                Get in touch <br />
                <span className="text-[#c29a50]">With Us Today.</span>
              </h1>
              <p className="mt-8 text-lg text-slate-500 leading-relaxed font-light">
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
                { icon: MapPin, label: "Regional HQ", val: "No 15 Third Avenue, Orkney", href: "#" },
              ].map((item) => (
                <div key={item.label} className="group flex flex-col items-start">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#c29a50] group-hover:text-white transition-all duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                  <a href={item.href} className="mt-1 text-slate-900 font-bold hover:text-[#8f692b] transition-colors">
                    {item.val}
                  </a>
                </div>
              ))}
            </div>

            {/* Socials & Trust */}
            <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                <ShieldCheck className="h-4 w-4 text-[#c29a50]" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">PSIRA Accredited Force</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form Card */}
          <div className="relative">
            {/* Design Accents */}
            <div className="absolute -inset-4 bg-[#c29a50]/10 rounded-[3rem] blur-3xl -z-10" />
            
            <div className="relative rounded-[2.5rem] bg-slate-900 p-8 md:p-12 shadow-2xl border border-white/5 overflow-hidden">
              {/* Subtle mesh background inside the card */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              
              <div className="relative z-10">
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white tracking-tight">Security Briefing</h2>
                  <p className="text-slate-400 text-sm mt-2">Complete the form below for a confidential assessment.</p>
                </div>
                
                <ContactForm />

                <p className="mt-8 text-center text-[11px] text-slate-500 leading-relaxed font-medium italic">
                  * By submitting, you acknowledge that Molale Security will process your 
                  information in accordance with our strict confidentiality protocols.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}