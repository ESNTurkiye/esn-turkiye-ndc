import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = "https://barriersofmobility.esnturkey.org";
const POSTS_PATH = path.join(__dirname, "..", "content", "posts.json");
const FEED_PATH = path.join(__dirname, "..", "public", "atom.xml");

function escapeXml(s) {
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

async function main() {
    let posts = [];
    if (fs.existsSync(POSTS_PATH)) {
        const raw = fs.readFileSync(POSTS_PATH, "utf8");
        posts = JSON.parse(raw);
    }

    const activePosts = posts
        .filter((p) => p.metadata?.status === "active")
        .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

    const feedUpdated = activePosts.length > 0 ? activePosts[0].metadata.date : new Date().toISOString().slice(0, 10);

    const entries = activePosts
        .map(
            (p) => `  <entry>
    <title>${escapeXml(p.metadata.title)}</title>
    <link href="${BASE_URL}/blog/${encodeURIComponent(p.slug)}" rel="alternate"/>
    <id>${BASE_URL}/blog/${encodeURIComponent(p.slug)}</id>
    <published>${new Date(p.metadata.date).toISOString()}</published>
    <updated>${new Date(p.metadata.date).toISOString()}</updated>
    <summary type="html">${escapeXml(p.metadata.description)}</summary>
    <author>
      <name>${escapeXml(p.metadata.author)}</name>
    </author>
  </entry>`
        )
        .join("\n");

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${BASE_URL}/blog</id>
  <title>Barriers of Mobility Blog</title>
  <subtitle>Stories, experiences and research findings on visa barriers faced by non-EU students in Erasmus+ and mobility programs.</subtitle>
  <link href="${BASE_URL}/blog" rel="alternate"/>
  <link href="${BASE_URL}/atom.xml" rel="self" type="application/atom+xml"/>
  <icon>https://esnturkiye.github.io/esn-assets/apps/barriers-of-mobility/og-image.png</icon>
  <updated>${new Date(feedUpdated).toISOString()}</updated>
  <rights>CC BY-NC 4.0 — ESN Türkiye</rights>

${entries}

</feed>
`;

    const outDir = path.dirname(FEED_PATH);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(FEED_PATH, feed, "utf8");

    console.log(`Generated Atom feed with ${activePosts.length} entry(s) → ${FEED_PATH}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
