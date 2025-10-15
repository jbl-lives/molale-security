// src/app/ClientLayout.tsx
"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const variants: Variants = prefersReduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.15 } },
        exit: { opacity: 0, transition: { duration: 0.12 } },
      }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } },
        exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: EASE } },
      };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial="initial" animate="animate" exit="exit" variants={variants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
