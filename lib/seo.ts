import type { Metadata } from "next";
import {
  ROUTE_SEO_REGISTRY,
  type RouteSeoEntry,
} from "@/lib/seo-route-registry";

export const SEO_SITE = {
  name: "Top Finanzas MX",
  legalName: "TopNetworks Inc.",
  baseUrl: "https://topfinanzas.com/mx",
  rootUrl: "https://topfinanzas.com",
  locale: "es_MX",
  language: "es-MX",
  defaultTitle: "Top Finanzas México | Decide sabiamente, vive plenamente",
  titleTemplate: "%s | Top Finanzas MX",
  description:
    "Guía financiera líder en México. Consejos expertos sobre tarjetas de crédito, préstamos y finanzas personales.",
  defaultImage: "https://media.topfinanzas.com/images/placeholder-image.webp",
  logo: "https://media.topfinanzas.com/images/logo-spanish.webp",
  socialProfiles: [
    "https://www.linkedin.com/company/top-networks-inc",
    "https://www.instagram.com/topfinanzas/",
  ],
} as const;

type SchemaValue = Record<string, unknown>;

export function absoluteUrl(pathname = "") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SEO_SITE.baseUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function stripBrandSuffix(title: string) {
  return title
    .replace(/\s*\|\s*Top\s*Finanzas(?:\s*MX| México)?\s*$/i, "")
    .replace(/\s*\|\s*TopFinanzas\s*$/i, "")
    .trim();
}

function titleFromSlug(pathname: string) {
  const slug = pathname.split("/").filter(Boolean).pop() ?? "";
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function categoryFromPath(pathname: string): RouteSeoEntry["category"] {
  return pathname.includes("/soluciones-financieras/")
    ? "soluciones-financieras"
    : "finanzas-personales";
}

function inferContentType(
  pathname: string,
  title: string,
): RouteSeoEntry["contentType"] {
  const haystack = `${pathname} ${title}`.toLowerCase();
  if (
    haystack.includes("tarjeta") ||
    haystack.includes("credit") ||
    haystack.includes("crédito")
  ) {
    return "credit-card";
  }

  if (haystack.includes("prestamo") || haystack.includes("préstamo")) {
    return "loan";
  }

  return categoryFromPath(pathname) === "soluciones-financieras"
    ? "financial-product"
    : "article";
}

export function getRouteSeo(pathname: string): RouteSeoEntry {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const found = ROUTE_SEO_REGISTRY[normalizedPath];

  if (found) {
    return found;
  }

  const title = titleFromSlug(normalizedPath);

  return {
    pathname: normalizedPath,
    title,
    description: `${title} en Top Finanzas MX: guía clara para tomar mejores decisiones financieras en México.`,
    image: SEO_SITE.defaultImage,
    category: categoryFromPath(normalizedPath),
    contentType: inferContentType(normalizedPath, title),
  };
}

export function createRouteMetadata(pathname: string): Metadata {
  const route = getRouteSeo(pathname);
  const canonical = absoluteUrl(route.pathname);
  const title = stripBrandSuffix(route.title);
  const image = route.image || SEO_SITE.defaultImage;

  return {
    title: {
      absolute: `${title} | Top Finanzas MX`,
    },
    description: route.description,
    alternates: {
      canonical,
      languages: {
        [SEO_SITE.language]: canonical,
      },
    },
    openGraph: {
      title,
      description: route.description,
      url: canonical,
      siteName: SEO_SITE.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — ${SEO_SITE.name}`,
        },
      ],
      locale: SEO_SITE.locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: route.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function generateOrganizationSchema(): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_SITE.name,
    legalName: SEO_SITE.legalName,
    url: SEO_SITE.baseUrl,
    logo: SEO_SITE.logo,
    sameAs: SEO_SITE.socialProfiles,
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@topfinanzas.com",
      availableLanguage: ["Spanish", "es-MX"],
    },
  };
}

export function generateWebSiteSchema(): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_SITE.name,
    url: SEO_SITE.baseUrl,
    inLanguage: SEO_SITE.language,
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SEO_SITE.logo,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SEO_SITE.baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(route: RouteSeoEntry): SchemaValue {
  const categoryName =
    route.category === "soluciones-financieras"
      ? "Soluciones Financieras"
      : "Finanzas Personales";
  const categoryPath =
    route.category === "soluciones-financieras"
      ? "/soluciones-financieras"
      : "/finanzas-personales";
  const title = stripBrandSuffix(route.title);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SEO_SITE.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: absoluteUrl(categoryPath),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: absoluteUrl(route.pathname),
      },
    ],
  };
}

export function generateArticleSchema(route: RouteSeoEntry): SchemaValue {
  const title = stripBrandSuffix(route.title);
  const canonical = absoluteUrl(route.pathname);
  const image = route.image || SEO_SITE.defaultImage;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: route.description,
    image,
    url: canonical,
    inLanguage: SEO_SITE.language,
    datePublished: route.date ?? "2026-01-01",
    dateModified: route.date ?? "2026-01-01",
    author: {
      "@type": "Organization",
      name: SEO_SITE.name,
      url: SEO_SITE.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SEO_SITE.name,
      logo: {
        "@type": "ImageObject",
        url: SEO_SITE.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

export function generateFinancialProductSchema(
  route: RouteSeoEntry,
): SchemaValue {
  const title = stripBrandSuffix(route.title);
  const canonical = absoluteUrl(route.pathname);
  const image = route.image || SEO_SITE.defaultImage;
  const schemaType =
    route.contentType === "credit-card"
      ? "CreditCard"
      : route.contentType === "loan"
        ? "LoanOrCredit"
        : "FinancialProduct";

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: title,
    description: route.description,
    url: canonical,
    image,
    category:
      route.contentType === "credit-card"
        ? "Tarjeta de crédito"
        : route.contentType === "loan"
          ? "Préstamo personal"
          : "Producto financiero",
    provider: {
      "@type": "Organization",
      name: SEO_SITE.name,
      url: SEO_SITE.baseUrl,
    },
    offers: {
      "@type": "Offer",
      url: canonical,
      availability: "https://schema.org/InStock",
      priceCurrency: "MXN",
      description: route.description,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

export function createRouteStructuredData(pathname: string): SchemaValue[] {
  const route = getRouteSeo(pathname);
  const primarySchema =
    route.category === "soluciones-financieras"
      ? generateFinancialProductSchema(route)
      : generateArticleSchema(route);

  return [generateBreadcrumbSchema(route), primarySchema];
}

export function getIndexableRoutes() {
  return Object.values(ROUTE_SEO_REGISTRY).filter(
    (route) =>
      route.pathname.startsWith("/soluciones-financieras/") ||
      route.pathname.startsWith("/finanzas-personales/"),
  );
}
