import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loewentrafo.de";
  
  const routes = [
    "",
    "/explore/handwerk",
    "/explore/bodybuilding",
    "/explore/trafo",
    "/impressum",
    "/datenschutz",
    "/agb",
  ].map((route) => {
    const priority = route === "" ? 1 : 
                    route.includes("/explore") ? 0.9 : 
                    0.5;

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: priority,
    };
  });

  return routes;
}
