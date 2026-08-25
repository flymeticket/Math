import type { MetadataRoute } from "next";

const BASE_URL = "https://www.iblearnersacademy.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep real students'/parents' testimonial media out of crawlers (and out
      // of Google's video + image indexes). This is the documented way to stop a
      // video being indexed, and it drains the "Video isn't on a watch page"
      // report. It does NOT affect playback for real visitors (robots.txt only
      // governs bots). The clips stay visible on-page as social proof.
      disallow: "/testimonials/",
      // /paper-viewer is intentionally NOT disallowed: it carries a noindex meta
      // tag, and Google must be allowed to crawl it to see that tag.
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
