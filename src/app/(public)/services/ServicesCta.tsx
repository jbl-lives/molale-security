// src/components/services/ServicesCta.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesCta() {
  return (
    <section className="w-full bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14
                      flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Ready to secure your site?</h3>
          <p className="mt-2 text-white/90">Get a tailored plan—guarding, alarms, CCTV and rapid response.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-white text-[var(--color-primary)] hover:bg-white/90">
            <Link href="/contact">Request a Quote</Link>
          </Button>
          <Button asChild className="bg-[#25D366] hover:bg-[#1ebe57] active:bg-[#19a84b] text-white">
            <a
              href="https://wa.me/27XXXXXXXXX?text=Hi%20Molale%20Security%2C%20I%20need%20assistance%20with%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
