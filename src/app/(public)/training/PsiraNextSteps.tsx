import {
  Clock,
  FileText,
  IdCard,
  Image as ImageIcon,
  Home,
  GraduationCap,
  Fingerprint,
  BadgeCheck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function PsiraNextSteps() {
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase">
            Certification Phase
          </span>
          <h2 className="text-4xl md:text-5xl mt-3 font-bold text-slate-900 tracking-tight">
            After You Pass: <span className="font-light italic">The PSIRA Process</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl leading-relaxed">
            Successfully completing your training is the first step. Here is the roadmap and 
            documentation required to finalize your professional PSIRA registration.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* LEFT COLUMN: Timeframe & Tips */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Timeline</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-3xl font-bold text-slate-900">6—8 <span className="text-sm font-medium text-slate-500">Weeks</span></p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Average Processing Time</p>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Document Accuracy",
                    "Regional Office Volume",
                    "Result Capturing Speed"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex gap-3">
                   <div className="h-8 w-8 bg-[#D4A017]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-4 w-4 text-[#D4A017]" />
                   </div>
                   <p className="text-xs text-slate-500 leading-relaxed italic">
                    <strong>Molale Pro-Tip:</strong> We provide a pre-submission audit to ensure your application is 100% correct before you travel.
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Document Checklist (Main Content) */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
               {/* Background Decorative Element */}
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <FileText className="h-64 w-64 text-white" />
               </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#D4A017]" />
                  </div>
                  <h3 className="text-2xl font-bold">Required Documentation</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Category 1 */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#D4A017] uppercase">Identity & Forms</h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start group">
                        <div className="h-5 w-5 rounded-md bg-white/5 flex items-center justify-center mt-0.5 group-hover:bg-[#D4A017]/20 transition-colors">
                          <BadgeCheck className="h-3 w-3 text-[#D4A017]" />
                        </div>
                        <p className="text-sm text-slate-300">Signed PSIRA Individual Form</p>
                      </div>
                      <div className="flex gap-3 items-start group">
                         <div className="h-5 w-5 rounded-md bg-white/5 flex items-center justify-center mt-0.5 group-hover:bg-[#D4A017]/20">
                          <IdCard className="h-3 w-3 text-[#D4A017]" />
                        </div>
                        <p className="text-sm text-slate-300">Certified SA ID Copy</p>
                      </div>
                      <div className="flex gap-3 items-start group">
                         <div className="h-5 w-5 rounded-md bg-white/5 flex items-center justify-center mt-0.5 group-hover:bg-[#D4A017]/20">
                          <ImageIcon className="h-3 w-3 text-[#D4A017]" />
                        </div>
                        <p className="text-sm text-slate-300">2x Passport Photos</p>
                      </div>
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#D4A017] uppercase">Verification</h4>
                    <div className="space-y-3">
                      <div className="flex gap-3 items-start group">
                         <div className="h-5 w-5 rounded-md bg-white/5 flex items-center justify-center mt-0.5 group-hover:bg-[#D4A017]/20">
                          <Home className="h-3 w-3 text-[#D4A017]" />
                        </div>
                        <p className="text-sm text-slate-300">Proof of Residence (Utility/Lease)</p>
                      </div>
                      <div className="flex gap-3 items-start group">
                         <div className="h-5 w-5 rounded-md bg-white/5 flex items-center justify-center mt-0.5 group-hover:bg-[#D4A017]/20">
                          <GraduationCap className="h-3 w-3 text-[#D4A017]" />
                        </div>
                        <p className="text-sm text-slate-300">Grade E/D/C Training Certificates</p>
                      </div>
                      <div className="flex gap-3 items-start group">
                         <div className="h-5 w-5 rounded-md bg-white/5 flex items-center justify-center mt-0.5 group-hover:bg-[#D4A017]/20">
                          <Fingerprint className="h-3 w-3 text-[#D4A017]" />
                        </div>
                        <p className="text-sm text-slate-300">Captured Fingerprint Set</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Offices Footer */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <p className="text-xs text-slate-400">Regional Application Hubs:</p>
                  <div className="flex gap-6">
                    <span className="text-sm font-semibold border-b border-[#D4A017] pb-1">Bloemfontein</span>
                    <span className="text-sm font-semibold border-b border-[#D4A017] pb-1">Johannesburg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}