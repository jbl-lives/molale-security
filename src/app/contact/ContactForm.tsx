"use client";

import { Play } from "lucide-react";
import { useCallback } from "react";

export default function ContactForm() {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // TODO: send fd to your API / email service
    // For now, just log:
    console.log(Object.fromEntries(fd.entries()));
    alert("Thanks! We’ll get back to you shortly.");
  }, []);

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label className="text-sm text-gray-700 text-bold opacity-90">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="mt-1 w-full rounded-xl bg-white/95 text-gray-500 placeholder-white/70
                     px-4 py-3 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white/70"
          required
        />
      </div>

      <div>
        <label className="text-sm text-gray-700 opacity-90">Phone</label>
        <input
          name="phone"
          type="tel"
          placeholder="Your phone number"
          className="mt-1 w-full rounded-xl bg-white/95 text-gray-500 placeholder-white/70
                     px-4 py-3 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white/60"
          required
        />
      </div>

      <div>
        <label className="text-sm text-gray-700 opacity-90">Email (optional)</label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="mt-1 w-full rounded-xl bg-white/95 text-gray-500 placeholder-white/70
                     px-4 py-3 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white/60"
        />
      </div>

      <div>
        <label className="text-sm text-gray-700 opacity-90">Choose services</label>
        <select
          name="service"
          className="mt-1 w-full rounded-xl bg-white/95 text-gray-500
                     px-4 py-3 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white/60"
          defaultValue=""
        >
          <option value="" disabled className="bg-[var(--color-primary)]">
            Select a service
          </option>
          <option>Armed Response</option>
          <option>Physical Guarding</option>
          <option>VIP Protection</option>
          <option>CCTV & Alarms</option>
          <option>Screening</option>
          <option>Private Investigations</option>
        </select>
      </div>

      <div>
        <label className="text-sm text-gray-700 opacity-90">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us briefly what you need…"
          className="mt-1 w-full rounded-xl bg-white/95 text-gray-500 placeholder-white/70
                     px-4 py-3 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-white/60"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-white text-[var(--color-primary)]
                   px-5 py-2.5 font-semibold shadow hover:shadow-md transition"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--color-primary)] text-white">
          <Play className="h-3.5 w-3.5" />
        </span>
        Submit
      </button>
    </form>
  );
}
