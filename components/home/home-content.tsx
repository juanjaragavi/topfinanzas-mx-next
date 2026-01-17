"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { CategorySection } from "@/components/ui/category-section"; // Import new component
import { Hero } from "@/components/ui/hero";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

import { ALL_POSTS } from "@/lib/data/posts";

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

// --- Dynamic Post Data from Central Repository ---
const allPosts: PostData[] = ALL_POSTS.map((post) => ({
  slug: post.slug,
  frontmatter: {
    title: post.title,
    description: post.description,
    date: post.date ? new Date(post.date).toISOString() : undefined,
    featuredImage: post.image,
    categories: [
      { name: post.category, slug: post.categoryPath.replace("/", "") },
    ],
  },
  category: post.category,
  categoryPath: post.categoryPath,
}));

// Filter posts by category for targeted sections
const finanzasPersonalesPosts = allPosts.filter(
  (p) => p.category === "Finanzas Personales"
);
const solucionesFinancierasPosts = allPosts.filter(
  (p) => p.category === "Soluciones Financieras"
);

// Helper function to interleave posts from both categories
// Prioritizes Finanzas Personales for visibility while mixing content
const getInterleavedPosts = (count: number): PostData[] => {
  const result: PostData[] = [];
  const fpSorted = [...finanzasPersonalesPosts].sort((a, b) => {
    const dateA = a.frontmatter.date
      ? new Date(a.frontmatter.date).getTime()
      : 0;
    const dateB = b.frontmatter.date
      ? new Date(b.frontmatter.date).getTime()
      : 0;
    return dateB - dateA;
  });
  const sfSorted = [...solucionesFinancierasPosts].sort((a, b) => {
    const dateA = a.frontmatter.date
      ? new Date(a.frontmatter.date).getTime()
      : 0;
    const dateB = b.frontmatter.date
      ? new Date(b.frontmatter.date).getTime()
      : 0;
    return dateB - dateA;
  });

  let fpIndex = 0;
  let sfIndex = 0;

  // Interleave: prioritize Finanzas Personales first, then alternate
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0 && fpIndex < fpSorted.length) {
      // Even positions: Finanzas Personales
      result.push(fpSorted[fpIndex++]);
    } else if (sfIndex < sfSorted.length) {
      // Odd positions: Soluciones Financieras
      result.push(sfSorted[sfIndex++]);
    } else if (fpIndex < fpSorted.length) {
      // Fallback to Finanzas Personales if Soluciones exhausted
      result.push(fpSorted[fpIndex++]);
    } else if (sfIndex < sfSorted.length) {
      // Fallback to Soluciones if Finanzas exhausted
      result.push(sfSorted[sfIndex++]);
    }
  }

  return result;
};

// Create category sections with actual filtered data
const savingsPosts = finanzasPersonalesPosts.slice(0, 4);
const loanPosts = solucionesFinancierasPosts
  .filter((p) => p.categoryPath === "/soluciones-financieras")
  .slice(0, 4);
const cardPosts = solucionesFinancierasPosts
  .filter((p) => p.categoryPath === "/soluciones-financieras")
  .slice(4, 8);

// --- End of Dynamic Data ---

export function HomeContent() {
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
          {/* Latest Articles (Top 3) - Interleaved from both categories */}
          {/* Latest Articles - Custom Layout: Hero (Poster) + 2 Standard Cards */}
          <div className="mb-16">
            {/* Get interleaved posts prioritizing Finanzas Personales */}
            {(() => {
              // Use interleaved posts for featured section to ensure category diversity
              const featuredPosts = getInterleavedPosts(3);

              const heroPost = featuredPosts[0];
              const subPosts = featuredPosts.slice(1, 3);

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
            title="Finanzas Personales"
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
              type: "personal",
            }))}
            viewAllLink="/finanzas-personales"
          />

          <CategorySection
            title="Préstamos Personales"
            posts={loanPosts.map((p) => ({
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
            viewAllLink="/prestamos"
          />

          <CategorySection
            title="Tarjetas de Crédito"
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
