import type { Metadata } from 'next'
import NotFoundView from '@/components/notfound/NotFoundView'
import { getRecentPostLinks } from '@/components/notfound/getRecentPostLinks'

export const metadata: Metadata = {
  title: 'Page Not Found | EEN Consulting',
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: true },
}

// With static export this becomes the single out/404.html served for every
// unknown URL, so it switches to the blog variant client-side for /blog/* paths
export default async function NotFound() {
  const recentPosts = await getRecentPostLinks()
  return <NotFoundView recentPosts={recentPosts} />
}
