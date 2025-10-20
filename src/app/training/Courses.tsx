"use client";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { courses } from "@/data/courses";
import { useApplyDialog } from "./ApplyDialogProvider";

export default function Courses() {
  const { openWithCourse } = useApplyDialog();

  return (
    <section className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Available Courses & Dates</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {courses.map((c, idx) => (
          <article
            key={c.id}
            className="group relative overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,.06)] ring-1 ring-black/5"
          >
            <div className="relative h-48">
              <Image
                src={c.img ?? "/assets/images/training2.jpg"}
                alt={c.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={idx < 2}
              />
              {/* glass tag... unchanged */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="rounded-xl bg-black/35 backdrop-blur-md ring-1 ring-white/25 px-4 py-3 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold">{c.title}</h3>
                      <p className="mt-0.5 line-clamp-1 text-sm text-white/85">
                        {c.level} • {c.duration} {c.code ? `• ${c.code}` : ""}
                      </p>
                    </div>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                      {c.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <p className="text-gray-700">{c.blurb}</p>
              {/* dates ... */}

              <div className="mt-5 flex items-center gap-3">
                {/* IMPORTANT: button, not Link */}
                <button
                  type="button"
                  onClick={() => openWithCourse(c.title)}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black transition"
                >
                  Apply
                </button>

                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs text-[var(--color-primary)]">
                  <BadgeCheck className="h-3.5 w-3.5" /> Limited seats
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
