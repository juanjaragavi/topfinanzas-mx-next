"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useEffect } from "react";
import { ALL_POSTS } from "@/lib/data/posts";

// Define the structure for each post item (can be imported if shared)
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string;
}

export default function TarjetasArchivePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter Mexican credit cards from ALL_POSTS
  const creditCardsContent: PostItem[] = ALL_POSTS.filter(
    (post) =>
      post.category === "Soluciones Financieras" &&
      post.subCategory === "creditCards",
  ).map((post) => ({
    title: post.title,
    slug: post.slug,
    description: post.description,
    image: post.image,
    date: post.date,
    type: post.type,
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
  const sortedCreditCards = [...creditCardsContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // No filtering needed, just display the sorted credit card content
  const filteredPosts = sortedCreditCards;

  // Avoid rendering until client-side code is running
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Basic loading skeleton */}
        <div className="animate-pulse bg-gray-200 rounded-sm p-8 w-full max-w-4xl">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const pageContent = (
    <div data-category="tarjetas">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Tarjetas de Crédito
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explora guías detalladas y reseñas de las mejores tarjetas de crédito
        disponibles. Encuentra la tarjeta adecuada según las recompensas,
        tarifas y tus necesidades financieras.
      </p>

      {/* Grid of credit card posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post: PostItem) => (
          <div
            key={post.slug}
            className="relative"
            style={{ position: "relative" }} // Needed for FeaturedPostCard image positioning
          >
            <FeaturedPostCard
              title={post.title}
              description={post.description}
              image={post.image}
              // Posts are located under /soluciones-financieras/
              slug={post.slug}
              category="Tarjetas de Crédito" // Static category for this page
              categorySlug="/soluciones-financieras" // Base path for these posts
              date={post.date}
              type={post.type}
              showBadge={true} // Show type badge if desired
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Tarjetas de Crédito: Reseñas y Guías | TopFinanzas MX",
        description:
          "Compara las mejores tarjetas de crédito. Encuentra reseñas, guías y comparaciones para recompensas, cashback, viajes y tarjetas de bajo interés.",
      }}
    >
      {pageContent}
    </BlogLayout>
  );
}
