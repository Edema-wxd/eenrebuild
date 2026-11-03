import type { NextConfig } from "next";

// On Vercel the site runs as a Next.js app so blog pages use ISR and pick up
// Contentful changes without a rebuild. Everywhere else (FTP hosting) it is a
// static export.
const isVercel = Boolean(process.env.VERCEL);

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: "export" }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
