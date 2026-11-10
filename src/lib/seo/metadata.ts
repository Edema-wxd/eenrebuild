import type { Metadata } from "next";

// Default share image (1200x630) for pages without their own.
export const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Modern office tower with terraced sky gardens and cascading greenery",
};

interface PageMetadataOptions {
  title: string;
  description: string;
  // Route path, e.g. "/services/solar". Trailing slash is added to match
  // next.config's trailingSlash setting.
  path: string;
  // Shorter title for social cards; defaults to `title`.
  ogTitle?: string;
}

function withTrailingSlash(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

// Title, description, canonical URL, Open Graph and Twitter card tags for a
// page. Next.js replaces (not merges) a parent's openGraph object, so every
// page needs the full set.
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
}: PageMetadataOptions): Metadata {
  const url = withTrailingSlash(path);
  const socialTitle = ogTitle ?? title;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: "EEN Consulting",
      locale: "en_NG",
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
