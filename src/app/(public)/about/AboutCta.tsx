// src/components/about/AboutCta.tsx
import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="w-full bg-[var(--color-primary)] text-white py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Work with a team that shows up.</h3>
          <p className="mt-2 text-white/90">PSIRA compliant • Vetted officers • 24/7 control room</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-lg bg-white/10 px-5 py-3 font-semibold hover:bg-white/15 transition">
            Request a Quote
          </Link>
          <a
            href="https://wa.me/27XXXXXXXXX?text=Hi%20Molale%20Security%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white text-[var(--color-primary)] px-5 py-3 font-semibold hover:bg-white/90 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
