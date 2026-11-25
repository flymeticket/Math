/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site (1103 SSG pages + sitemap + robots, no server runtime),
  // exported to ./out so it can be hosted on any static host (Cloudflare Pages,
  // etc.). The only route that read the request (searchParams) was /paper-viewer,
  // which now reads the query string client-side.
  output: "export",

  // Serve every page at its trailing-slash URL (e.g. /ib-math-ai-hl/).
  // The sitemap, canonical tags, and internal links all use trailing slashes,
  // so this makes the served page, the sitemap, and the canonical agree and
  // stops Google reporting "Page with redirect" for the 308 slash-stripping.
  trailingSlash: true,
};

export default nextConfig;
