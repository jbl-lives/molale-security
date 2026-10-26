import { ClipboardList, BookOpenCheck, GraduationCap, ShieldCheck, ArrowRight } from "lucide-react";

export default function ProcessStrip() {
  const STEPS = [
    { title: "Enrol", desc: "Select your course and secure your spot via our digital registration.", icon: ClipboardList },
    { title: "Learn", desc: "Engage in expert-led theory and practical field exercises.", icon: BookOpenCheck },
    { title: "Certify", desc: "Complete assessments to earn your Molale Academy credentials.", icon: GraduationCap },
    { title: "PSIRA", desc: "Finalize your professional registration with our expert guidance.", icon: ShieldCheck },
  ];

  return (
    <section className="bg-[#c29a50] py-20 md:py-28 relative overflow-hidden">
      {/* Subtle Pattern Overlay for texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-white/80 uppercase">
            Step-by-Step Guide
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 font-bold text-white tracking-tight">
            How the process <span className="text-slate-900">works</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4 lg:gap-6">
  {STEPS.map(({ title, desc, icon: Icon }, i) => (
    <div
      key={title}
      className="group relative 
      /* Base: Deep Dark Charcoal */
      bg-slate-900/95 backdrop-blur-md 
      border border-slate-800 rounded-3xl p-8 
      shadow-xl shadow-slate-950/20
      transition-all duration-500 
      hover:bg-slate-950 hover:border-[#c29a50]/40 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Step Number Badge */}
      <div className="absolute top-6 right-8 text-4xl font-black 
          text-white/10 
          group-hover:text-[#c29a50]/20 transition-colors">
        0{i + 1}
      </div>

      {/* Icon Container */}
      <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-slate-800 text-[#c29a50] border border-slate-700 group-hover:bg-[#c29a50] group-hover:text-slate-950 transition-all duration-300 shadow-xl">
        <Icon className="h-7 w-7" />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold 
                      text-white 
                      group-hover:text-[#c29a50] transition-colors tracking-tight">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed transition-colors
                      text-slate-400 
                      group-hover:text-slate-300">
          {desc}
        </p>
      </div>

      {/* Mobile/Desktop Decorative Arrow Connector */}
      {i < STEPS.length - 1 && (
        <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
          <ArrowRight className="w-6 h-6 text-slate-950/40 group-hover:text-slate-950 transition-colors" />
        </div>
      )}
    </div>
  ))}
</div>
      </div>
    </section>
  );
}