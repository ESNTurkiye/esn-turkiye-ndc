import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_LIST_URL = "https://api.github.com/repos/ESNTurkiye/esn-assets/contents/blog";
const RAW_BASE = "https://raw.githubusercontent.com/ESNTurkiye/esn-assets/main/blog";
const OUT_PATH = path.join(__dirname, "..", "src", "data", "posts.json");

const isMarkdown = (name) => /\.(mdx?|md)$/i.test(name);
const slugFromName = (name) => name.replace(/\.(mdx?|md)$/i, "");

async function fetchJson(url) {
    const res = await fetch(url, {
        headers: { Accept: "application/vnd.github.v3+json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
    return res.json();
}

async function fetchText(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
    return res.text();
}

async function main() {
    const list = await fetchJson(BLOG_LIST_URL);
    const files = Array.isArray(list) ? list : [];
    const markdownFiles = files.filter((f) => f.type === "file" && isMarkdown(f.name));

    const posts = [];
    for (const file of markdownFiles) {
        const rawUrl = `${RAW_BASE}/${encodeURIComponent(file.name)}`;
        const raw = await fetchText(rawUrl);
        const { data: metadata, content } = matter(raw);
        if (metadata?.status !== "active") continue;
        const slug = slugFromName(file.name);
        posts.push({ slug, metadata, content });
    }

    const outDir = path.dirname(OUT_PATH);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(OUT_PATH, JSON.stringify(posts, null, 2), "utf8");
    console.log(`Fetched ${posts.length} post(s) → ${OUT_PATH}`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});