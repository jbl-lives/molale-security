import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrimaryCta() {
  return (
    <section className="w-full bg-[var(--color-primary)] text-white ">
      <div
        className="mx-auto max-w-screen-xl px-4 md:px-6 py-6 md:py-6
                   grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]"
      >
        {/* Left: copy */}
        <div className="text-left">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            Need security today?
          </h3>
          <p className="mt-2 text-white/90 max-w-md">
            Rapid response, vetted officers, and 24/7 monitoring—ready when you are.
          </p>
        </div>

        {/* Middle: phone image */}
        <div className="flex justify-center">
          <div className="relative h-40 w-40 md:h-48 md:w-48">
            <Image
              src="/assets/images/phone.png"    /* put your png here */
              alt="Contact Molale Security"
              fill
              priority={false}
              className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex flex-wrap justify-start md:justify-end gap-3">
          <Button asChild className="bg-white text-[var(--color-primary)] hover:bg-white/90">
            <Link href="/contact">Get a Quote</Link>
          </Button>

          {/* WhatsApp solid green with icon */}
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#1ebe57] active:bg-[#19a84b] text-white"
          >
            <a
              href="https://wa.me/27XXXXXXXXX?text=Hi%20Molale%20Security%2C%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.55 0 .26 5.29.26 11.8c0 2.09.55 4.11 1.6 5.9L0 24l6.5-1.7a11.7 11.7 0 0 0 5.57 1.42h.01c6.51 0 11.8-5.29 11.8-11.8 0-3.15-1.23-6.11-3.36-8.35ZM12.08 21.1h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.86 1.01 1.03-3.77-.24-.39a9.9 9.9 0 0 1-1.53-5.32c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.02 2.9a9.88 9.88 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.46-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.08 3.17 5.03 4.45.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.19-.57-.34Z" />
                </svg>
                WhatsApp Us
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
