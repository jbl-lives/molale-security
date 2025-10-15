"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useApplyDialog } from "./ApplyDialogProvider";

export default function TrainingHero() {
  const { openWithCourse } = useApplyDialog();

  return (
    <section className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
      <div>
        <h1 className="text-4xl md:text-6xl mb-4 font-bold tracking-tight text-gray-700">
          Our <span className="text-[var(--color-primary)]">Training Academy</span>
        </h1>
      </div>

      <div className="mt-6">
        <div className="relative overflow-hidden rounded-xl bg-gray-200 shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
          <Image
            src="/assets/images/classroom.jpeg"
            alt="Training and operations"
            width={1600}
            height={800}
            priority
            className="h-[42svh] w-full object-cover md:h-[52svh]"
          />

          {/* glass banner */}
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 md:left-6 md:right-6">
            <div className="relative rounded-2xl bg-black/35 backdrop-blur-md text-white px-4 py-3 md:px-6 md:py-4">
              <span className="absolute -top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-gray-900">
                TRAINING
              </span>
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-sm md:text-base font-semibold">
                    Grades E • D • C • Control Room • Site Etiquette • Incident Reporting
                  </div>
                  <p className="mt-0.5 line-clamp-1 text-xs md:text-sm text-white/85">
                    PSIRA-aligned content • Qualified instructors • Real-world scenarios
                  </p>
                </div>

                {/* IMPORTANT: button, not Link */}
                <button
                  type="button"
                  onClick={() => openWithCourse()}
                  className="pointer-events-auto grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
                  aria-label="Apply now"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
