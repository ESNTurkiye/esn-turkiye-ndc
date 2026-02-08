import { useEffect, useCallback, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { BlogPost } from "@/types/blog";
import { useBlogPostSEO } from "@/config/seo";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useReadPosts } from "@/hooks/useReadPosts";
import postsData from "@/data/posts.json";

const posts = postsData as BlogPost[];

const shareUrl = (url: string) =>
    typeof window !== "undefined" ? encodeURIComponent(url) : "";

function ShareButtons({ url, title }: { url: string; title: string }) {
    const [copied, setCopied] = useState(false);
    const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : "";
    const encodedUrl = shareUrl(fullUrl);
    const encodedTitle = encodeURIComponent(title);

    const copyLink = useCallback(async () => {
        if (typeof navigator?.clipboard?.writeText === "function") {
            await navigator.clipboard.writeText(fullUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }, [fullUrl]);

    return (
        <div className="flex flex-wrap gap-2">
            <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded border-2 border-esn-cyan text-esn-cyan hover:bg-esn-cyan hover:text-white transition-colors"
                aria-label="Share on X (Twitter)"
            >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded border-2 border-esn-cyan text-esn-cyan hover:bg-esn-cyan hover:text-white transition-colors"
                aria-label="Share on Facebook"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            </a>
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded border-2 border-esn-cyan text-esn-cyan hover:bg-esn-cyan hover:text-white transition-colors"
                aria-label="Share on LinkedIn"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </a>
            <button
                type="button"
                onClick={copyLink}
                className={`relative inline-flex items-center justify-center w-9 h-9 rounded border-2 transition-all duration-300 ${
                    copied
                        ? "border-esn-green bg-esn-green text-white scale-110"
                        : "border-esn-cyan text-esn-cyan hover:bg-esn-cyan hover:text-white"
                }`}
                aria-label={copied ? "Link copied" : "Copy link"}
            >
                {copied ? (
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                )}
                {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded shadow-lg animate-copy-fade-in whitespace-nowrap">
                        Copied!
                    </span>
                )}
            </button>
        </div>
    );
}

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
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
