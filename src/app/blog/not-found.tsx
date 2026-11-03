import type { Metadata } from 'next'
import NotFoundView from '@/components/notfound/NotFoundView'
import { getRecentPostLinks } from '@/components/notfound/getRecentPostLinks'

export const metadata: Metadata = {
  title: 'Article Not Found | EEN Consulting Blog',
  description: 'This article may have been moved, renamed or unpublished.',
  robots: { index: false, follow: true },
}

// Rendered when notFound() is called inside /blog (dev server and build time)
export default async function BlogNotFound() {
  const recentPosts = await getRecentPostLinks()
  return <NotFoundView recentPosts={recentPosts} variant="blog" />
}
