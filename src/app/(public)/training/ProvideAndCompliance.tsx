import { BookOpenCheck, ClipboardList, WalletCards, GraduationCap, ShieldCheck, MapPin } from "lucide-react";

export default function ProvideAndCompliance() {
  return (
    <section className="border-t bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2">
          {/* What we provide */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What we provide</h2>
            <ul className="mt-6 grid gap-4">
              {[
                { icon: BookOpenCheck, text: "Structured modules aligned to PSIRA outcomes (Grades E–C & Control Room)." },
                { icon: ClipboardList, text: "Learning notes, assessments, and support for revision." },
                { icon: WalletCards, text: "Certificate of Completion from Molale Security Training Academy." },
                { icon: GraduationCap, text: "Guidance to register for PSIRA after you pass (what to take, where to go)." },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gray-800/90 text-[var(--color-primary)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-gray-50 shadow-[0_8px_24px_rgba(0,0,0,.06)] ring-1 ring-black/5">
            <div className="flex items-center mb-6 gap-3">
              <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gray-800/90 text-[var(--color-primary)]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-gray-900">PSIRA alignment & compliance</h3>
            </div>
            <p className="my-3 text-gray-700">
              Training outcomes align to PSIRA requirements. Upon successful completion, you’ll receive a{" "}
              <strong>Molale Security Certificate of Completion</strong>. You then apply for your official{" "}
              <strong>PSIRA certificate</strong> at a PSIRA regional office—most learners in the North West use{" "}
              <em>Bloemfontein</em> or <em>Johannesburg</em>.
            </p>
            <div className="mt-8 grid gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> PSIRA Bloemfontein: Regional Office</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> PSIRA Johannesburg: Head / Regional Office</div>
              <p className="mt-6">We supply a checklist of documents and guide you through the application.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
