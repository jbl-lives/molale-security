// src/app/admin/courses/list/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

type Course = {
  id: string;
  slug: string;
  title: string;
  code: string | null;
  level: string;
  duration: string;
  price: string;
  blurb: string;
  starts: { date: string }[];
  applications: { id: string }[];
};

export default function CoursesList() {
  const searchParams = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN;

  // Show toast from URL
  useEffect(() => {
    const created = searchParams.get("created");
    const updated = searchParams.get("updated");
    if (created) setToast("Course created successfully!");
    if (updated) setToast("Course updated successfully!");
  }, [searchParams]);

  // Load courses
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/courses", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        setCourses(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [token]);

  // Delete
  async function deleteCourse(id: string) {
    if (!confirm("Delete this course? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/admin/courses?id=${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      setCourses(courses.filter((c) => c.id !== id));
      setToast("Course deleted.");
    } catch {
      alert("Failed to delete");
    }
  }

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* Toast */}
      {toast && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex justify-between">
          <span>{toast}</span>
          <button onClick={() => setToast(null)} className="text-green-600">×</button>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Manage Courses</h1>
        <Link href="/admin/courses/new">
          <Button>Create New Course</Button>
        </Link>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No courses yet.</p>
          <Link href="/admin/courses/new" className="text-(--color-primary) underline mt-2 inline-block">
            Create your first course
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {course.title} {course.code && <span className="text-gray-500">({course.code})</span>}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {course.level} • {course.duration} • {course.price}
                  </p>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-2">{course.blurb}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {course.starts.length > 0 ? (
                      course.starts.map((s, i) => (
                        <span key={i} className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                          {new Date(s.date).toLocaleDateString()}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-gray-500">No dates</span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Applications: <strong>{course.applications.length}</strong>
                  </p>
                  
                </div>

                <div className="flex gap-2 ml-4">
                  <Link href={`/admin/courses/${course.slug}/edit`}>
                    <Button variant="outline" size="sm">Edit</Button>
                  </Link>
                  <Button
                    className="bg-red-600 text-white hover:bg-red-700"
                    size="sm"
                    onClick={() => deleteCourse(course.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

CoursesList.displayName = "Courses";