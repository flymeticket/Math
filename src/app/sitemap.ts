import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.iblearnersacademy.com";

interface SeoPage {
  slug?: string;
}

// Auto-generates /sitemap.xml from data/seo_pages.json so every programmatic
// page (course, stage, and all location pages) is listed for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  let pages: SeoPage[] = [];
  try {
    const dataPath = path.join(process.cwd(), "data", "seo_pages.json");
    pages = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  } catch {
    pages = [];
  }

  const entries: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/book-a-session/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const seen = new Set(entries.map((entry) => entry.url));
  for (const page of pages) {
    if (!page.slug) continue;
    const url = `${BASE_URL}${page.slug}`;
    if (seen.has(url)) continue;
    seen.add(url);
    entries.push({ url, lastModified, changeFrequency: "weekly", priority: 0.6 });
  }

  return entries;
}
