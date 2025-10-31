// src/app/admin/courses/page.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
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
  starts: { date: Date }[];
  applications: { id: string }[];
};

export default function CoursesList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/courses", {
      headers: { Authorization: `Bearer ${process.env.ADMIN_TOKEN}` },
    })
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function deleteCourse(id: string) {
    if (!confirm("Delete this course?")) return;
    await fetch(`/api/admin/courses?id=${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${process.env.ADMIN_TOKEN}` },
    });
    setCourses(courses.filter(c => c.id !== id));
  }

  if (loading) return <p>Loading...</p>;

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
      <Link href="/admin/courses/new"><Button>New Course</Button></Link>
      <ul className="space-y-4 mt-6">
        {courses.map(course => (
          <li key={course.id} className="border p-4 rounded">
            <h2>{course.title} ({course.code})</h2>
            <p>Students Applied: {course.applications.length}</p>
            <Link href={`/admin/courses/${course.slug}/edit`} className="text-blue-600">Edit</Link>
            <Button variant="destructive" onClick={() => deleteCourse(course.id)} className="ml-4">Delete</Button>
          </li>
        ))}
      </ul>
    </main>
  );
}