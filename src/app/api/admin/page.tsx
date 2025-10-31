// src/app/admin/page.tsx
import Link from "next/link";

export default function AdminHome() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 py-10">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Link href="/admin/courses" className="rounded-lg border p-6 hover:bg-gray-50">Manage Courses</Link>
        <Link href="/admin/applications" className="rounded-lg border p-6 hover:bg-gray-50">View Applications</Link>
        <form action="/api/admin/logout" method="post">
          <button className="rounded-lg border p-6 hover:bg-gray-50 w-full text-left">Sign Out</button>
        </form>
      </div>
    </main>
  );
}
