import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://barriersofmobility.esnturkey.org";
const POSTS_PATH = path.join(__dirname, "..", "src", "data", "posts.json");
const SITEMAP_PATH = path.join(__dirname, "..", "public", "sitemap.xml");

const staticUrls = [
    {
        loc: `${BASE_URL}/`,
        lastmod: "2026-02-07",
        changefreq: "weekly",
        priority: "1.0",
        comment: "Main Page",
    },
    {
        loc: `${BASE_URL}/blog`,
        lastmod: new Date().toISOString().slice(0, 10),
        changefreq: "weekly",
        priority: "0.9",
        comment: "Blog List",
    },
    {
        loc: `${BASE_URL}/documents/policy-paper-2025.pdf`,
        lastmod: "2025-04-05",
        changefreq: "monthly",
        priority: "0.9",
        comment: "Policy Paper PDF",
    },
    {
        loc: `${BASE_URL}/documents/survey-report-2025.pdf`,
        lastmod: "2025-04-05",
        changefreq: "monthly",
        priority: "0.9",
        comment: "Survey Report 2025 PDF",
    },
    {
        loc: `${BASE_URL}/documents/survey-report-2024.pdf`,
        lastmod: "2024-04-05",
        changefreq: "yearly",
        priority: "0.7",
        comment: "Survey Report 2024 PDF",
    },
];

function escapeXml(s) {
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
    <changefreq>${escapeXml(changefreq)}</changefreq>
    <priority>${escapeXml(priority)}</priority>
  </url>`;
}

async function main() {
    let posts = [];
    if (fs.existsSync(POSTS_PATH)) {
        const raw = fs.readFileSync(POSTS_PATH, "utf8");
        posts = JSON.parse(raw);
    }

    const blogUrls = posts
        .filter((p) => p.metadata?.status === "active")
        .map((p) => ({
            loc: `${BASE_URL}/blog/${encodeURIComponent(p.slug)}`,
            lastmod: p.metadata?.date || new Date().toISOString().slice(0, 10),
            changefreq: "monthly",
            priority: "0.8",
        }));

    const allUrls = [
        ...staticUrls.slice(0, 2), // main page + blog list
        ...blogUrls,
        ...staticUrls.slice(2), // PDFs
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

${allUrls.map((u) => urlEntry(u)).join("\n\n")}

</urlset>
`;

    const outDir = path.dirname(SITEMAP_PATH);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(SITEMAP_PATH, xml, "utf8");

    console.log(`Generated sitemap with ${allUrls.length} URL(s) → ${SITEMAP_PATH}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
