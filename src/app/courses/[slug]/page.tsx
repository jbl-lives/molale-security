import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ApplyForm from "../../(public)/training/ApplyForm";
import Image from "next/image";
import { Calendar, Shield, Award } from "lucide-react";

type CourseRouteParams = { slug: string };
type CourseParamsPromise = Promise<CourseRouteParams>;

export async function generateMetadata(props: { params: CourseParamsPromise }) {
  const { slug } = await props.params;

  const course = await prisma.course.findUnique({
    where: { slug },
  });

  if (!course) return { title: "Course Not Found | Molale Security" };
  return { 
    title: `${course.title} | Molale Security Academy`,
    description: course.blurb || "Professional security training course." 
  };
}

export default async function CoursePage(props: { params: CourseParamsPromise }) {
  const { slug } = await props.params;

  const course = await prisma.course.findUnique({
    where: { slug },
    include: { starts: { orderBy: { date: "asc" } } },
  });

  if (!course) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Course Card Container */}
        <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          
          {/* Hero Banner */}
          <div className="relative h-72 md:h-96 w-full overflow-hidden">
            <Image
              src="/assets/images/training.jpg"
              alt={course.title}
              fill
              priority
              className="object-cover opacity-40 grayscale"
            />
            {/* Standard gradient syntax for Tailwind */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/30 text-[#D4A017] text-[10px] font-black uppercase tracking-widest">
                  {course.code || "ACADEMY"}
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {course.level}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                {course.title}
              </h1>
              <p className="mt-2 text-sm md:text-base text-slate-300 font-medium">
                Duration: {course.duration}
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Column: Overview & Schedules */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#D4A017]" /> Course Overview
                  </h2>
                  <p className="text-slate-400 leading-relaxed text-base">
                    {course.blurb}
                  </p>
                </div>

                {course.price && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Investment</span>
                    <span className="text-2xl font-black text-[#D4A017]">
                      {course.price}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#D4A017]" /> Scheduled Intakes
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {course.starts && course.starts.length > 0 ? (
                      course.starts.map((s) => (
                        <span
                          key={s.id}
                          className="inline-flex items-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-4 py-2 text-xs font-bold text-white uppercase tracking-wider"
                        >
                          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                          {new Date(s.date).toLocaleDateString("en-ZA")}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500 italic">No public dates currently scheduled. Apply below to request enrollment.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Apply Form */}
              <div className="lg:col-span-5 bg-slate-950 p-8 rounded-3xl border border-white/10 shadow-xl">
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4A017] block mb-1">Direct Registration</span>
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    Apply for this Intake
                  </h2>
                </div>
                <ApplyForm preselectedCourse={course.title} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}