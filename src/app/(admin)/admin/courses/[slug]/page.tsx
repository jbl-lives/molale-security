// src/app/courses/[slug]/page.tsx
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ApplyForm from "@/app/(public)/training/ApplyForm"; // Adjust path if needed
import Image from "next/image";
import { use } from "react"; // ← Import React.use

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ← Unwrap Promise
  const course = await prisma.course.findUnique({
    where: { slug },
  });
  if (!course) return { title: "Course Not Found" };
  return { title: `${course.title} | Molale Security` };
}

export default async function CoursePage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ← Unwrap Promise

  const course = await prisma.course.findUnique({
    where: { slug },
    include: { starts: { orderBy: { date: "asc" } } },
  });

  if (!course) notFound();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Hero */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src="/assets/images/training.jpg"
              alt={course.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
              <p className="mt-2 text-xl opacity-90">
                {course.level} • {course.duration} • {course.code}
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{course.blurb}</p>

                {course.price && (
                  <div className="mt-8 p-6 bg-green-50 rounded-xl">
                    <p className="text-2xl font-bold text-green-800">Course Fee: {course.price}</p>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Upcoming Start Dates</h3>
                  <div className="flex flex-wrap gap-3">
                    {course.starts.length > 0 ? (
                      course.starts.map((s) => (
                        <span
                          key={s.id}
                          className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
                        >
                          {new Date(s.date).toLocaleDateString("en-ZA")}
                        </span>
                      ))
                    ) : (
                      <p className="text-gray-600">Dates to be announced</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Apply Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply Now</h2>
                <ApplyForm preselectedCourse={course.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}