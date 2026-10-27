import { notFound, redirect } from 'next/navigation'
import BlogListing, { BLOG_PAGE_SIZE } from '@/components/blog/BlogListing'
import { getPaginatedBlogPosts } from '@/lib/contentful/queries'

export const dynamicParams = false

interface BlogPaginatedPageProps {
  params: Promise<{ page: string }>
}

export async function generateMetadata({ params }: BlogPaginatedPageProps) {
  const { page } = await params
  return {
    title: `Blog - Page ${page} | EEN Consulting`,
    description:
      'Expert insights on solar energy, water conservation, EDGE certification, and sustainable building practices in Nigeria',
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
