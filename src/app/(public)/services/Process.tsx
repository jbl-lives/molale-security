// src/components/services/Process.tsx
import { ClipboardList, PhoneCall, Car, FileCheck } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "1) Consultation", desc: "Quick needs assessment via phone, WhatsApp or site visit." },
  { icon: ClipboardList, title: "2) Site Plan", desc: "Risk review, post orders and response routes agreed in writing." },
  { icon: Car, title: "3) Deployment", desc: "Officers briefed, tech installed, monitoring and dispatch live 24/7." },
  { icon: FileCheck, title: "4) Review", desc: "Incident logs & service reviews keep quality and KPIs on track." },
];

export default function Process() {
  return (
    <section className="w-full bg-[var(--color-primary)] py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How it works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]
                         hover:shadow-[0_8px_28px_rgb(0_0_0_/_0.10)] transition"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl
                              bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
