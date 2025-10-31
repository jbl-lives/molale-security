// src/app/admin/courses/CourseDatesPicker.tsx
"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { X, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

type Props = {
  value: string[];                  // ISO dates already selected
  onChange: (isoDates: string[]) => void;
};

export default function CourseDatesPicker({ value, onChange }: Props) {
  const [selected, setSelected] = React.useState<Date | undefined>(undefined);

  function addSelected() {
    if (!selected) return;
    const iso = selected.toISOString().slice(0, 10); // YYYY-MM-DD
    if (!value.includes(iso)) onChange([...value, iso].sort());
    setSelected(undefined);
  }

  function removeDate(iso: string) {
    onChange(value.filter(d => d !== iso));
  }

  return (
    <div className="space-y-3">
      <div className="flex items-start gap-4">
        <div className="rounded-md border p-2">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={setSelected}
            initialFocus
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button type="button" variant="default" onClick={addSelected} disabled={!selected}>
            <CalendarIcon className="mr-2 h-4 w-4" /> Add date
          </Button>

          <div className="text-xs text-gray-600">
            Pick a date on the calendar, then click “Add date”. Repeat for
            multiple intakes.
          </div>
        </div>
      </div>

      {!!value.length && (
        <div className="flex flex-wrap gap-2">
          {value.map(iso => (
            <span
              key={iso}
              className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm"
              title={iso}
            >
              {format(new Date(iso), "yyyy-MM-dd")}
              <button
                type="button"
                onClick={() => removeDate(iso)}
                className="ml-1 rounded-full p-0.5 hover:bg-gray-200"
                aria-label={`Remove ${iso}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
