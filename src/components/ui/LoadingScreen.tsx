"use client";

import { Shield } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-slate-950">
      {/* Animated Shield Logo */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#D4A017]/20 blur-3xl rounded-full animate-pulse" />
        <div className="relative h-24 w-24 border border-white/10 rounded-[2rem] bg-slate-900 flex items-center justify-center shadow-2xl">
          <Shield className="h-12 w-12 text-[#D4A017] animate-pulse" />
        </div>
      </div>

      {/* Loading Status */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] font-black text-white uppercase tracking-[0.5em] opacity-40">
          Initializing Secure Protocol
        </span>
        <div className="h-[1px] w-32 bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#D4A017] animate-progress-slide" />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress-slide {
          animation: progress-slide 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}