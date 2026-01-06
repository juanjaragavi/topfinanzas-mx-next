"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useEffect } from "react";
import { ALL_POSTS } from "@/lib/data/posts";

interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string;
  category?: string;
  subCategory?: string;
}

export default function TestImplementationAFSPage() {
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get all posts from ALL_POSTS
  const allContent: PostItem[] = ALL_POSTS.map((post) => ({
    title: post.title,
    slug: post.slug,
    description: post.description,
    image: post.image,
    date: post.date,
    type: post.type,
    category: post.category,
    subCategory: post.subCategory,
  }));

  // Date parsing utility function
  const parseDate = (dateString: string): number => {
    if (!dateString) return 0;
    const value = dateString.trim();
    const patterns = [
      /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/,
      /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/,
      /^(\d{4})-(\d{2})-(\d{2})$/,
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match) {
        let day: number, month: number, year: number;
        if (pattern === patterns[0]) {
          day = parseInt(match[1], 10);
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[2].toLowerCase(),
          );
          year = parseInt(match[3], 10);
        } else if (pattern === patterns[1]) {
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[1].toLowerCase(),
          );
          day = parseInt(match[2], 10);
          year = parseInt(match[3], 10);
        } else {
          year = parseInt(match[1], 10);
          month = parseInt(match[2], 10) - 1;
          day = parseInt(match[3], 10);
        }
        if (month !== -1 && !isNaN(day) && !isNaN(year)) {
          return Date.UTC(year, month, day);
        }
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  // Sort posts by date (newest first)
  const sortedPosts = [...allContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // Pagination
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = sortedPosts.slice(startIndex, endIndex);

  // Avoid rendering until client-side code is running
  if (!isClient) {
    return null;
  }

  return (
    <BlogLayout
      metadata={{
        title: "Test implementation AFS | Top Finanzas México",
        description:
          "Explora todos nuestros artículos sobre finanzas personales, tarjetas de crédito, préstamos y más.",
      }}
    >
      <article className="prose prose-lg max-w-none">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Test implementation AFS
          </h1>
          <p className="text-gray-600">Found {sortedPosts.length} Results</p>
        </header>

        <section>
          <div className="grid gap-6 md:grid-cols-2">
            {currentPosts.map((post, index) => {
              // Determine category slug based on category
              const categorySlug =
                post.category === "Finanzas Personales"
                  ? "/finanzas-personales"
                  : "/soluciones-financieras";

              return (
                <FeaturedPostCard
                  key={`${post.slug}-${index}`}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category={post.category || "Finanzas Personales"}
                  categorySlug={categorySlug}
                  date={post.date}
                  priority={index < 2}
                />
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-[#1a4a8a] text-white rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0d3a6e] transition-colors"
              >
                ← Newer posts
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-[#1a4a8a] text-white rounded-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0d3a6e] transition-colors"
              >
                Older posts →
              </button>
            </div>
          )}
        </section>
      </article>
    </BlogLayout>
  );
}
