import { getPaginatedBlogPosts } from '@/lib/contentful/queries'
import { formatDate } from '@/utils/formatDate'
import type { RecentPostLink } from './NotFoundView'

// Fetched at build time so the static 404 page can suggest real articles.
// A Contentful outage should never break the 404 page, so failures fall back to none.
export async function getRecentPostLinks(limit = 4): Promise<RecentPostLink[]> {
  try {
    const { posts } = await getPaginatedBlogPosts(1, limit)
    return posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      date: formatDate(post.publishedDate),
      category: post.categories[0]
        ? { name: post.categories[0].name, color: post.categories[0].color }
        : undefined,
    }))
  } catch (error) {
    console.error('Failed to load recent posts for 404 page:', error)
    return []
  }
}
