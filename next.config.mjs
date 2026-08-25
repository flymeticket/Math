/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve every page at its trailing-slash URL (e.g. /ib-math-ai-hl/).
  // The sitemap, canonical tags, and internal links all use trailing slashes,
  // so this makes the served page, the sitemap, and the canonical agree and
  // stops Google reporting "Page with redirect" for the 308 slash-stripping.
  trailingSlash: true,
};

export default nextConfig;
