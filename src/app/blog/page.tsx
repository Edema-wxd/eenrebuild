import BlogListing from '@/components/blog/BlogListing'

export const metadata = {
  title: 'Blog | EEN Consulting - Sustainability & Energy Insights',
  description:
    'Expert insights on solar energy, water conservation, EDGE certification, and sustainable building practices in Nigeria',
}

export default function BlogPage() {
  return <BlogListing page={1} />
}
