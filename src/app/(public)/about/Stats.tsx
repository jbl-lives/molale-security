// src/components/about/Stats.tsx
import { stats } from "@/data/company";

export default function Stats() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 border-y">
    <div className="mx-auto max-w-screen-xl px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">At a Glance</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="p-6 rounded-xl bg-white text-center shadow-md">
            <div className="text-3xl font-extrabold text-[var(--color-primary)]">{s.value}</div>
            <div className="mt-1 text-gray-700">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
