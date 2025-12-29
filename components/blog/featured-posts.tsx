import Link from "next/link";
import Image from "next/image";

interface Post {
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  image?: string;
  category: string;
}

interface FeaturedPostsProps {
  posts: Post[];
  title?: string;
}

export function FeaturedPosts({
  posts,
  title = "Featured Posts",
}: FeaturedPostsProps) {
  if (!posts || posts.length === 0) return null;

  // Take the first post as the main feature
  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 3); // Next 2 posts

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feature */}
        <div className="lg:col-span-2 group cursor-pointer relative rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link href={`/${mainPost.category}/${mainPost.slug}`}>
            <div className="relative h-96 w-full">
              {mainPost.image ? (
                <Image
                  src={mainPost.image}
                  alt={mainPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-sm font-bold bg-blue-600 px-3 py-1 rounded-full inline-block mb-3 uppercase">
                  {mainPost.category.replace(/-/g, " ")}
                </div>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                  {mainPost.title}
                </h3>
                {mainPost.excerpt && (
                  <p className="text-gray-200 text-lg line-clamp-2 max-w-2xl">
                    {mainPost.excerpt}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </div>

        {/* Side Posts */}
        <div className="flex flex-col gap-6">
          {sidePosts.map((post) => (
            <article
              key={post.slug}
              className="flex-1 group cursor-pointer bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-row lg:flex-col"
            >
              <Link
                href={`/${post.category}/${post.slug}`}
                className="flex w-full h-full"
              >
                <div className="relative w-1/3 lg:w-full lg:h-48 bg-gray-200 shrink-0">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-4 flex flex-col justify-center">
                  <div className="text-xs text-blue-600 font-semibold mb-1 uppercase">
                    {post.category.replace(/-/g, " ")}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
