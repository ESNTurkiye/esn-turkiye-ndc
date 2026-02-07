import { Helmet } from "react-helmet-async";
import { SEO } from "@/config";

export default function DocumentHead() {
    return (
        <Helmet>
            <title>{SEO.title}</title>
            <meta name="title" content={SEO.title} />
            <meta name="description" content={SEO.description} />
            <meta name="keywords" content={SEO.keywords.join(", ")} />
            <meta
                name="author"
                content="ESN Türkiye - Erasmus Student Network Türkiye"
            />
            <meta
                name="robots"
                content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <link rel="canonical" href={SEO.url} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={SEO.url} />
            <meta property="og:title" content={SEO.title} />
            <meta property="og:description" content={SEO.description} />
            <meta property="og:image" content={SEO.ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Barriers of Mobility" />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={SEO.url} />
            <meta name="twitter:title" content={SEO.title} />
            <meta name="twitter:description" content={SEO.description} />
            <meta name="twitter:image" content={SEO.ogImage} />
            <meta name="twitter:site" content={SEO.twitterHandle} />
            <meta name="twitter:creator" content={SEO.twitterHandle} />

            <meta name="theme-color" content="#00D1FF" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
            />
            <meta
                name="apple-mobile-web-app-title"
                content="Barriers of Mobility"
            />

            <script type="application/ld+json">
                {JSON.stringify(SEO.structuredData)}
            </script>
        </Helmet>
    );
}
