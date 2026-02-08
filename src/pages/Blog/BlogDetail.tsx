import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { BlogPost } from "@/types/blog";
import { useBlogPostSEO } from "@/config/seo";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useReadPosts } from "@/hooks/useReadPosts";
import postsData from "@/data/posts.json";

const posts = postsData as BlogPost[];

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? posts.find((p) => p.slug === slug) : undefined;
    const { markAsRead } = useReadPosts();
    const { trackBlogPostView } = useAnalytics();

    useBlogPostSEO(post ?? null);

    useEffect(() => {
        if (slug) markAsRead(slug);
    }, [slug, markAsRead]);

    useEffect(() => {
        if (slug && post) {
            trackBlogPostView(slug, post.metadata.title);
        }
    }, [slug, post, trackBlogPostView]);

    if (!slug || !post) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-16 text-center">
                <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
                <p className="mt-2 text-gray-600">The blog post you’re looking for doesn’t exist or was removed.</p>
                <Link to="/blog" className="mt-6 inline-block text-esn-cyan underline hover:no-underline">
                    <span className="inline-flex items-center">
                        <svg
                            className="mr-1 h-4 w-4 text-esn-cyan inline-block"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                        >
                            <path
                                d="M9.5 12L5 8l4.5-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Back to blog
                    </span>
                </Link>
            </div>
        );
    }

    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <Link to="/blog" className="mb-8 inline-block text-sm font-medium text-esn-cyan hover:underline">
                <span className="inline-flex items-center">
                    <svg
                        className="mr-1 h-4 w-4 text-esn-cyan inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                    >
                        <path
                            d="M9.5 12L5 8l4.5-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Back to blog
                </span>
            </Link>

            <header className="mb-10">
                {post.metadata.date && (
                    <time dateTime={post.metadata.date} className="text-sm font-medium text-esn-cyan">
                        {formatDate(post.metadata.date)}
                    </time>
                )}
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {post.metadata.title ?? post.slug}
                </h1>
                {post.metadata.author && (
                    <p className="mt-2 text-gray-600">By {post.metadata.author}</p>
                )}
            </header>

            <div className="blog-prose prose prose-gray max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    );
}

function formatDate(value: string): string {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
