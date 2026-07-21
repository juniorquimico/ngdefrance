import type { MetadataRoute } from "next";
import { ecosystemRoutes, institutionalRoutes } from "@/config/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ngdefrance.com.br";
  const routes = [...institutionalRoutes, ...ecosystemRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route.href === "/" ? "" : route.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.href === "/" ? 1 : 0.7,
  }));
}
