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
