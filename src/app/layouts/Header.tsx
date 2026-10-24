"use client";

import { usePathname } from "next/navigation";
import { GraduationCap, Menu, Phone, X, ChevronDown, Shield, Dog, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const ACADEMY_LINKS = [
  { href: "/training/security", label: "Security Training", icon: Shield, desc: "PSIRA Grades & Specialist Courses" },
  { href: "/training/k9", label: "K-9 Academy", icon: Dog, desc: "Handler & Detection Certifications" },
  { href: "/training/specialist", label: "Advanced Tactical", icon: BookOpen, desc: "Specialized Security Operations" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));
  
  const isTraining = pathname.startsWith("/training");

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-90 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-100 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative h-10 w-10 md:h-12 md:w-12 transition-transform group-hover:scale-105">
            <Image
              src="/assets/images/logo.png"
              alt="Molale Security Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-black text-slate-900 tracking-tighter leading-none">
              MOLALE
            </span>
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase leading-none mt-1">
              Security Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-[#D4A017] ${
                      active ? "text-[#D4A017]" : "text-slate-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="h-6 w-px bg-slate-200" />

          {/* Academy Dropdown CTA */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className={`rounded-full px-6 transition-all shadow-lg group/btn ${
                  isTraining
                    ? "bg-[#D4A017] hover:bg-[#B88A12] text-white"
                    : "bg-slate-950 hover:bg-blue-600 text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Academy</span>
                  <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]/btn:rotate-180" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-4 rounded-4xl bg-white shadow-2xl border-slate-100">
              <div className="px-3 py-2 mb-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Training Programs</p>
              </div>
              {ACADEMY_LINKS.map((link) => (
                <DropdownMenuItem key={link.href} asChild className="focus:bg-slate-50 rounded-2xl p-0 mb-1">
                  <Link href={link.href} className="flex items-center gap-4 p-3 w-full">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-none">{link.label}</p>
                      <p className="text-[10px] text-slate-400 mt-1">{link.desc}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-50">
                <Link href="/training" className="text-xs font-bold text-[#D4A017] hover:text-[#D4A017] flex items-center justify-center gap-2">
                  View Overview Academy Page <ChevronDown className="h-3 w-3 -rotate-90" />
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <a href="tel:+27184771412" className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 border border-slate-100">
            <Phone className="h-4 w-4" />
          </a>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-950">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:w-[400px] z-100 p-0 border-none bg-slate-950">
              <div className="flex flex-col h-full p-10 overflow-y-auto">
                <SheetHeader className="flex-row items-center justify-between space-y-0">
                  <SheetTitle className="text-white text-xs font-bold tracking-[0.3em] uppercase opacity-50">
                    Navigation
                  </SheetTitle>
                  <SheetClose className="text-white opacity-50 hover:opacity-100 transition-opacity">
                    <X className="h-6 w-6" />
                  </SheetClose>
                </SheetHeader>

                <nav className="mt-16 flex flex-col gap-8">
                  {NAV.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-3xl font-bold tracking-tighter transition-all ${
                          isActive(item.href) ? "text-[#D4A017]" : "text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  
                  {/* Mobile Academy Section */}
                  <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Academy Units</span>
                    {ACADEMY_LINKS.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href} className="flex items-center gap-4 group">
                          <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-[#D4A017] group-active:scale-95 transition-transform">
                            <link.icon className="h-5 w-5" />
                          </div>
                          <span className="text-xl font-bold text-white group-active:text-[#D4A017]">{link.label}</span>
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </nav>

                <div className="mt-auto pt-10">
                  <SheetClose asChild>
                    <Link 
                      href="/training" 
                      className="flex items-center justify-between p-6 rounded-2xl bg-[#D4A017] text-slate-950 transition-transform active:scale-95"
                    >
                      <span className="text-lg font-black uppercase tracking-tighter italic">Academy Overview</span>
                      <GraduationCap className="h-6 w-6" />
                    </Link>
                  </SheetClose>
                  
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center">
                       <Phone className="h-4 w-4 text-[#D4A017]" />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">24/7 Dispatch</span>
                       <span className="text-white font-bold">+27 18 477 1412</span>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
