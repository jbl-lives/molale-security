import { BookOpenCheck, ClipboardList, WalletCards, GraduationCap, ShieldCheck, MapPin } from "lucide-react";

export default function ProvideAndCompliance() {
  return (
    <section className="border-t border-slate-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          
          {/* Section 1: What we provide */}
          <div>
            <div className="mb-10">
              <span className="text-xs font-bold tracking-[0.2em] text-[#8f692b] uppercase">
                Academy Benefits
              </span>
              <h2 className="text-3xl md:text-4xl mt-2 font-bold text-slate-900 tracking-tight">
                What we provide
              </h2>
            </div>

            <ul className="space-y-8">
              {[
                { icon: BookOpenCheck, title: "Structured Learning", text: "Modules aligned to PSIRA outcomes for Grades E–C and Control Room." },
                { icon: ClipboardList, title: "Academic Support", text: "Comprehensive learning notes, formal assessments, and revision guidance." },
                { icon: WalletCards, title: "Official Certification", text: "Earn a recognized Certificate of Completion from Molale Security." },
                { icon: GraduationCap, title: "Post-Course Guidance", text: "Step-by-step assistance for PSIRA registration after your final pass." },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-5 group">
                  {/* Icon Container: Fixed width to prevent "mushing" */}
                  <div className="flex-shrink-0 inline-grid h-12 w-12 place-items-center rounded-xl bg-slate-900 text-white group-hover:bg-[#8f692b] transition-colors duration-300 shadow-lg shadow-slate-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="pt-1">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">{title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Compliance Card (Professionalized) */}
          <div className="relative">
            {/* Decorative background element for corporate feel */}
            <div className="absolute -inset-4 bg-slate-50 rounded-3xl -z-10 hidden lg:block" />
            
            <div className="rounded-2xl p-8 md:p-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 relative z-10">
              <div className="flex items-center mb-8 gap-4">
                <div className="flex-shrink-0 h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-[#8f692b]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">PSIRA Compliance</h3>
              </div>

              <div className="space-y-6">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our training outcomes are strictly mapped to <span className="text-slate-900 font-semibold">PSIRA requirements</span>. 
                  Upon success, you will receive your Molale Security Certificate of Completion.
                </p>
                
                <div className="bg-slate-50 p-6 rounded-xl space-y-4">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">Regional Offices</p>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#8f692b] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Johannesburg</p>
                      <p className="text-xs text-slate-500">Head & Regional Office</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-[#8f692b] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Bloemfontein</p>
                      <p className="text-xs text-slate-500">Regional Support Office</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 italic">
                    We supply a full document checklist and navigate the application process with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}