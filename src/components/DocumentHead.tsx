import { SEO } from "@/config/constants";

export default function DocumentHead() {
    return (
        <>
            <title>{SEO.title}</title>
            <meta name="title" content={SEO.title} />
            <meta name="description" content={SEO.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={SEO.url} />
            <meta property="og:title" content={SEO.title} />
            <meta property="og:description" content={SEO.description} />
            <meta property="og:image" content={SEO.ogImage} />
            <meta property="og:site_name" content="Barriers of Mobility" />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={SEO.url} />
            <meta name="twitter:title" content={SEO.title} />
            <meta name="twitter:description" content={SEO.description} />
            <meta name="twitter:image" content={SEO.ogImage} />
        </>
    );
}
