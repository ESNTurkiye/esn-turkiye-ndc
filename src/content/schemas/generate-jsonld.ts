import type { Post } from "./post";

const BASE_URL = "https://barriersofmobility.esnturkey.org";

export function generateArticleJsonLd(post: Post): Record<string, unknown> {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.metadata.title,
        description: post.metadata.description,
        author: {
            "@type": "Person",
            name: post.metadata.author,
        },
        datePublished: post.metadata.date,
        publisher: {
            "@type": "Organization",
            name: "ESN Türkiye",
            url: "https://esnturkiye.org",
        },
        url: `${BASE_URL}/blog/${post.slug}`,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blog/${post.slug}`,
        },
        inLanguage: "en",
        image: "https://esnturkiye.github.io/esn-assets/apps/barriers-of-mobility/og-image.png",
    };
}

export function generateBlogListJsonLd(): Record<string, unknown> {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Barriers of Mobility Blog",
        description:
            "Stories, experiences and research findings on visa barriers faced by non-EU students in Erasmus+ and mobility programs.",
        url: `${BASE_URL}/blog`,
        publisher: {
            "@type": "Organization",
            name: "ESN Türkiye",
            url: "https://esnturkiye.org",
        },
        inLanguage: "en",
    };
}
