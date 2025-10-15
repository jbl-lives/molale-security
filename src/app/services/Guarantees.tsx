// src/components/services/Guarantees.tsx
import { ShieldCheck, ClipboardSignature, MessageSquare } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Compliance first",
    desc: "PSIRA-registered company and officers. Documented SOPs and lawful conduct at all times.",
  },
  {
    icon: ClipboardSignature,
    title: "Service-level clarity",
    desc: "Written post orders, escalation paths and scheduled reviews to keep quality visible.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    desc: "Control room updates via phone/WhatsApp, with incident numbers and follow-ups.",
  },
];

export default function Guarantees() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 border-y">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our commitments</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]">
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
