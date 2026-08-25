import type { MetadataRoute } from "next";

const BASE_URL = "https://www.iblearnersacademy.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /paper-viewer is intentionally NOT disallowed. It already carries a
      // noindex meta tag, and Google must be allowed to crawl the page to see
      // that tag. Blocking it in robots.txt would prevent Google from reading
      // the noindex and could leave it "Indexed, though blocked by robots.txt".
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
