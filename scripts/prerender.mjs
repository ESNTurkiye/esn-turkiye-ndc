/**
 * Prerender Script - Blog sayfalarını statik HTML olarak oluşturur.
 * 
 * Build sonrası çalışır. Her blog post için:
 * - dist/blog/some-slug/index.html (post içeriği render edilmiş)
 * - Arama motorlarına içerik gösterir, kullanıcılar SPA'yı kullanır
 * 
 * Kullanım: node scripts/prerender.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIST_DIR = path.join(ROOT, "dist");
const POSTS_PATH = path.join(ROOT, "content", "posts.json");

const BASE_URL = "https://barriersofmobility.esnturkey.org";
const DEFAULT_OG_IMAGE =
    "https://esnturkiye.github.io/esn-assets/apps/barriers-of-mobility/og-image.png";

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function generatePostHtml(post, indexHtml) {
    const title = `${post.metadata.title} | Barriers of Mobility`;
    const url = `${BASE_URL}/blog/${post.slug}`;

    // Extract content from original index.html and add meta tags
    // We inject meta tags into the <head> section
    const metaTags = `
    <title>${escapeHtml(title)}</title>
    <meta name="title" content="${escapeHtml(title)}" />
    <meta name="description" content="${escapeHtml(post.metadata.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escapeHtml(url)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(post.metadata.description)}" />
    <meta property="og:image" content="${escapeHtml(DEFAULT_OG_IMAGE)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(post.metadata.description)}" />
    <meta name="twitter:image" content="${escapeHtml(DEFAULT_OG_IMAGE)}" />
    <link rel="canonical" href="${escapeHtml(url)}" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${escapeHtml(post.metadata.title)}",
      "description": "${escapeHtml(post.metadata.description)}",
      "author": { "@type": "Person", "name": "${escapeHtml(post.metadata.author)}" },
      "datePublished": "${post.metadata.date}",
      "publisher": { "@type": "Organization", "name": "ESN Türkiye", "url": "https://esnturkiye.org" },
      "url": "${escapeHtml(url)}",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "${escapeHtml(url)}" },
      "inLanguage": "en"
    }
    </script>
  `;

    return indexHtml.replace(
        /<title>.*?<\/title>/,
        metaTags.trim()
    );
}

async function main() {
    if (!fs.existsSync(DIST_DIR)) {
        console.error("❌ dist/ klasörü bulunamadı. Önce 'npm run build' çalıştırın.");
        process.exit(1);
    }

    // Ana index.html'i oku
    const indexHtmlPath = path.join(DIST_DIR, "index.html");
    if (!fs.existsSync(indexHtmlPath)) {
        console.error("❌ dist/index.html bulunamadı.");
        process.exit(1);
    }
    const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");

    // Postları yükle
    if (!fs.existsSync(POSTS_PATH)) {
        console.error("❌ content/posts.json bulunamadı.");
        process.exit(1);
    }
    const posts = JSON.parse(fs.readFileSync(POSTS_PATH, "utf8"));
    const activePosts = posts.filter((p) => p.metadata?.status === "active");

    let generatedCount = 0;

    for (const post of activePosts) {
        const slug = post.slug;
        const postDir = path.join(DIST_DIR, "blog", slug);

        // Klasörü oluştur
        fs.mkdirSync(postDir, { recursive: true });

        // HTML oluştur
        const html = generatePostHtml(post, indexHtml);
        fs.writeFileSync(path.join(postDir, "index.html"), html, "utf8");

        generatedCount++;
        console.log(`  ✓ /blog/${slug}`);
    }

    // Blog list sayfası için de prerender
    const blogListDir = path.join(DIST_DIR, "blog");
    if (!fs.existsSync(path.join(blogListDir, "index.html"))) {
        // Blog listesi zaten SPA routing ile çalışır, ama yine de bir kopya oluşturalım
        const blogListTitle = "Blog | Barriers of Mobility";
        const blogListMeta = `
    <title>${blogListTitle}</title>
    <meta name="title" content="${blogListTitle}" />
    <meta name="description" content="Stories, experiences and research findings on visa barriers faced by non-EU students in Erasmus+ and mobility programs." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${BASE_URL}/blog" />
    <meta property="og:title" content="${blogListTitle}" />
    <link rel="canonical" href="${BASE_URL}/blog" />
  `.trim();
        const blogListHtml = indexHtml.replace(/<title>.*?<\/title>/, blogListMeta);
        fs.writeFileSync(path.join(blogListDir, "index.html"), blogListHtml, "utf8");
        console.log("  ✓ /blog (list page)");
    }

    console.log(`\n✅ Prerender tamamlandı: ${generatedCount} blog sayfası oluşturuldu.`);
}

main().catch((err) => {
    console.error("❌ Prerender hatası:", err);
    process.exit(1);
});
