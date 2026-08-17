"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft, Home, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center px-6 overflow-hidden">
      {/* Background Tactical Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-2xl text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-white/5 border border-white/10 mb-8 shadow-2xl"
        >
          <ShieldAlert className="h-12 w-12 text-[#D4A017] animate-pulse" />
        </motion.div>

        {/* Error Code & Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[10px] font-black text-[#D4A017] uppercase tracking-[0.5em] mb-4 block">
            Error Protocol 404
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
            Access <span className="text-slate-500 italic">Denied.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed mb-12">
            The sector you are trying to reach does not exist or has been moved outside the current perimeter.
          </p>
        </motion.div>

        {/* Navigation Actions */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto rounded-full px-8 py-6 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white transition-all group"
          >
            <button onClick={() => window.history.back()} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Return to Previous</span>
            </button>
          </Button>

          <Button
            asChild
            className="w-full sm:w-auto rounded-full px-8 py-6 bg-[#D4A017] text-slate-950 hover:bg-[#B88A12] transition-all shadow-xl shadow-[#D4A017]/20 group"
          >
            <Link href="/">
              <Home className="h-4 w-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Secure Home Base</span>
            </Link>
          </Button>
        </motion.div>

        {/* Bottom Trust Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex items-center justify-center gap-3"
        >
          <ShieldCheck className="h-4 w-4 text-white" />
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">Molale Security Protocol Active</span>
        </motion.div>
      </div>
    </main>
  );
}