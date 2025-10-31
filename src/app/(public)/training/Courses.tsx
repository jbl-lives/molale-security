// src/app/training/Courses.tsx
// (No "use client" needed, as it's server-side with links)

import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Courses() {
  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
    include: { starts: { orderBy: { date: "asc" } } },
  });

  if (!courses.length) {
    return (
      <section className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Available Courses & Dates</h2>
        <p className="mt-4 text-gray-700">
          No courses published yet.{" "}
          <Link href="/admin" className="text-[var(--color-primary)] underline">Sign in to Admin</Link> to add courses.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Available Courses & Dates</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <article key={c.id} className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <div className="relative h-48">
              <Image src="/assets/images/training.jpg" alt={c.title} fill className="object-cover rounded-t-2xl" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="rounded-xl bg-black/35 backdrop-blur-md ring-1 ring-white/25 px-4 py-3 text-white">
                  <h3 className="truncate text-lg font-semibold">{c.title}</h3>
                  <p className="mt-0.5 line-clamp-1 text-sm text-white/85">
                    {c.level} • {c.duration} {c.code ? `• ${c.code}` : ""}
                  </p>
                </div>
                {c.price && (
                  <span className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900">
                    {c.price}
                  </span>
                )}
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-700 line-clamp-3">{c.blurb}</p>
              <div className="mt-4">
                <div className="text-sm font-medium text-gray-900">Upcoming starts</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {c.starts.length ? (
                    c.starts.map((s) => (
                      <span key={s.id} className="rounded-full border px-3 py-1 text-xs text-gray-700">
                        {s.date.toISOString().slice(0, 10)}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-500">Dates TBA</span>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <Link href={`/courses/${c.slug}`} className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black transition-colors">
                  View & Apply
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}