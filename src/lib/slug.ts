// src/lib/slug.ts
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // collapse non-alphanumerics to dashes
    .replace(/^-+|-+$/g, "");    // trim leading/trailing dashes
}
