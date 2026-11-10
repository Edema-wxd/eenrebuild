import { notFound, redirect } from 'next/navigation'
import BlogListing, { BLOG_PAGE_SIZE } from '@/components/blog/BlogListing'
import { getPaginatedBlogPosts } from '@/lib/contentful/queries'

// Regenerate at most hourly on Vercel (ISR); Contentful publishes also
// trigger /api/revalidate. Ignored by the static export.
export const revalidate = 3600

interface BlogPaginatedPageProps {
  params: Promise<{ page: string }>
}

export async function generateMetadata({ params }: BlogPaginatedPageProps) {
  const { page } = await params
  return {
    title: `Sustainability Blog - Page ${page} | EEN Consulting`,
    description: `Page ${page} of expert articles on solar energy, water conservation, EDGE certification, and sustainable building in Nigeria from EEN Consulting.`,
  }
}

export default async function BlogPaginatedPage({ params }: BlogPaginatedPageProps) {
  const { page } = await params
  const pageNumber = Number(page)
  if (pageNumber === 1) redirect('/blog')
  if (!Number.isInteger(pageNumber) || pageNumber < 1) notFound()

  return <BlogListing page={pageNumber} />
}

// Page 1 redirects to /blog, but is always generated because static export
// rejects a dynamic route with no params (e.g. when there's only one page)
export async function generateStaticParams() {
  const { totalPages } = await getPaginatedBlogPosts(1, BLOG_PAGE_SIZE)

  return Array.from({ length: Math.max(totalPages, 1) }, (_, i) => ({
    page: String(i + 1),
  }))
}
