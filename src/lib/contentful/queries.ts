import { contentfulClient } from './client'
import {
  BlogPostFields,
  CategoryFields,
  ProcessedBlogPost,
  BlogPostPreview,
  ProcessedCategory,
  PaginatedBlogPosts,
} from './types'
import {
  processBlogPost,
  processBlogPostPreview,
  processCategory,
} from './client'

// ===== BLOG POST QUERIES =====

/**
 * Get all blog posts (for sitemap, RSS, search index)
 */
export async function getAllBlogPosts(): Promise<BlogPostPreview[]> {
  const response = await contentfulClient.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
    limit: 1000, // Max limit
    include: 2, // Include linked entries (author, categories, images)
  })

  // Debug logging
  console.log(`Fetched ${response.items.length} blog posts from Contentful`)
  if (response.items.length > 0) {
    console.log('First blog post:', JSON.stringify(response.items[0], null, 2))
  }

  return response.items.map(processBlogPostPreview)
}

/**
 * Get paginated blog posts for listing page
 */
export async function getPaginatedBlogPosts(
  page: number = 1,
  pageSize: number = 9
): Promise<PaginatedBlogPosts> {
  const skip = (page - 1) * pageSize

  const response = await contentfulClient.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
    limit: pageSize,
    skip,
    include: 2, // Include linked entries (author, categories, images)
  })

  const posts = response.items.map(processBlogPostPreview)
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
}

/**
 * Get featured blog posts (for homepage)
 */
export async function getFeaturedBlogPosts(
  limit: number = 3
): Promise<BlogPostPreview[]> {
  const response = await contentfulClient.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    'fields.featured': true,
    order: ['-fields.publishedDate'],
    limit,
    include: 2, // Include linked entries (author, categories, images)
  })

  return response.items.map(processBlogPostPreview)
}

/**
 * Get single blog post by slug
 */
export async function getBlogPostBySlug(
  slug: string
): Promise<ProcessedBlogPost | null> {
  const response = await contentfulClient.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
    include: 2, // Include linked entries (author, categories, images)
  })

  if (response.items.length === 0) {
    return null
  }

  return processBlogPost(response.items[0])
}

/**
 * Get all blog post slugs (for static generation)
 */
export async function getAllBlogPostSlugs(): Promise<string[]> {
  const response = await contentfulClient.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    select: ['fields.slug'],
    limit: 1000,
  })

  return response.items.map((item) => item.fields.slug)
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(
  categorySlug: string,
  page: number = 1,
  pageSize: number = 9
): Promise<PaginatedBlogPosts> {
  // First, get the category
  const categoryResponse = await contentfulClient.getEntries<CategoryFields>({
    content_type: 'category',
    'fields.slug': categorySlug,
    limit: 1,
  })

  if (categoryResponse.items.length === 0) {
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

  const categoryId = categoryResponse.items[0].sys.id
  const skip = (page - 1) * pageSize

  // Get posts that reference this category
  const response = await contentfulClient.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    'fields.categories.sys.id': categoryId,
    order: ['-fields.publishedDate'],
    limit: pageSize,
    skip,
    include: 2, // Include linked entries (author, categories, images)
  })

  const posts = response.items.map(processBlogPostPreview)
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
}

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
    const response = await contentfulClient.getEntries<BlogPostFields>({
      content_type: 'blogPost',
      'sys.id[ne]': currentPostId, // Exclude current post
      order: ['-fields.publishedDate'],
      limit,
      include: 2, // Include linked entries (author, categories, images)
    })
    return response.items.map(processBlogPostPreview)
  }

  // Get posts with at least one matching category
  const categoryIds = categories.map((cat) => cat.id)

  const response = await contentfulClient.getEntries<BlogPostFields>({
    content_type: 'blogPost',
    'fields.categories.sys.id[in]': categoryIds.join(','),
    'sys.id[ne]': currentPostId, // Exclude current post
    order: ['-fields.publishedDate'],
    limit: limit * 2, // Get more than we need for filtering
    include: 2, // Include linked entries (author, categories, images)
  })

  // Score posts by number of matching categories/tags
  const scoredPosts = response.items.map((item) => {
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
export async function getAllCategories(): Promise<ProcessedCategory[]> {
  const response = await contentfulClient.getEntries<CategoryFields>({
    content_type: 'category',
    order: ['fields.name'],
  })

  return response.items.map(processCategory)
}

/**
 * Get category by slug
 */
export async function getCategoryBySlug(
  slug: string
): Promise<ProcessedCategory | null> {
  const response = await contentfulClient.getEntries<CategoryFields>({
    content_type: 'category',
    'fields.slug': slug,
    limit: 1,
  })

  if (response.items.length === 0) {
    return null
  }

  return processCategory(response.items[0])
}

/**
 * Get all category slugs (for static generation)
 */
export async function getAllCategorySlugs(): Promise<string[]> {
  const response = await contentfulClient.getEntries<CategoryFields>({
    content_type: 'category',
    select: ['fields.slug'],
  })

  return response.items.map((item) => item.fields.slug)
}
