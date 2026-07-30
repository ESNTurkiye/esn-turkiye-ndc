import { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router";
import ReactMarkdown from "react-markdown";
import { useBlogPostSEO } from "@/config/seo";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useReadPosts } from "@/hooks/useReadPosts";
import { loadPosts } from "@/content/load-posts";
import { generateArticleJsonLd } from "@/content/schemas/generate-jsonld";
import ShareButtons from "@/components/shared/ShareButtons";

const posts = loadPosts();

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const post = slug ? posts.find((p) => p.slug === slug) : undefined;
    const { markAsRead } = useReadPosts();
    const { trackBlogPostView } = useAnalytics();

    useBlogPostSEO(post ?? null);

    useEffect(() => {
        if (!slug) return;
        markAsRead(slug);

        if (post) {
            trackBlogPostView(slug, post.metadata.title);

            // Article JSON-LD structured data
            const jsonLd = generateArticleJsonLd(post);
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.id = `article-jsonld-${post.slug}`;
            script.textContent = JSON.stringify(jsonLd);

            // Remove any existing article JSON-LD before adding new one
            const existing = document.getElementById(`article-jsonld-${post.slug}`);
            if (existing) existing.remove();

            document.head.appendChild(script);

            return () => {
                const existingScript = document.getElementById(`article-jsonld-${post.slug}`);
                if (existingScript) existingScript.remove();
            };
        }
    }, [slug, post, markAsRead, trackBlogPostView]);

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
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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

            <div className="flex flex-col lg:flex-row lg:gap-12">
                {/* Main content - left column, left-aligned */}
                <div className="min-w-0 flex-1">
                    <header className="mb-10">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-left">
                            {post.metadata.title ?? post.slug}
                        </h1>
                    </header>

                    <div className="blog-prose prose prose-gray max-w-none text-left">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </div>

                {/* Sidebar - right column: date, author, share */}
                <aside className="mt-10 lg:mt-0 lg:w-56 lg:shrink-0 lg:pt-0">
                    <div className="space-y-6 text-left sticky top-40">
                        {post.metadata.date && (
                            <time dateTime={post.metadata.date} className="block text-sm font-medium text-gray-600">
                                {formatDate(post.metadata.date)}
                            </time>
                        )}
                        {post.metadata.author && (
                            <p className="text-sm text-gray-600">Published by {post.metadata.author}</p>
                        )}

                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                                Share this article
                            </h3>
                            <ShareButtons url={location.pathname} title={post.metadata.title ?? post.slug} />
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    );
}

function formatDate(value: string): string {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}