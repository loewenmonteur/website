import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://loewentrafo.de";
  
  const routes = [
    "",
    "/explore/handwerk",
    "/explore/bodybuilding",
    "/explore/trafo",
    "/impressum",
    "/datenschutz",
    "/agb",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
