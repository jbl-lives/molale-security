// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { servicesFancy } from "@/data/services"; // optional: remove if you don’t want service URLs

const base = "https://molalesecurity.com"; // set your prod domain

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`,              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`,      lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contact`,       lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${base}/training`,      lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
  ];

  // Optional: include detail pages for each service
  const serviceRoutes: MetadataRoute.Sitemap = servicesFancy.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
