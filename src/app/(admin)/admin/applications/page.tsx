// src/app/admin/page.tsx
import Link from "next/link";
import { prisma } from "@/lib/prisma";

async function getStats() {
  const [courseCount, applicationCount] = await Promise.all([
    prisma.course.count(),
    prisma.application.count(),
  ]);
  return { courseCount, applicationCount };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-8 text-gray-700">
        Courses: {stats.courseCount} | Applications: {stats.applicationCount}
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href="/admin/courses"
          className="rounded-lg border p-6 hover:bg-gray-50 transition-shadow"
        >
          Manage Courses
        </Link>
        <Link
          href="/admin/applications"
          className="rounded-lg border p-6 hover:bg-gray-50 transition-shadow"
        >
          View Applications
        </Link>
        <form action="/api/admin/logout" method="post">
          <button className="w-full rounded-lg border p-6 hover:bg-gray-50 transition-shadow text-left">
            Sign Out
          </button>
        </form>
      </div>
    </main>
  );
}