// src/app/training/PsiraNextSteps.tsx
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
} from "lucide-react";

export default function PsiraNextSteps() {
  return (
    <section className="border-t bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
        <header className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            After You Pass: Getting Your PSIRA Certificate
          </h2>
          <p className="mt-2 text-gray-700">
            Here’s how long it usually takes and what you’ll need to submit for your PSIRA application.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* LEFT: Timeframe (green theme) */}
          <article
            className="
              rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,.06)] ring-1 ring-black/5
              bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(16,185,129,0.10)_100%)]
            "
          >
            <div className="flex items-center gap-3">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[rgba(16,185,129,.12)] text-[rgb(16,185,129)]">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Typical Timeframe</h3>
                <p className="text-gray-700">
                  Most applicants receive their PSIRA certificate in <strong>± 6–8 weeks</strong> after submitting a
                  complete, correct application. Timing can vary depending on:
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex gap-2">
                <BadgeCheck className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                Accuracy and completeness of your documents
              </li>
              <li className="flex gap-2">
                <BadgeCheck className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                Whether your training results were captured promptly
              </li>
              <li className="flex gap-2">
                <BadgeCheck className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                Overall volume at the regional office
              </li>
            </ul>

            <div className="mt-5 rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4">
              <p className="text-sm text-gray-800">
                <strong>Tip:</strong> Molale will guide you with a submission checklist to help prevent delays.
              </p>
            </div>
          </article>

          {/* RIGHT: Required documents (same green theme) */}
          <article
            className="
              rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,.06)] ring-1 ring-black/5
              bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(16,185,129,0.10)_100%)]
            "
          >
            <div className="flex items-center gap-3">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-[rgba(16,185,129,.12)] text-[rgb(16,185,129)]">
                <FileText className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Documents You’ll Need</h3>
                <p className="text-gray-700">Have these ready when applying at a PSIRA regional office.</p>
              </div>
            </div>

            <div className="mt-4 grid gap-4">
              <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[var(--color-primary)]" /> Application & Identification
                </h4>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li className="flex gap-2">
                    <BadgeCheck className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                    Completed and signed PSIRA Individual Application Form
                  </li>
                  <li className="flex gap-2">
                    <IdCard className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                    Certified copy of your South African ID (or passport/driver’s license where applicable)
                  </li>
                  <li className="flex gap-2">
                    <ImageIcon className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                    Two passport-sized photos
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Home className="h-4 w-4 text-[var(--color-primary)]" /> Proof of Address
                </h4>
                <p className="mt-1 text-gray-700">
                  Recent utility bill, municipal account, or lease agreement in your name (or an affidavit if needed).
                </p>
              </div>

              <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-[var(--color-primary)]" /> Training Proof
                </h4>
                <p className="mt-1 text-gray-700">
                  Accredited training certificate(s) such as <strong>Grade E/D/C</strong> and any specialist courses (e.g. Control Room).
                </p>
              </div>

              <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Fingerprint className="h-4 w-4 text-[var(--color-primary)]" /> Background & Declarations
                </h4>
                <ul className="mt-2 space-y-1 text-gray-700">
                  <li className="flex gap-2">
                    <BadgeCheck className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                    Full set of fingerprints (captured at the relevant facility)
                  </li>
                  <li className="flex gap-2">
                    <BadgeCheck className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                    Criminal record declaration / clearance where applicable
                  </li>
                  <li className="flex gap-2">
                    <BadgeCheck className="mt-1 h-4 w-4 text-[var(--color-primary)]" />
                    Prior-force clearance if you previously served in official/military/security/police/intelligence
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4">
              <p className="text-sm text-gray-800">
                <strong>Where to apply:</strong> Most learners from North West use <em>PSIRA Bloemfontein</em> or{" "}
                <em>PSIRA Johannesburg</em>. Molale will share directions and a prep checklist before you go.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-8 rounded-2xl bg-gray-900 text-white p-4 md:p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-[var(--color-primary)]" />
            <p className="text-sm md:text-base">
              We’re here to help: once you pass, our team provides a simple step-by-step pack so you can submit a clean,
              complete PSIRA application and avoid back-and-forth delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
