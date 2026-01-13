import Link from "next/link";
import Image from "next/image";
import { ALL_POSTS, PostItem } from "@/lib/data/posts";

interface RelatedPostsProps {
  currentSlug: string;
  category: "finanzas-personales" | "soluciones-financieras";
  subCategory?: "creditCards" | "loans";
  maxPosts?: number;
}

/**
 * RelatedPosts Component
 *
 * Displays a "También te puede interesar" section at the bottom of articles
 * to improve user recirculation and SEO internal linking.
 *
 * Selection logic:
 * 1. Filters by matching categoryPath
 * 2. If subCategory provided, prioritizes matching subCategory
 * 3. Excludes current article
 * 4. Returns up to maxPosts (default: 3)
 */
export function RelatedPosts({
  currentSlug,
  category,
  subCategory,
  maxPosts = 3,
}: RelatedPostsProps) {
  // Map category prop to categoryPath format
  const categoryPath = `/${category}`;

  // Filter posts by category and exclude current article
  let relatedPosts = ALL_POSTS.filter(
    (post) => post.categoryPath === categoryPath && post.slug !== currentSlug,
  );

  // If subCategory provided, prioritize matching subCategory posts
  if (subCategory) {
    const subCategoryPosts = relatedPosts.filter(
      (post) => post.subCategory === subCategory,
    );
    const otherPosts = relatedPosts.filter(
      (post) => post.subCategory !== subCategory,
    );
    // Combine: subCategory matches first, then others
    relatedPosts = [...subCategoryPosts, ...otherPosts];
  }

  // Shuffle to add variety (using deterministic shuffle based on currentSlug)
  const shuffledPosts = shuffleWithSeed(relatedPosts, hashCode(currentSlug));

  // Take only maxPosts
  const displayPosts = shuffledPosts.slice(0, maxPosts);

  if (displayPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        También te puede interesar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayPosts.map((post) => (
          <RelatedPostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

/**
 * Individual card component for related posts
 */
function RelatedPostCard({ post }: { post: PostItem }) {
  return (
    <article className="group cursor-pointer flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <Link
        href={`${post.categoryPath}/${post.slug}`}
        className="flex-1 flex flex-col"
      >
        <div className="relative h-40 w-full bg-gray-200 overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Sin imagen
            </div>
          )}
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          {post.description && (
            <p className="text-gray-600 text-sm line-clamp-2 flex-1">
              {post.description}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}

/**
 * Simple hash function for deterministic shuffling
 */
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Shuffle array with seed for deterministic results
 */
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const result = [...array];
  let currentSeed = seed;

  for (let i = result.length - 1; i > 0; i--) {
    // Simple LCG for pseudo-random numbers
    currentSeed = (currentSeed * 1103515245 + 12345) & 0x7fffffff;
    const j = currentSeed % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
