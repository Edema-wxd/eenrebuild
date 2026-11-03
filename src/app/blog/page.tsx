import BlogListing from '@/components/blog/BlogListing'

// Regenerate at most hourly on Vercel (ISR); Contentful publishes also
// trigger /api/revalidate. Ignored by the static export.
export const revalidate = 3600

export const metadata = {
  title: 'Blog | EEN Consulting - Sustainability & Energy Insights',
  description:
    'Expert insights on solar energy, water conservation, EDGE certification, and sustainable building practices in Nigeria',
}

export default function BlogPage() {
  return <BlogListing page={1} />
}
