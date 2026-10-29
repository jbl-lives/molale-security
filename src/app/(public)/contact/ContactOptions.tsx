import { Mail, MessageCircle, Phone } from "lucide-react";

const options = [
  {
    href: "tel:+27184771412",
    label: "Call our office",
    detail: "+27 18 477 1412",
    icon: Phone,
  },
  {
    href: "mailto:info@molalesecurity.com",
    label: "Email our team",
    detail: "info@molalesecurity.com",
    icon: Mail,
  },
];

export default function ContactOptions({ whatsappUrl }: { whatsappUrl: string }) {
  const links = [
    ...options,
    {
      href: whatsappUrl,
      label: "Message us on WhatsApp",
      detail: "Start a WhatsApp conversation",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="grid gap-3">
      {links.map(({ href, label, detail, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("https:") ? "_blank" : undefined}
          rel={href.startsWith("https:") ? "noopener noreferrer" : undefined}
          className="flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-[#c29a50]/50 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0c58e]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#c29a50]/15 text-[#e0c58e]">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block font-semibold text-white">{label}</span>
            <span className="mt-1 block break-words text-sm text-slate-300">{detail}</span>
          </span>
        </a>
      ))}
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        Please use these direct contact channels for service inquiries. This website does not currently submit inquiry forms.
      </p>
    </div>
  );
}
