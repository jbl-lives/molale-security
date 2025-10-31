import { ClipboardList, BookOpenCheck, GraduationCap, ShieldCheck } from "lucide-react";

export default function ProcessStrip() {
  const STEPS = [
    { title: "1) Enrol",       desc: "Pick your start date and submit the application form.", icon: ClipboardList },
    { title: "2) Learn",       desc: "Attend classes and practical exercises with our trainers.", icon: BookOpenCheck },
    { title: "3) Certificate", desc: "Pass assessments and receive your Molale certificate of completion.", icon: GraduationCap },
    { title: "4) PSIRA",       desc: "Apply at PSIRA (Bloemfontein or Johannesburg) using our guidance.", icon: ShieldCheck },
  ];

  const CARD_BG = [
    "bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(59,130,246,0.10)_100%)]",
    "bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(16,185,129,0.10)_100%)]",
    "bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(168,85,247,0.10)_100%)]",
    "bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(236,72,153,0.10)_100%)]",
  ];

  const CHIP_BG = [
    "bg-[rgba(59,130,246,0.12)] text-[rgb(59,130,246)]",
    "bg-[rgba(16,185,129,0.12)] text-[rgb(16,185,129)]",
    "bg-[rgba(168,85,247,0.12)] text-[rgb(168,85,247)]",
    "bg-[rgba(236,72,153,0.12)] text-[rgb(236,72,153)]",
  ];

  return (
    <section className="border-t bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How the process works</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {STEPS.map(({ title, desc, icon: Icon }, i) => (
            <div
              key={title}
              className={[
                "rounded-2xl p-6",
                CARD_BG[i % CARD_BG.length],
                "shadow-[0_8px_24px_rgba(0,0,0,.06)] ring-1 ring-black/5",
                "hover:shadow-[0_14px_36px_rgba(0,0,0,.10)] transition"
              ].join(" ")}
            >
              <span className={`inline-grid h-12 w-12 place-items-center rounded-xl ${CHIP_BG[i % CHIP_BG.length]}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
