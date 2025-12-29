"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { CategorySection } from "@/components/ui/category-section"; // Import new component
import { Hero } from "@/components/ui/hero";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Dynamically import components that aren't needed for the initial render
const DynamicPagination = dynamic(
  () => import("@/components/ui/pagination").then((mod) => mod.Pagination),
  {
    ssr: false,
    loading: () => <div className="flex justify-center mt-8 h-10"></div>,
  },
);

// Interface for post frontmatter
interface PostFrontmatter {
  title: string;
  date?: string; // Made date optional
  categories?: Array<{ name: string; slug: string }>;
  featuredImage?: string;
  description: string;
  excerpt?: string;
  [key: string]: unknown;
}

// Interface for post data, matching the structure used in blog archive
interface PostData {
  slug: string;
  frontmatter: PostFrontmatter;
  category: string; // Added category field
  categoryPath: string;
}

// Helper function to clean titles (copied from blog archive)
const cleanTitle = (title: string): string => {
  // Added safety check for undefined/null title
  if (!title) return "Untitled Post";
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

// --- Hardcoded Post Data (Localized for MX) ---
// Using a subset of posts for the homepage, sorted by date descending
const allPosts: PostData[] = [
  {
    slug: "cashback-vs-puntos-que-programa-de-recompensas-te-conviene-mas-para-el-black-friday",
    frontmatter: {
      title:
        "Cashback vs. Puntos: ¿Qué programa de recompensas te conviene más para el Black Friday?",
      description:
        "En esta guía, desglosamos cada opción: Cashback vs. Puntos para que tomes la mejor decisión para tu bolsillo en Black Friday.",
      date: "2025-12-29T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes.png",
      categories: [
        { name: "Finanzas Personales", slug: "finanzas-personales" },
      ],
    },
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "barclaycard-avios-plus",
    frontmatter: {
      title: "Tarjeta de Crédito Premium: Recompensas de Viaje Exclusivas",
      description:
        "La tarjeta ideal para viajeros frecuentes con beneficios premium...",
      date: "2025-10-29T00:00:00Z", // Matching legacy date
      featuredImage:
        "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp", // Keep image for layout
      categories: [
        { name: "Soluciones Financieras", slug: "soluciones-financieras" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
  },
  {
    slug: "hsbc-personal-loan",
    frontmatter: {
      title: "Préstamo Personal HSBC: Financiamiento Flexible (MX)",
      description:
        "Descubre los préstamos personales de HSBC con tasas competitivas...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      categories: [
        { name: "Soluciones Financieras", slug: "soluciones-financieras" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
  },
  {
    slug: "funding-circle-personal-loan",
    frontmatter: {
      title: "Préstamo para Negocios Funding Circle",
      description:
        "Explora los préstamos para negocios de Funding Circle con financiamiento rápido y flexible...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      categories: [
        { name: "Soluciones Financieras", slug: "soluciones-financieras" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
  },
  {
    slug: "how-to-track-your-spending-for-30-days",
    frontmatter: {
      title:
        "Cómo Rasterar tus Gastos por 30 Días y Saber a Dónde Va tu Dinero | Top Finanzas MX",
      description:
        "Deja de adivinar sobre tus finanzas. Aprende un método sencillo de seguimiento de gastos de 30 días para descubrir a dónde va realmente tu dinero y crear hábitos duraderos.",
      date: "2025-12-02T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp",
      categories: [
        { name: "Finanzas Personales", slug: "finanzas-personales" },
      ],
    },
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving",
    frontmatter: {
      title:
        "La Psicología del Gasto: Cómo Detener las Compras Impulsivas | Top Finanzas MX",
      description:
        "Descubra por qué compramos por impulso y aprenda estrategias prácticas para dominar su mentalidad de dinero. Empiece a ahorrar de forma consciente hoy mismo.",
      date: "2025-11-25T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving.webp",
      categories: [
        { name: "Finanzas Personales", slug: "finanzas-personales" },
      ],
    },
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "automate-your-wealth",
    frontmatter: {
      title:
        'Automatiza tu Riqueza: Sistema de Finanzas "Configúralo y Olvídalo" | Top Finanzas MX',
      description:
        'Aprenda cómo automatizar sus finanzas con nuestro sistema "Configúralo y olvídalo". Ahorre tiempo, reduzca el estrés y genere riqueza sin esfuerzo.',
      date: "2025-11-19T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/automate-your-wealth.webp",
      categories: [
        { name: "Finanzas Personales", slug: "finanzas-personales" },
      ],
    },
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "stop-living-paycheck-to-paycheck",
    frontmatter: {
      title:
        "Deja de Vivir de Quincena en Quincena: 3 Cambios para Romper el Ciclo | Top Finanzas MX",
      description:
        "Escapa del ciclo de vivir al día con tres cambios prácticos en el flujo de caja. Aprende cómo las familias están construyendo un respiro sin sacrificios dramáticos.",
      date: "2025-11-13T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
      categories: [
        { name: "Finanzas Personales", slug: "finanzas-personales" },
      ],
    },
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "financial-health-check-where-does-your-money-go",
    frontmatter: {
      title:
        "Chequeo de Salud Financiera: ¿A Dónde se Va tu Dinero? | Top Finanzas MX",
      description:
        "Descubra a dónde va realmente su dinero con nuestro rápido chequeo de salud financiera. Aprenda métodos sencillos de seguimiento que revelan patrones de gasto.",
      date: "2025-11-05T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
      categories: [
        { name: "Finanzas Personales", slug: "finanzas-personales" },
      ],
    },
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    slug: "hidden-costs-of-homeownership",
    frontmatter: {
      title:
        "Los Costos Ocultos de Ser Propietario de una Casa | Top Finanzas MX",
      description:
        "Descubra los gastos inesperados que sorprenden a los propietarios de viviendas. Desde el mantenimiento hasta los seguros, aprenda a presupuestar los costos ocultos.",
      date: "2025-10-28T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
      categories: [
        { name: "Finanzas Personales", slug: "finanzas-personales" },
      ],
    },
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
];

// Reuse posts to populate sections for demo purposes since we have limited hardcoded data
const savingsPosts = [...allPosts, ...allPosts]
  .slice(0, 4)
  .map((p) => ({ ...p, category: "Ahorro inteligente" }));
const debtPosts = [...allPosts, ...allPosts]
  .slice(2, 6)
  .map((p) => ({ ...p, category: "Deuda cero" }));
const cardPosts = [...allPosts, ...allPosts]
  .slice(4, 8)
  .map((p) => ({ ...p, category: "Elige tu tarjeta" }));

// --- End of Hardcoded Data ---

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page for homepage

  // Calculate total pages using useMemo
  const totalPages = useMemo(() => {
    return Math.ceil(allPosts.length / postsPerPage);
  }, [postsPerPage]);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <Hero />

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Latest Articles (Top 3) - Centered/Main */}
          {/* Latest Articles - Custom Layout: Hero (Poster) + 2 Standard Cards */}
          <div className="mb-16">
            {/* We know we have at least 3 posts sorted by date from previous steps */}
            {(() => {
              const sortedPosts = allPosts
                .sort((a, b) => {
                  const dateA = a.frontmatter.date
                    ? new Date(a.frontmatter.date).getTime()
                    : 0;
                  const dateB = b.frontmatter.date
                    ? new Date(b.frontmatter.date).getTime()
                    : 0;
                  return dateB - dateA;
                })
                .slice(0, 3);

              const heroPost = sortedPosts[0];
              const subPosts = sortedPosts.slice(1, 3);

              const mapPost = (post: {
                frontmatter: PostFrontmatter;
                slug: string;
                category: string;
                categoryPath: string;
              }) => ({
                title: cleanTitle(post.frontmatter.title),
                description: post.frontmatter.description,
                image:
                  post.frontmatter.featuredImage ||
                  "https://media.topfinanzas.com/images/placeholder.webp",
                slug: post.slug,
                category: post.category,
                categorySlug: post.categoryPath,
                date: post.frontmatter.date
                  ? new Date(post.frontmatter.date).toLocaleDateString(
                      "es-MX",
                      { year: "numeric", month: "long", day: "numeric" },
                    )
                  : undefined,
                type:
                  post.category === "Soluciones Financieras"
                    ? "financial"
                    : "personal",
              });

              return (
                <div className="flex flex-col gap-6">
                  {/* Hero Post */}
                  <div className="w-full">
                    <FeaturedPostCard
                      {...mapPost(heroPost)}
                      variant="poster"
                      orientation="vertical"
                      priority={true} // LCP candidate
                    />
                  </div>

                  {/* Sub Posts - 2 Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subPosts.map((post) => (
                      <FeaturedPostCard
                        key={post.slug}
                        {...mapPost(post)}
                        variant="default"
                        orientation="vertical" // Stacked cards for sub posts
                        imageHeight="h-56"
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Category Sections - Sharp Corners & Hero+List Layout */}

          <CategorySection
            title="Ahorro inteligente"
            posts={savingsPosts.map((p) => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image:
                p.frontmatter.featuredImage ||
                "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date
                ? new Date(p.frontmatter.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : undefined,
              type: "financial",
            }))}
            viewAllLink="/ahorro"
          />

          <CategorySection
            title="Deuda cero"
            posts={debtPosts.map((p) => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image:
                p.frontmatter.featuredImage ||
                "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date
                ? new Date(p.frontmatter.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : undefined,
              type: "personal",
            }))}
            viewAllLink="/deuda"
          />

          <CategorySection
            title="Elige tu tarjeta"
            posts={cardPosts.map((p) => ({
              title: cleanTitle(p.frontmatter.title),
              description: p.frontmatter.description,
              image:
                p.frontmatter.featuredImage ||
                "https://media.topfinanzas.com/images/placeholder.webp",
              slug: p.slug,
              category: p.category,
              categorySlug: p.categoryPath,
              date: p.frontmatter.date
                ? new Date(p.frontmatter.date).toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : undefined,
              type: "financial",
            }))}
            viewAllLink="/tarjetas"
          />

          {/* Pagination Controls */}
          {totalPages > 1 &&
            (totalPages <= 3 ? (
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Anterior
                </Button>
                <span className="text-sm text-gray-700">
                  Página {currentPage} de {totalPages}
                </span>
                <Button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Siguiente
                </Button>
              </div>
            ) : (
              <DynamicPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
