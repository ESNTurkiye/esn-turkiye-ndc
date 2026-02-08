import { useEffect } from "react";

export interface BlogSEOOptions {
    title: string;
    description: string;
}

interface BlogPostMeta {
    title?: string;
    description?: string;
    [key: string]: unknown;
}

function setMeta(name: string, content: string, attribute: "name" | "property" = "name") {
    let el = document.querySelector(`meta[${attribute}="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

export function useBlogSEO(options: BlogSEOOptions) {
    useEffect(() => {
        const title = `${options.title} | ${SEO.title}`;
        document.title = title;
        setMeta("title", title);
        setMeta("description", options.description);
        setMeta("og:title", title, "property");
        setMeta("og:description", options.description, "property");
        setMeta("twitter:title", title);
        setMeta("twitter:description", options.description);
        return () => {
            document.title = SEO.title;
            setMeta("title", SEO.title);
            setMeta("description", SEO.description);
            setMeta("og:title", SEO.title, "property");
            setMeta("og:description", SEO.description, "property");
            setMeta("twitter:title", SEO.title);
            setMeta("twitter:description", SEO.description);
        };
    }, [options.title, options.description]);
}

export function useBlogPostSEO(post: { metadata: BlogPostMeta } | null) {
    useEffect(() => {
        if (post?.metadata) {
            const title = (post.metadata.title ?? "Blog post") + " | " + SEO.title;
            const description = post.metadata.description ?? SEO.description;
            document.title = title;
            setMeta("title", title);
            setMeta("description", description);
            setMeta("og:title", title, "property");
            setMeta("og:description", description, "property");
            setMeta("twitter:title", title);
            setMeta("twitter:description", description);
        } else {
            document.title = "Post not found | " + SEO.title;
            setMeta("description", SEO.description);
        }
        return () => {
            document.title = SEO.title;
            setMeta("title", SEO.title);
            setMeta("description", SEO.description);
            setMeta("og:title", SEO.title, "property");
            setMeta("og:description", SEO.description, "property");
            setMeta("twitter:title", SEO.title);
            setMeta("twitter:description", SEO.description);
        };
    }, [post]);
}

export const SEO = {
    title: "Barriers of Mobility | Visa Issues for Non-EU Students - ESN Türkiye",
    description:
        "Comprehensive research on visa barriers faced by non-EU students in Erasmus+ and mobility programs. 92% require long-term visas, 35% face unreasonably long processes. Data-driven policy recommendations for student mobility rights.",
    keywords: [
        "visa barriers",
        "non-EU students",
        "Erasmus visa problems",
        "student mobility barriers",
        "visa challenges Europe",
        "Erasmus+ visa process",
        "international student visas",
        "mobility rights",
        "visa rejection reasons",
        "student visa survey",
        "ESN Türkiye research",
        "European student mobility",
    ],
    ogImage: "https://esnturkiye.github.io/esn-assets/images/og-image.png",
    url: "https://barriersofmobility.esnturkey.org/",
    twitterHandle: "@esnturkiye",
    structuredData: {
        "@context": "https://schema.org",
        "@type": "ResearchProject",
        name: "Barriers of Mobility - Visa Issues for Non-EU Students",
        description:
            "A comprehensive research project analyzing visa problems faced by students from Türkiye and non-EU countries participating in Erasmus+, ESC, and other mobility programs.",
        url: "https://barriersofmobility.esnturkey.org/",
        keywords: [
            "visa barriers",
            "international students",
            "Erasmus",
            "mobility rights",
            "visa challenges",
            "student mobility",
            "Erasmus visa problems",
            "student mobility barriers",
            "policy advocacy",
        ],
        sponsor: {
            "@type": "Organization",
            name: "ESN Türkiye",
            alternateName: "Erasmus Student Network Türkiye",
            url: "https://esnturkiye.org",
            sameAs: [
                "https://x.com/esnturkiye",
                "https://www.linkedin.com/company/erasmusstudentnetwork-turkey",
                "https://www.instagram.com/esnturkiye/",
                "https://www.facebook.com/esntr",
            ],
        },
        funder: {
            "@type": "Organization",
            name: "National Development Committee",
            parentOrganization: {
                "@type": "Organization",
                name: "ESN Türkiye",
            },
        },
        author: {
            "@type": "Person",
            name: "Merve Ceylan",
            jobTitle: "President of ESN Türkiye",
        },
        datePublished: "2025-04-05",
        inLanguage: "en",
        about: {
            "@type": "Thing",
            name: "Student Visa Barriers",
            description:
                "Research on visa challenges faced by non-EU students in European mobility programs",
        },
    },
} as const;