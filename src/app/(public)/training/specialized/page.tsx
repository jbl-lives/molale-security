import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export const metadata = {
  title: "Advanced Tactical Training | Coming Soon",
  description: "Specialized tactical security operations and advanced training modules.",
  alternates: { canonical: "/training/specialized" },
};

export default function SpecializedTrainingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-32 px-6 flex flex-col items-center justify-center text-center">
      <div className="h-20 w-20 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center text-[#D4A017] mb-8 shadow-2xl">
        <BookOpen className="h-10 w-10" />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4A017] mb-3">
        Molale Academy
      </span>
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
        Specialized Tactical <span className="text-slate-500 italic">Division</span>
      </h1>
      <p className="text-slate-400 max-w-md text-sm leading-relaxed mb-8">
        Advanced tactical operations and specialized security modules are currently under curriculum review for the next intake.
      </p>
      <Link
        href="/training"
        className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A017] text-slate-950 font-bold text-xs uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-xl shadow-[#D4A017]/10"
      >
        <ArrowLeft className="h-4 w-4" /> Return to Academy Hub
      </Link>
    </main>
  );
}