import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth", "/dashboard", "/verify"],
    },
    sitemap: "https://www.loewenmonteur.de/sitemap.xml",
  };
}
