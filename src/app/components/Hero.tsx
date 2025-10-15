"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section
        className="relative isolate w-full min-h-[70svh] md:min-h-[80svh] overflow-hidden
                   bg-[url('/assets/images/hero-bg.jpeg')] bg-cover bg-center bg-no-repeat
                   text-white"
        aria-label="Molale Security hero"
      >
        {/* overlays */}
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        {/* content */}
        <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
          <div className="flex min-h-[70svh] md:min-h-[80svh] items-center">
            <div className="text-left max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight drop-shadow-sm">
                Welcome to <span className="text-[var(--color-primary)] ">Molale Security</span>
              </h1>

              <p className="mt-4 md:mt-6 text-base md:text-lg/relaxed text-white/90 max-w-2xl">
                Your trusted partner for armed response, guarding, VIP protection, CCTV &amp; alarms,
                screening, private investigations, and training across North West.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 text-sm md:text-base font-semibold
                            text-white transition
                            bg-[var(--color-primary)] hover:bg-[color-mix(in_oklab,var(--color-primary),#000_12%)]
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/40"
                >
                    Get a Quote
                </Link>

                <a
                href="https://wa.me/27XXXXXXXXX?text=Hi%20Molale%20Security%2C%20I%20need%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="inline-flex items-center gap-2  px-5 py-3 text-sm md:text-base font-semibold
                            bg-green-600 text-white shadow-sm
                            hover:bg-[#1ebe57] active:bg-[#19a84b] transition
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                >
                {/* WhatsApp logo (inherits white from text via currentColor) */}
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="shrink-0">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.55 0 .26 5.29.26 11.8c0 2.09.55 4.11 1.6 5.9L0 24l6.5-1.7a11.7 11.7 0 0 0 5.57 1.42h.01c6.51 0 11.8-5.29 11.8-11.8 0-3.15-1.23-6.11-3.36-8.35ZM12.08 21.1h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.86 1.01 1.03-3.77-.24-.39a9.9 9.9 0 0 1-1.53-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.02 2.9a9.88 9.88 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.46-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.17 5.03 4.45.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.19-.57-.34Z" />
                </svg>
                WhatsApp Us
                </a>


                </div>

            </div>
          </div>
        </div>
      </section>

      {/* Full-width trust band */}
      <div className="w-full bg-white text-gray-800 border-t border-b border-gray-300">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <ul className="flex flex-wrap items-center justify-center divide-x divide-gray-300">
            <li className="text-gray-700 px-8 py-3 text-md  md:text-lg">PSIRA Compliant</li>
            <li className="text-gray-700 px-8 py-3 text-md  md:text-lg">24/7 Rapid Response</li>
            <li className="text-gray-700 px-8 py-3 text-md  md:text-lg">Vetted &amp; Trained Officers</li>
          </ul>
        </div>
      </div>
    </>
  );
}
