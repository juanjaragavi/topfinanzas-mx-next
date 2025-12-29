"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import { LatestPosts } from "@/components/blog/latest-posts";
import { useState, useEffect } from "react";
import { ALL_POSTS } from "@/lib/data/posts";

// Define the structure for each post item
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string; // Optional date
  category: string; // Add category for filtering
}

// Define filter categories
const categories = {
  all: "Todos",
  creditCards: "Tarjetas",
  loans: "Préstamos",
  debt: "Deuda",
  guide: "Guías",
};

export default function PersonalFinanceArchivePage() {
  // State for active category filter - with client-side initialization via useEffect
  const [activeCategory, setActiveCategory] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Keep the default value but force client-side initialization
    setActiveCategory("all");
  }, []);
  // Array of all posts in this category
  const allPosts: PostItem[] = ALL_POSTS.filter(
    (post) =>
      post.category === "Finanzas Personales" || post.category === "guide",
  ).map((post) => ({
    title: post.title,
    slug: post.slug,
    description: post.description,
    image: post.image,
    date: post.date,
    category: post.category === "Finanzas Personales" ? "guide" : post.category,
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
  const sortedPosts = [...allPosts].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // Filter posts based on the selected category
  const filteredPosts =
    activeCategory === "all"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === activeCategory);

  const content = (
    <div data-category="finanzas-personales">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Guías de Finanzas Personales
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explora nuestras guías sobre tarjetas de crédito, préstamos, gestión de
        deudas y otros temas de finanzas personales para ayudarte a tomar
        decisiones informadas.
      </p>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of filtered posts */}
      <LatestPosts
        posts={filteredPosts.map((post) => ({
          ...post,
          excerpt: post.description,
          category: "finanzas-personales",
        }))}
        title=""
      />
    </div>
  );

  // Metadata for the archive page itself
  const pageMetadata = {
    title: "Guías de Finanzas Personales | TopFinanzas MX",
    description:
      "Explora guías sobre tarjetas de crédito, préstamos, gestión de deudas y otros temas de finanzas personales en México.",
  };

  return <BlogLayout metadata={pageMetadata}>{content}</BlogLayout>;
}
