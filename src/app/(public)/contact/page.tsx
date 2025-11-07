import type { Metadata } from "next";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle, Play } from "lucide-react";
import ContactForm from "./ContactForm"; // client component

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Molale Security for quotes, enquiries, or support. We're here to help 24/7.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="w-full bg-linear-to-b from-white to-gray-50">
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
        {/* ...heading... */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Form card */}
          <div className="relative rounded-xl bg-(--color-primary) text-white p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,.15)]">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background:radial-gradient(#fff_1px,transparent_1px)] bg-size-[22px_22px]" />
            <ContactForm /> {/* ← use client component */}
          </div>

          {/* Right: info + socials ... (unchanged) */}
          {/* Right: Info + socials */}
          <div className="flex flex-col ">
            <h2 className="text-6xl font-semibold mb-8">Get in touch With Us <span className="text-(--color-primary)">Today</span></h2>
            <p className="text-gray-500 ">
              Prefer WhatsApp or email? Reach us anytime. Our control room is staffed 24/7 and we
              respond promptly to quotes and call-outs.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-gray-800">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-(--color-primary)">
                  <Phone className="h-5 w-5" />
                </span>
                <a href="tel:+27184771412" className="font-medium hover:underline">
                  +27 18 477 1412
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-(--color-primary)">
                  <Mail className="h-5 w-5" />
                </span>
                <a href="mailto:info@molalesecurity.com" className="font-medium hover:underline">
                  info@molalesecurity.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-(--color-primary)">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>No 15 Third Avenue, Vaal Reefs, Orkney, 2619</span>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-(--color-primary)">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <a
                  href="https://wa.me/27XXXXXXXXX?text=Hi%20Molale%20Security%2C%20I%20need%20assistance"
                  className="font-medium hover:underline"
                  target="_blank" rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://facebook.com/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* Small note */}
            <p className="mt-6 text-sm text-gray-500">
              By submitting, you agree we can contact you regarding your enquiry. We never share your details.
            </p>
          </div>
        </div>
        
      </section>
    </main>
  );
}
