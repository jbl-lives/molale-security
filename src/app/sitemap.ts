import type { MetadataRoute } from "next";
import { servicesFancy } from "@/data/services";

const base = "https://www.molalesecurity.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${base}/`,         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/contact`,  lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/training`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/training/security`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/training/k9`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/training/specialized`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...servicesFancy.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
