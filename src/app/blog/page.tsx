import { pageMetadata } from '@/lib/seo/metadata'
import BlogListing from '@/components/blog/BlogListing'

// Regenerate at most hourly on Vercel (ISR); Contentful publishes also
// trigger /api/revalidate. Ignored by the static export.
export const revalidate = 3600

export const metadata = pageMetadata({
  title: 'Sustainability Blog | Green Building & Energy Insights Nigeria',
  description:
    'Expert articles on solar energy, water conservation, EDGE certification, and sustainable building practices in Nigeria from EEN Consulting.',
  path: "/blog",
});

export default function BlogPage() {
  return <BlogListing page={1} />
}
