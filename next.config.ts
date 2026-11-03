import type { NextConfig } from "next";

// On Vercel the site runs as a Next.js app so blog pages use ISR and pick up
// Contentful changes without a rebuild. Everywhere else (FTP hosting) it is a
// static export.
const isVercel = Boolean(process.env.VERCEL);

const nextConfig: NextConfig = {
  ...(isVercel ? {} : { output: "export" }),
  trailingSlash: true,
  // `*.vercel.ts` files (e.g. the Contentful revalidation webhook) are only
  // routes on Vercel, since static export can't build POST route handlers
  pageExtensions: isVercel
    ? ["vercel.ts", "tsx", "ts", "jsx", "js"]
    : ["tsx", "ts", "jsx", "js"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
