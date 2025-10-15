// src/app/sitemap.ts
import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://molalesecurity.com";
  const paths = [
    "", "services", "services/armed-response", "services/physical-guarding",
    "services/vip-protection", "services/cctv-alarms", "services/screening",
    "services/private-investigations", "services/training",
    "locations/orkney", "locations/klerksdorp", "locations/north-west",
    "contact"
  ];
  return paths.map((p) => ({ url: `${base}/${p}`, lastModified: new Date() }));
}

// src/app/robots.txt/route.ts
export async function GET() {
  return new Response(
`User-agent: *
Allow: /
Sitemap: https://molalesecurity.com/sitemap.xml`,
    { headers: { "Content-Type": "text/plain" } }
  );
}
