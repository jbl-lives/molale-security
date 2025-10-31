// src/app/admin/courses/[slug]/edit/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { use } from "react"; // ← Import React.use
import CourseDatesPicker from "../../CourseDatesPicker";
import { Button } from "@/components/ui/button";

type Course = {
  id: string;
  title: string;
  code: string | null;
  level: string;
  duration: string;
  price: string;
  blurb: string;
  starts: { id: string; date: string }[];
};

// Accept params as Promise
export default function EditCourseForm({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params); // ← Unwrap with React.use()

  const [course, setCourse] = useState<Course | null>(null);
  const [form, setForm] = useState({
    title: "",
    code: "",
    level: "",
    duration: "",
    price: "",
    blurb: "",
  });
  const [dates, setDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN;

  // Load course when slug is ready
  useEffect(() => {
    if (!slug) return;

    async function load() {
      try {
        const res = await fetch(`/api/admin/courses?slug=${slug}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to load course");
        const data = await res.json();
        setCourse(data);
        setForm({
          title: data.title,
          code: data.code || "",
          level: data.level,
          duration: data.duration,
          price: data.price,
          blurb: data.blurb,
        });
        setDates(data.starts.map((s: any) => s.date.split("T")[0]));
      } catch {
        setError("Course not found");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug, token]);

  // Submit
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!course) return;

    try {
      setSaving(true);
      const res = await fetch("/api/admin/courses", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: course.id,
          title: form.title.trim(),
          code: form.code.trim() || null,
          level: form.level.trim(),
          duration: form.duration.trim(),
          price: form.price.trim(),
          blurb: form.blurb.trim(),
          starts: dates,
        }),
      });

      if (!res.ok) throw new Error(await res.text());

      router.push("/admin/courses/list?updated=1");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <p className="text-center py-10">Loading course...</p>;
  if (error && !course) return <p className="text-red-600 text-center">{error}</p>;

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Edit: {course?.title}</h1>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Title *</label>
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Code, Level, Duration */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">Code</label>
            <input
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Level *</label>
            <input
              value={form.level}
              onChange={(e) => setForm({ ...form, level: e.target.value })}
              required
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Duration *</label>
            <input
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              required
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Price *</label>
          <input
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Blurb */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Description *</label>
          <textarea
            value={form.blurb}
            onChange={(e) => setForm({ ...form, blurb: e.target.value })}
            required
            rows={4}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Dates */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Start Dates *</label>
          <CourseDatesPicker value={dates} onChange={setDates} />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="flex gap-3">
          <Button type="submit" disabled={saving}>
            {saving ? "Saving..." : "Update Course"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/admin/courses/list")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </main>
  );
}

EditCourseForm.displayName = "Edit Course";