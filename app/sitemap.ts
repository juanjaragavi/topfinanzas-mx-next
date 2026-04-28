import { MetadataRoute } from "next";
import { absoluteUrl, getIndexableRoutes, SEO_SITE } from "@/lib/seo";

const staticRoutes = [
  { pathname: "", priority: 1.0, changeFrequency: "weekly" as const },
  {
    pathname: "/blog",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    pathname: "/finanzas-personales",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    pathname: "/soluciones-financieras",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    pathname: "/tarjetas",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    pathname: "/prestamos",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    pathname: "/nosotros",
    priority: 0.5,
    changeFrequency: "yearly" as const,
  },
  {
    pathname: "/contactanos",
    priority: 0.4,
    changeFrequency: "yearly" as const,
  },
  {
    pathname: "/politica-privacidad",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    pathname: "/politica-de-cookies",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    pathname: "/terminos-y-condiciones-de-uso",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

function parseLastModified(date?: string) {
  if (!date) return new Date();
  const parsed = new Date(date);

  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const contentRoutes = getIndexableRoutes();

  return [
    ...staticRoutes.map((route) => ({
      url:
        route.pathname === "" ? SEO_SITE.baseUrl : absoluteUrl(route.pathname),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...contentRoutes.map((route) => ({
      url: absoluteUrl(route.pathname),
      lastModified: parseLastModified(route.date),
      changeFrequency: "monthly" as const,
      priority: route.category === "soluciones-financieras" ? 0.8 : 0.7,
    })),
  ];
}
