import { cache } from 'react'
import { contentfulClient } from './client'
import {
  BlogPostFields,
  CategoryFields,
  ProcessedBlogPost,
  BlogPostPreview,
  ProcessedCategory,
  PaginatedBlogPosts,
  ContentfulEntry,
} from './types'
import {
  processBlogPost,
  processBlogPostPreview,
  processCategory,
} from './client'

function entries<TFields>(response: { items: unknown[] }) {
  return response.items as ContentfulEntry<TFields>[]
}

// Query functions are wrapped in React cache() so identical calls made during
// the same render pass (e.g. generateMetadata + page + shared components)
// hit Contentful only once. Functions with default parameters delegate to a
// cached inner function so `f(1)` and `f(1, 9)` share the same cache entry.

// ===== BLOG POST QUERIES =====

/**
 * Get all blog posts (for sitemap, RSS, search index)
 */
export const getAllBlogPosts = cache(async (): Promise<BlogPostPreview[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
    limit: 1000, // Max limit
    include: 2, // Include linked entries (author, categories, images)
  })

  return entries<BlogPostFields>(response).map(processBlogPostPreview)
})

/**
 * Get paginated blog posts for listing page
 */
export function getPaginatedBlogPosts(
  page: number = 1,
  pageSize: number = 9
): Promise<PaginatedBlogPosts> {
  return getPaginatedBlogPostsCached(page, pageSize)
}

const getPaginatedBlogPostsCached = cache(async (
  page: number,
  pageSize: number
): Promise<PaginatedBlogPosts> => {
  const skip = (page - 1) * pageSize

  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
    limit: pageSize,
    skip,
    include: 2, // Include linked entries (author, categories, images)
  })

  const posts = entries<BlogPostFields>(response).map(processBlogPostPreview)
  const total = response.total

  return {
    posts,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
    hasNextPage: skip + pageSize < total,
    hasPrevPage: page > 1,
  }
})

/**
 * Get featured blog posts (for homepage)
 */
export function getFeaturedBlogPosts(
  limit: number = 3
): Promise<BlogPostPreview[]> {
  return getFeaturedBlogPostsCached(limit)
}

const getFeaturedBlogPostsCached = cache(async (
  limit: number
): Promise<BlogPostPreview[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.featured': true,
    order: ['-fields.publishedDate'],
    limit,
    include: 2, // Include linked entries (author, categories, images)
  })

  return entries<BlogPostFields>(response).map(processBlogPostPreview)
})

/**
 * Get single blog post by slug
 */
export const getBlogPostBySlug = cache(async (
  slug: string
): Promise<ProcessedBlogPost | null> => {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
    include: 2, // Include linked entries (author, categories, images)
  })

  if (response.items.length === 0) {
    return null
  }

  return processBlogPost(entries<BlogPostFields>(response)[0])
})

/**
 * Get all blog post slugs (for static generation)
 */
export const getAllBlogPostSlugs = cache(async (): Promise<string[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    select: ['fields.slug'],
    limit: 1000,
  })

  return entries<BlogPostFields>(response).map((item) => item.fields.slug)
})

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(
  categorySlug: string,
  page: number = 1,
  pageSize: number = 9
): Promise<PaginatedBlogPosts> {
  return getBlogPostsByCategoryCached(categorySlug, page, pageSize)
}

const getBlogPostsByCategoryCached = cache(async (
  categorySlug: string,
  page: number,
  pageSize: number
): Promise<PaginatedBlogPosts> => {
  // Resolve the category id via the cached lookup, so callers that also
  // fetch the category (metadata, listing header) don't trigger a second call
  const category = await getCategoryBySlug(categorySlug)

  if (!category) {
    return {
      posts: [],
      total: 0,
      page,
      pageSize,
      totalPages: 0,
      hasNextPage: false,
      hasPrevPage: false,
    }
  }

  const categoryId = category.id
  const skip = (page - 1) * pageSize

  // Get posts that reference this category
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.categories.sys.id': categoryId,
    order: ['-fields.publishedDate'],
    limit: pageSize,
    skip,
    include: 2, // Include linked entries (author, categories, images)
  })

  const posts = entries<BlogPostFields>(response).map(processBlogPostPreview)
  const total = response.total

  return {
    posts,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
    hasNextPage: skip + pageSize < total,
    hasPrevPage: page > 1,
  }
})

/**
 * Get related blog posts (by shared categories/tags)
 */
export async function getRelatedBlogPosts(
  currentPostId: string,
  categories: ProcessedCategory[],
  tags: string[],
  limit: number = 3
): Promise<BlogPostPreview[]> {
  if (categories.length === 0) {
    // No categories, just get latest posts
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'sys.id[ne]': currentPostId, // Exclude current post
      order: ['-fields.publishedDate'],
      limit,
      include: 2, // Include linked entries (author, categories, images)
    })
    return entries<BlogPostFields>(response).map(processBlogPostPreview)
  }

  // Get posts with at least one matching category
  const categoryIds = categories.map((cat) => cat.id)

  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.categories.sys.id[in]': categoryIds.join(','),
    'sys.id[ne]': currentPostId, // Exclude current post
    order: ['-fields.publishedDate'],
    limit: limit * 2, // Get more than we need for filtering
    include: 2, // Include linked entries (author, categories, images)
  })

  // Score posts by number of matching categories/tags
  const scoredPosts = entries<BlogPostFields>(response).map((item) => {
    let score = 0
    const postCategories = item.fields.categories || []
    const postTags = item.fields.tags || []

    // +1 for each matching category
    postCategories.forEach((cat) => {
      if (categoryIds.includes(cat.sys.id)) score++
    })

    // +0.5 for each matching tag
    postTags.forEach((tag) => {
      if (tags.includes(tag)) score += 0.5
    })

    return { item, score }
  })

  // Sort by score, then by date
  scoredPosts.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score
    return (
      new Date(b.item.fields.publishedDate).getTime() -
      new Date(a.item.fields.publishedDate).getTime()
    )
  })

  // Return top N
  return scoredPosts
    .slice(0, limit)
    .map((scored) => processBlogPostPreview(scored.item))
}

// ===== CATEGORY QUERIES =====

/**
 * Get all categories
 */
export const getAllCategories = cache(async (): Promise<ProcessedCategory[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'category',
    order: ['fields.name'],
  })

  return entries<CategoryFields>(response).map(processCategory)
})

/**
 * Get category by slug
 */
export const getCategoryBySlug = cache(async (
  slug: string
): Promise<ProcessedCategory | null> => {
  const response = await contentfulClient.getEntries({
    content_type: 'category',
    'fields.slug': slug,
    limit: 1,
  })

  if (response.items.length === 0) {
    return null
  }

  return processCategory(entries<CategoryFields>(response)[0])
})

/**
 * Get all category slugs (for static generation)
 */
export const getAllCategorySlugs = cache(async (): Promise<string[]> => {
  const response = await contentfulClient.getEntries({
    content_type: 'category',
    select: ['fields.slug'],
  })

  return entries<CategoryFields>(response).map((item) => item.fields.slug)
})
