// src/app/admin/courses/new/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CourseDatesPicker from "../CourseDatesPicker";
import { Button } from "@/components/ui/button";

export default function NewCourseForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    code: "",
    level: "",
    duration: "",
    price: "",
    blurb: "",
  });
  const [dates, setDates] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.title || !form.level || !form.duration || !form.price || !form.blurb || dates.length === 0) {
      setError("Please complete all required fields, including at least one start date.");
      return;
    }

    const payload = {
      title: form.title.trim(),
      code: form.code.trim() || null,
      level: form.level.trim(),
      duration: form.duration.trim(),
      price: form.price.trim(),
      blurb: form.blurb.trim(),
      starts: dates,
    };

    try {
      setSaving(true);
      const res = await fetch("/api/admin/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ← SEND THE TOKEN
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to create course");
      }

      router.push("/admin/courses?created=1");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>

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
              placeholder="PSIRA Grade E"
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Level *</label>
            <input
              value={form.level}
              onChange={(e) => setForm({ ...form, level: e.target.value })}
              required
              placeholder="Entry"
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Duration *</label>
            <input
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              required
              placeholder="3 days"
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
            placeholder="R1,450"
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

        {/* Start Dates */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Start Dates *</label>
          <p className="text-xs text-gray-500 mb-2">Add one or more intake dates.</p>
          <CourseDatesPicker value={dates} onChange={setDates} />
        </div>

        {/* Error & Submit */}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Create Course"}
        </Button>
      </form>
    </main>
  );
}

NewCourseForm.displayName = "Create Course";