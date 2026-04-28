import { MetadataRoute } from "next";
import { SEO_SITE } from "@/lib/seo";

const disallowedRoutes = [
  "/mx/api/",
  "/mx/administrar-enrutador",
  "/mx/env-debug",
  "/mx/test-implementation-afs",
  "/mx/utm-test",
  "/mx/campana-quiz",
  "/mx/campana-quiz-short",
  "/mx/quiz-2",
  "/mx/enrutador",
  "/mx/recomendador-de-tarjetas-de-credito-p1",
  "/mx/recomendador-de-tarjetas-de-credito-p2",
  "/mx/recomendador-de-tarjetas-de-credito-p3",
  "/mx/recomendador-de-prestamos-personales-p1",
  "/mx/invit-recomendador-tarjetas-mx",
  "/mx/descarga-guia-financiera",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/mx/",
        disallow: disallowedRoutes,
      },
      { userAgent: "GPTBot", allow: "/mx/" },
      { userAgent: "ChatGPT-User", allow: "/mx/" },
      { userAgent: "ClaudeBot", allow: "/mx/" },
      { userAgent: "Claude-Web", allow: "/mx/" },
      { userAgent: "anthropic-ai", allow: "/mx/" },
      { userAgent: "PerplexityBot", allow: "/mx/" },
      { userAgent: "YouBot", allow: "/mx/" },
      { userAgent: "cohere-ai", allow: "/mx/" },
      { userAgent: "Googlebot", allow: "/mx/" },
      { userAgent: "Bingbot", allow: "/mx/" },
    ],
    sitemap: `${SEO_SITE.baseUrl}/sitemap.xml`,
  };
}
