"use client";

import { usePathname } from "next/navigation";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/training", label: ""}
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/logo.png"   // or import logo from "@/assets/images/logo.png"
            alt="Molale Security Logo"
            width={48}
            height={48}
            priority
          />
          <span className="text-2xl font-bold text-gray-800">Molale Security</span>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-gray-700">
            {NAV.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative inline-flex items-center transition-colors",
                      "hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 rounded-sm px-1 py-0.5",
                      active
                        ? "text-[var(--color-primary)] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[var(--color-primary)]"
                        : "text-gray-700",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Button
            asChild
            className="ml-2 rounded-none bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-gray-400/60"
          >
            <Link href="/training" className="inline-flex items-center gap-2">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              <span>Training Academy</span>
            </Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] sm:w-96">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-2">
                {NAV.map((item) => {
                  const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={[
                          "block rounded-md px-3 py-2 text-base transition-colors",
                          "hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30",
                          active ? "text-[var(--color-primary)] font-semibold" : "text-gray-700",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}

                <SheetClose asChild>
                  <Button asChild className="mt-2">
                    <Link href="/contact" className="text-white">
                      Get a Quote
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
