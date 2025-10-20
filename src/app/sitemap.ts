// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Your website's base URL
  const base = "https://molalesecurity.com";

  // An array of all your site's paths
  const paths = [
    "", // This represents the homepage
    "services",
    "services/armed-response",
    "services/physical-guarding",
    "services/vip-protection",
    "services/cctv-alarms",
    "services/screening",
    "services/private-investigations",
    "services/training",
    "locations/orkney",
    "locations/klerksdorp",
    "locations/north-west",
    "contact",
  ];

  // Map the paths to the required sitemap format
  return paths.map((p) => ({
    url: `${base}/${p}`,
    lastModified: new Date(),
    // You can also add these optional fields if you want
    // changeFrequency: 'monthly',
    // priority: 0.8,
  }));
}