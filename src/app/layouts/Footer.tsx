"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* Brand & Mission Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/assets/images/logo-white2.png"
                alt="Molale Security"
                width={40}
                height={40}
                className="brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-xl font-black text-white tracking-tighter uppercase">Molale</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Providing intelligence-led security architecture and tactical protection across the North West since 2006.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-slate-500 hover:bg-[#D4A017] hover:text-slate-950 transition-all">
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Operational Units (Services) */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6">Operations</h4>
            <ul className="space-y-4">
              {[
                { label: "Armed Response", href: "/services/armed-response" },
                { label: "Physical Guarding", href: "/services/physical-guarding" },
                { label: "CCTV & Alarms", href: "/services/cctv-alarms" },
                { label: "VIP Protection", href: "/services/vip-protection" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-[#D4A017] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About Our Legacy", href: "/about" },
                { label: "Tactical Academy", href: "/training" },
                { label: "Contact HQ", href: "/contact" },
                { label: "Regional Coverage", href: "/services#coverage" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-[#D4A017] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HQ & Support */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-6">HQ Contact</h4>
            <div className="space-y-4">
              <a href="tel:+27184771412" className="flex items-center gap-3 group">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-slate-950 transition-all">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm text-slate-500 group-hover:text-white transition-colors">+27 18 477 1412</span>
              </a>
              <a href="mailto:info@molalesecurity.com" className="flex items-center gap-3 group">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-slate-950 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm text-slate-500 group-hover:text-white transition-colors">info@molalesecurity.com</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-[#D4A017]">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm text-slate-500 leading-tight">No 15 Third Avenue,<br />Vaal Reefs, Orkney</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
              © {currentYear} Molale Security Group
            </p>
            <div className="h-4 w-px bg-slate-800 hidden md:block" />
            <Link href="/privacy" className="text-[10px] text-slate-600 font-bold uppercase tracking-widest hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Compliance Badge */}
          <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <ShieldCheck className="h-4 w-4 text-[#D4A017]" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PSIRA Accredited Force</span>
          </div>
        </div>
      </div>
    </footer>
  );
}