"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
import { Play } from "lucide-react";

type Props = {
  preselectedCourse?: string;
  onSubmitted?: () => void;
};

const courseOptions = [
  "Grade E (Basic Security)",
  "Grade D (Access Control)",
  "Grade C (Asset Protection)",
  "Control Room Operator",
];

export default function ApplyForm({ preselectedCourse, onSubmitted }: Props) {
  const [course, setCourse] = useState(preselectedCourse ?? "");

  useEffect(() => {
    setCourse(preselectedCourse ?? "");
  }, [preselectedCourse]);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // TODO: send to API / email service
    alert("Thanks! We’ll confirm your seat shortly.");
    onSubmitted?.();
  }, [onSubmitted]);

  const field =
    "mt-1 w-full rounded-xl bg-white text-gray-900 placeholder-gray-500 " +
    "px-4 py-3 outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-[var(--color-primary)]/60";

  const hint = "mt-1 text-xs text-gray-600";

  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="text-sm font-medium text-gray-900" htmlFor="name">Full name</label>
        <input id="name" name="name" required placeholder="e.g. Thabo Molale" className={field} />
        <p className={hint}>This must match your ID for certificate purposes.</p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900" htmlFor="phone">Phone</label>
        <input id="phone" name="phone" required placeholder="e.g. 073 123 4567" className={field} />
        <p className={hint}>We’ll confirm seat & WhatsApp you the joining instructions.</p>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900" htmlFor="email">Email (optional)</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" className={field} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-900" htmlFor="course">Course</label>
          <select
            id="course" name="course"
            value={course} onChange={(e) => setCourse(e.target.value)}
            className={field}
          >
            <option value="" disabled>Select a course</option>
            {courseOptions.map((c) => (
              <option key={c} value={c} className="text-gray-900">{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-900" htmlFor="start">Preferred start date</label>
          <input id="start" name="start" type="date" min={todayISO} className={field} />
          <p className={hint}>Pick a date from the schedule or your earliest availability.</p>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900" htmlFor="message">Notes (optional)</label>
        <textarea id="message" name="message" rows={4} placeholder="Anything we should know? Previous grades, availability, etc." className={field} />
      </div>

      <div className="flex items-start gap-3 text-gray-800">
        <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-400 text-[var(--color-primary)]" />
        <label htmlFor="consent" className="text-sm leading-5">
          I agree to be contacted about my application. We do not share personal information.
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white
                   px-5 py-2.5 font-semibold shadow hover:bg-black transition"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
          <Play className="h-3.5 w-3.5" />
        </span>
        Submit application
      </button>
    </form>
  );
}
