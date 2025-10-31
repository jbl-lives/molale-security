// src/lib/forms.ts
export function normalizePrice(input: string): string {
  // keep what user typed, but strip leading/trailing spaces
  // (your schema stores price as TEXT like "R4,500")
  return input.trim();
}
