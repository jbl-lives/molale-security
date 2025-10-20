// src/app/layouts/ClientLayout.tsx (or src/app/ClientLayout.tsx if you moved it back)
"use client";

import { ReactNode, useState, useEffect } from "react"; // <-- Import useState and useEffect
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // <-- This line is the only hook in the render path

  // Use state to manage the prefersReduced status
  const [prefersReduced, setPreFersReduced] = useState(false); 

  useEffect(() => {
    // This logic runs ONLY on the client after mounting
    if (typeof window !== "undefined" && window.matchMedia) {
      setPreFersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []); // Run only once on mount

  const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // The rest of your logic remains the same, using the 'prefersReduced' state
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
      {/* pathname remains the key */}
      <motion.div key={pathname} initial="initial" animate="animate" exit="exit" variants={variants}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}