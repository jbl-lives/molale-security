import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHeroModern() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
        {/* Headline */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl mb-4 font-bold tracking-tight text-gray-700">
              About <span className="text-[var(--color-primary)]">Molale Security</span>
            </h1>
            
          </div>
        </div>

        {/* Media with glass overlay */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-xl bg-gray-200 shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <Image
              src="/assets/images/about-hero2.jpg" // change to /assets/images/about-hero.jpg if you add one
              alt="Molale Security team and operations"
              width={1600}
              height={800}
              priority
              className="h-[42svh] w-full object-cover md:h-[52svh]"
            />

            {/* glass banner */}
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 md:left-6 md:right-6">
              <div className="relative rounded-2xl bg-black/35 backdrop-blur-md text-white px-4 py-3 md:px-6 md:py-4">
                <span className="absolute -top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  ABOUT
                </span>

                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm md:text-base font-semibold">
                      People • Process • Technology • Community
                    </div>
                    <p className="mt-0.5 line-clamp-1 text-xs md:text-sm text-white/85">
                      PSIRA compliant • Documented SOPs • GPS-tracked patrols • Transparent reporting
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
                    aria-label="Contact us"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip (tailored for About) */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-gray-50 px-5 py-4 shadow-sm">
            <div className="text-3xl md:text-4xl font-extrabold text-gray-900">2006</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-600">Founded</div>
          </div>

          <div className="rounded-2xl bg-gray-50 px-5 py-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900">40+</div>
              <span className="rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider text-gray-700">
                Officers
              </span>
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">Vetted & Trained</div>
          </div>

          <div className="col-span-2 md:col-span-1 rounded-2xl bg-gray-900 px-5 py-4 text-white shadow-sm">
            <div className="text-3xl md:text-4xl font-extrabold">24/7</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-white/80">Control Room & Dispatch</div>
          </div>
        </div>
      </div>
    </section>
  );
}
