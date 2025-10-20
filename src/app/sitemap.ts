import type { MetadataRoute } from "next";
const base = "https://molalesecurity.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`,         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contact`,  lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${base}/training`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
  ];
}
