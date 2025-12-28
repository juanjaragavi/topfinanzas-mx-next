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

interface LatestPostsProps {
    posts: Post[];
    title?: string;
}

export function LatestPosts({ posts, title = "Latest Posts" }: LatestPostsProps) {
    if (!posts || posts.length === 0) {
        return (
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-500">No posts available at the moment.</p>
            </div>
        );
    }

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <article key={post.slug} className="group cursor-pointer flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <Link href={`/${post.category}/${post.slug}`} className="flex-1 flex flex-col">
                            <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="text-xs text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                                    {post.category.replace(/-/g, ' ')}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                {post.excerpt && (
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                )}
                                {post.date && (
                                    <div className="text-xs text-gray-400 mt-auto pt-4 border-t border-gray-100">
                                        {post.date}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
