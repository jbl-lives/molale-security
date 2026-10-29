import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const host = "https://www.molalesecurity.co.za";
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api", "/login"] }],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
