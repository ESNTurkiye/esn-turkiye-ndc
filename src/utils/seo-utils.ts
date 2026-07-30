import type { Post } from "@/content/schemas/post";

const BASE_URL = "https://barriersofmobility.esnturkey.org";
const DEFAULT_OG_IMAGE = "https://esnturkiye.github.io/esn-assets/apps/barriers-of-mobility/og-image.png";

/**
 * Generates a set of HTML meta tags for a blog post page.
 * These can be used for static prerender (SSG) or injected client-side.
 */
export function generatePostMetaTags(post: Post): string {
    const title = `${post.metadata.title} | Barriers of Mobility`;
    const url = `${BASE_URL}/blog/${post.slug}`;

    return `
<meta name="title" content="${escapeAttr(title)}" />
<meta name="description" content="${escapeAttr(post.metadata.description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${escapeAttr(url)}" />
<meta property="og:title" content="${escapeAttr(title)}" />
<meta property="og:description" content="${escapeAttr(post.metadata.description)}" />
<meta property="og:image" content="${escapeAttr(DEFAULT_OG_IMAGE)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeAttr(title)}" />
<meta name="twitter:description" content="${escapeAttr(post.metadata.description)}" />
<meta name="twitter:image" content="${escapeAttr(DEFAULT_OG_IMAGE)}" />
<link rel="canonical" href="${escapeAttr(url)}" />
`.trim();
}

/**
 * Generates HTML meta tags for the blog list page.
 */
export function generateBlogListMetaTags(): string {
    const title = "Blog | Barriers of Mobility";
    const description = "Stories, experiences and research findings on visa barriers faced by non-EU students in Erasmus+ and mobility programs.";
    const url = `${BASE_URL}/blog`;

    return `
<meta name="title" content="${escapeAttr(title)}" />
<meta name="description" content="${escapeAttr(description)}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${escapeAttr(url)}" />
<meta property="og:title" content="${escapeAttr(title)}" />
<meta property="og:description" content="${escapeAttr(description)}" />
<meta property="og:image" content="${escapeAttr(DEFAULT_OG_IMAGE)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeAttr(title)}" />
<meta name="twitter:description" content="${escapeAttr(description)}" />
<link rel="canonical" href="${escapeAttr(url)}" />
`.trim();
}

function escapeAttr(s: string): string {
    return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
