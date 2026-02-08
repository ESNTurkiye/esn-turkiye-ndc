import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types/blog";
import { useBlogSEO } from "@/config/seo";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useReadPosts } from "@/hooks/useReadPosts";
import postsData from "@/data/posts.json";

const posts = postsData as BlogPost[];

export default function BlogList() {
    useBlogSEO({ title: "Blog", description: "Barriers of Mobility blog and updates - ESN Türkiye" });
    const { isRead } = useReadPosts();
    const { trackBlogListView } = useAnalytics();

    useEffect(() => {
        trackBlogListView();
    }, [trackBlogListView]);

    return (
        <div className="mx-auto max-w-3xl px-4 py-12 text-left sm:px-6 lg:px-8">
            <header className="mb-12">
                <h1 className="text-3xl font-bold tracking-tight text-esn-dark-blue sm:text-4xl">
                    Blog
                </h1>
                <p className="mt-3 text-lg text-gray-600">
                    Updates, insights and stories from the Barriers of Mobility project.
                </p>
            </header>

            {posts.length === 0 ? (
                <div className="py-12 text-gray-600">
                    <p>No posts yet. Run <code className="rounded bg-gray-200 px-1.5 py-0.5 text-sm">npm run fetch-posts</code> to pull content from the repository.</p>
                </div>
            ) : (
                <ul className="space-y-10">
                    {posts.map((post) => (
                        <li
                            key={post.slug}
                            className={`border-b border-gray-200 pb-10 last:border-0 last:pb-0 blog-item ${isRead(post.slug) ? "blog-item--read" : ""}`}
                        >
                            <Link to={`/blog/${post.slug}`} className="group block">
                                {post.metadata.date && (
                                    <time
                                        dateTime={post.metadata.date}
                                        className="blog-item__meta text-sm font-medium text-esn-cyan"
                                    >
                                        {formatDate(post.metadata.date)}
                                    </time>
                                )}
                                <h2 className="blog-item__title mt-1 text-xl font-bold text-gray-900 group-hover:text-esn-cyan">
                                    {post.metadata.title ?? post.slug}
                                </h2>
                                {post.metadata.description && (
                                    <p className="blog-item__description mt-2 text-gray-600">
                                        {post.metadata.description}
                                    </p>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function formatDate(value: string): string {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}