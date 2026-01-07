import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://topfinanzas.com/mx";

  // 1. Static Routes (Manual Priority List)
  const staticRoutes = [
    "", // Home
    "/blog",
    "/contactanos",
    "/nosotros",
    "/prestamos",
    "/tarjetas",
    "/politica-privacidad",
    "/politica-de-cookies",
    "/terminos-y-condiciones-de-uso",
    // Campaign & Funnels
    "/recomendador-de-tarjetas-de-credito-p1",
    "/recomendador-de-tarjetas-de-credito-p2",
    "/recomendador-de-tarjetas-de-credito-p3",
    "/recomendador-de-prestamos-personales-p1",
    // Quizzes & Landing
    "/campana-quiz",
    "/quiz-2",
    "/descarga-guia-financiera",
    "/invit-recomendador-tarjetas-mx",
    // Category Hubs
    "/finanzas-personales",
    "/soluciones-financieras",
  ];

  // 2. Discover File System Routes for Content Directories
  // This ensures strict alignment with active routing topology
  const appDir = path.join(process.cwd(), "app");

  const getSubRoutes = (dirName: string) => {
    const dirPath = path.join(appDir, dirName);
    try {
      if (!fs.existsSync(dirPath)) return [];

      const entries = fs.readdirSync(dirPath, { withFileTypes: true });

      return entries
        .filter((entry) => {
          if (!entry.isDirectory()) return false;
          // Exclude dynamic routes ([slug]) and internal folders starting with _ or .
          if (
            entry.name.startsWith("[") ||
            entry.name.startsWith("_") ||
            entry.name.startsWith(".")
          )
            return false;

          // Check if it has a page.tsx to confirm it's a route
          const pagePath = path.join(dirPath, entry.name, "page.tsx");
          return fs.existsSync(pagePath);
        })
        .map((entry) => `/${dirName}/${entry.name}`);
    } catch (error) {
      console.error(`Error reading directory ${dirName}:`, error);
      return [];
    }
  };

  const finanzasRoutes = getSubRoutes("finanzas-personales");
  const solucionesRoutes = getSubRoutes("soluciones-financieras");
  const tarjetasRoutes = getSubRoutes("tarjetas"); // Checking if 'tarjetas' has sub-routes from inventory

  const allRoutes = [
    ...staticRoutes,
    ...finanzasRoutes,
    ...solucionesRoutes,
    ...tarjetasRoutes,
  ];

  return allRoutes.map((route) => {
    // Determine priority based on route type
    let priority = 0.7;
    let changeFrequency: "weekly" | "monthly" | "yearly" = "monthly";

    if (route === "") {
      // Home
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (
      [
        "/finanzas-personales",
        "/soluciones-financieras",
        "/tarjetas",
        "/blog",
      ].includes(route)
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route.includes("recomendador") || route.includes("quiz")) {
      priority = 0.8;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: changeFrequency,
      priority: priority,
    };
  });
}
