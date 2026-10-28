import FlexSearch from 'flexsearch'
import type { Index } from 'flexsearch'
import { BlogPostPreview } from '../contentful/types'

export interface SearchResult {
  id: string
  title: string
  slug: string
  excerpt: string
  score: number
}

/**
 * Create a FlexSearch index for blog posts
 * This runs client-side for static export compatibility
 */
export function createSearchIndex(posts: BlogPostPreview[]) {
  const index = new FlexSearch.Index({
    tokenize: 'forward',
    cache: true,
    context: {
      resolution: 9,
      depth: 3,
      bidirectional: true,
    },
  })

  // Index each post
  posts.forEach((post, idx) => {
    const searchableText = `${post.title} ${post.excerpt} ${post.categories
      .map((c) => c.name)
      .join(' ')}`
    index.add(idx, searchableText)
  })

  return { index, posts }
}

/**
 * Search blog posts
 */
export function searchPosts(
  query: string,
  index: Index,
  posts: BlogPostPreview[],
  limit: number = 10
): SearchResult[] {
  if (!query.trim()) return []

  const results = index.search(query, { limit })

  return (results as number[]).map((idx) => {
    const post = posts[idx]
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      score: 1, // FlexSearch doesn't return scores by default
    }
  })
}
