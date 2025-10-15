// src/app/loading.tsx
export default function GlobalLoading() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6 py-10 md:py-14">
      <div className="grid gap-6 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-2xl bg-gray-200/70 dark:bg-white/10 h-40"
          />
        ))}
      </div>
    </div>
  );
}
