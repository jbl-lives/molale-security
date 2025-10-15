import { BadgeCheck, MapPin, WalletCards } from "lucide-react";
import ApplyForm from "./ApplyForm";

export default function ApplySection() {
  return (
    <section id="apply" className="mx-auto max-w-screen-xl px-4 md:px-6 py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative rounded-2xl bg-[var(--color-primary)]/95 text-white p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,.15)]">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
          <h2 className="text-2xl md:text-3xl font-bold">Apply for a course</h2>
          <p className="mt-2 text-white/90">
            Fill in your details and preferred course/date. We’ll confirm your seat and send joining instructions.
          </p>
          <div className="mt-6">
            <ApplyForm />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-900">What happens next?</h3>
          <p className="mt-2 text-gray-700">
            Once we receive your application, our training coordinator will contact you with available seats,
            payment details, and a checklist for the first day. Need help choosing a course? Call us—we’ll advise.
          </p>
          <ul className="mt-6 grid gap-3 text-gray-700">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--color-primary)]" /> Klerksdorp & surrounding areas</li>
            <li className="flex items-center gap-2"><WalletCards className="h-4 w-4 text-[var(--color-primary)]" /> Payment plans available on request</li>
            <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[var(--color-primary)]" /> Small classes for personal attention</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
