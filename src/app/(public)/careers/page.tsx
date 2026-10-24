import type { Metadata } from "next";
import { FileText, ShieldCheck } from "lucide-react";
import CareersForm from "./CareersForm";

export const metadata: Metadata = {
  title: "Careers | Submit Your CV",
  description: "Interested in working with Molale Security? Submit your CV for future opportunities.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <main className="w-full bg-white">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">Work with Molale</span>
          <h1 className="mt-5 text-5xl font-bold leading-[0.98] tracking-tight text-slate-950 md:text-7xl">
            Build a career in <span className="text-[#D4A017]">security.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">
            We welcome applications from people who are committed to protecting the communities we serve.
            Send us your CV and our team will keep it on file for suitable opportunities.
          </p>
          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#D4A017]" />
            <p className="text-sm leading-relaxed text-slate-600">
              Your CV is sent directly to our recruitment folder in Google Drive. It is not stored in the website database.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl md:p-10">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4A017] text-slate-950">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Submit your CV</h2>
              <p className="mt-1 text-sm text-slate-400">PDF, DOC or DOCX · Maximum 4 MB</p>
            </div>
          </div>
          <CareersForm />
          <p className="mt-6 text-xs leading-relaxed text-slate-500">
            By submitting, you consent to Molale Security retaining your CV for recruitment consideration.
          </p>
        </div>
      </section>
    </main>
  );
}
