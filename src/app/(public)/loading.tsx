"use client";

import { Shield } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-md">
      <div className="relative h-20 
      w-20 border border-white/10 rounded-3xl bg-slate-900 flex items-center justify-center shadow-2xl">
        <Shield className="h-10 w-10 text-[#c29a50] animate-pulse" />
      </div>
      <p className="mt-4 text-[10px] font-black text-white uppercase tracking-[0.4em]">
        Authenticating...
      </p>
    </div>
  );
}