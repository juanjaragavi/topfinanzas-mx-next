"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturedPostsGrid } from "@/components/ui/featured-posts-grid";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Image from "next/image";

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
    slug: "tarjeta-credito-viajes-premium", // Example slug
    frontmatter: {
      title: "Tarjeta de Crédito Premium: Recompensas de Viaje Exclusivas",
      description:
        "La tarjeta ideal para viajeros frecuentes con beneficios premium...",
      date: "2025-10-29T00:00:00Z", // Matching legacy date
      featuredImage:
        "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp", // Keep image for layout
      categories: [
        { name: "Soluciones Financieras", slug: "financial-solutions" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "hsbc-prestamo-personal",
    frontmatter: {
      title:
        "Préstamo Personal HSBC: Financiamiento Flexible (MX)",
      description: "Descubre los préstamos personales de HSBC con tasas competitivas...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      categories: [
        { name: "Soluciones Financieras", slug: "financial-solutions" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "prestamo-negocio-funding-circle",
    frontmatter: {
      title: "Préstamo para Negocios Funding Circle",
      description:
        "Explora los préstamos para negocios de Funding Circle con financiamiento rápido y flexible...",
      date: "2025-04-04T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      categories: [
        { name: "Soluciones Financieras", slug: "financial-solutions" },
      ],
    },
    category: "Soluciones Financieras",
    categoryPath: "/financial-solutions",
  },
  {
    slug: "mejores-tarjetas-recompensas",
    frontmatter: {
      title:
        "Las Mejores Tarjetas de Crédito con Recompensas | Top Finanzas MX",
      description: "Descubre las mejores tarjetas de crédito con recompensas para maximizar tus gastos...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
  {
    slug: "salir-de-deudas",
    frontmatter: {
      title: "Guía Práctica para Salir de Deudas | Top Finanzas MX",
      description: "¿Te sientes abrumado por las deudas? Obtén estrategias prácticas...",
      date: "2025-04-03T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
  {
    slug: "tarjetas-meses-sin-intereses",
    frontmatter: {
      title:
        "Mejores Tarjetas de Crédito con Meses Sin Intereses | Top Finanzas MX",
      description:
        "Compara las mejores tarjetas de crédito que ofrecen meses sin intereses...",
      date: "2025-04-03T00:00:00Z",
      featuredImage: "https://media.topfinanzas.com/images/uk/APR.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
  {
    slug: "mejores-prestamos-personales",
    frontmatter: {
      title:
        "Mejores Préstamos Personales en México: Tu Guía Completa",
      description: "Guía completa de los mejores préstamos personales en México...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/best-personal-loans.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
  {
    slug: "tips-elegir-prestamo-en-linea",
    frontmatter: {
      title:
        "5 Consejos Esenciales para Elegir un Préstamo en Línea | Top Finanzas MX",
      description: "Navega el mundo de los préstamos en línea con confianza...",
      date: "2025-03-30T00:00:00Z",
      featuredImage:
        "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
      categories: [{ name: "Finanzas Personales", slug: "personal-finance" }],
    },
    category: "Finanzas Personales",
    categoryPath: "/personal-finance",
  },
];
// --- End of Hardcoded Data ---

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page for homepage

  // Calculate paginated posts using useMemo
  const { paginatedPosts, totalPages } = useMemo(() => {
    // Sort posts by date descending (if date exists)
    const sortedPosts = [...allPosts].sort((a, b) => {
      const dateA = a.frontmatter.date
        ? new Date(a.frontmatter.date).getTime()
        : 0;
      const dateB = b.frontmatter.date
        ? new Date(b.frontmatter.date).getTime()
        : 0;
      return dateB - dateA; // Descending order
    });

    const calculatedTotalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const postsToDisplay = sortedPosts.slice(
      startIndex,
      startIndex + postsPerPage,
    );
    return { paginatedPosts: postsToDisplay, totalPages: calculatedTotalPages };
  }, [currentPage, postsPerPage]);

  // Convert posts to the format expected by FeaturedPostsGrid
  const featuredPostsData = useMemo(() => {
    return paginatedPosts.map((post) => ({
      title: cleanTitle(post.frontmatter.title),
      description: post.frontmatter.description,
      image:
        post.frontmatter.featuredImage ||
        "https://media.topfinanzas.com/images/placeholder.webp",
      slug: post.slug,
      category: post.category,
      categorySlug: post.categoryPath,
      date: post.frontmatter.date
        ? new Date(post.frontmatter.date).toLocaleDateString("es-MX", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        : undefined,
      type: post.category === "Soluciones Financieras" ? "financial" : "personal",
    }));
  }, [paginatedPosts]);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Solid Brand Blue */}
      <section className="bg-[#015ECC] text-white px-6 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4 text-left">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 drop-shadow-sm leading-tight">
            Bienvenidos a Top Finanzas
          </h1>
          <p className="text-white text-2xl md:text-xl lg:text-2xl max-w-3xl mb-8 md:mb-12 drop-shadow-sm leading-relaxed font-medium">
            Donde cada decisión financiera amplía tu mundo. <br />
            Decide sabiamente, vive plenamente.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured post - Using standard Next.js Image component */}
          <div className="mb-12 relative">
            <FeaturedPostCard
              title="Las Mejores Tarjetas de Crédito para Viajar: Guía para Principiantes"
              description="Descubre las mejores opciones de crédito para tus viajes. Una guía esencial para principiantes que buscan maximizar sus beneficios y experiencias."
              image="https://media.topfinanzas.com/images/best-personal-loans.webp" // Re-using, ideally replace with correct image if known
              slug="mejores-tarjetas-viajes"
              category="Finanzas Personales"
              categorySlug="/personal-finance"
              date="29 de octubre, 2025"
              orientation="horizontal"
              priority={false} // Removed priority to avoid competing with LCP hero image
            />
          </div>

          {/* Latest Articles */}
          <FeaturedPostsGrid
            posts={featuredPostsData}
            title="Últimos Artículos"
            columns={3}
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
