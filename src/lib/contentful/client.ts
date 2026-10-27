import { createClient } from 'contentful'
import {
  BlogPostFields,
  CategoryFields,
  AuthorFields,
  ContentfulEntry,
  ProcessedBlogPost,
  ProcessedCategory,
  ProcessedAuthor,
  BlogPostPreview,
} from './types'
import { calculateReadingTime } from '../blog/readingTime'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'

// Validate environment variables
const spaceId = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

if (!spaceId || !accessToken) {
  throw new Error(
    'CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be set in .env.local'
  )
}

// Create Contentful client
export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
})

// Preview client (for draft content - optional)
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
export const previewClient = previewToken
  ? createClient({
      space: spaceId,
      accessToken: previewToken,
      host: 'preview.contentful.com',
    })
  : null

// ===== HELPER FUNCTIONS =====

/**
 * Optimize Contentful image URL with WebP, resize, and quality parameters
 */
export function optimizeImageUrl(
  url: string,
  options: {
    width?: number
    height?: number
    quality?: number
    format?: 'webp' | 'jpg' | 'png'
  } = {}
): string {
  const { width, height, quality = 80, format = 'webp' } = options

  // Ensure URL starts with //
  const cleanUrl = url.startsWith('//') ? url : `//${url.replace(/^https?:\/\//, '')}`

  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  params.append('fm', format)
  params.append('q', quality.toString())
  params.append('fit', 'fill')

  return `${cleanUrl}?${params.toString()}`
}

/**
 * Process category entry into simplified format
 */
export function processCategory(
  entry: ContentfulEntry<CategoryFields>
): ProcessedCategory {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    slug: entry.fields.slug,
    description: entry.fields.description,
    color: entry.fields.color || '#1AA3DD', // Default to brand blue
  }
}

/**
 * Process author entry into simplified format
 */
export function processAuthor(entry: ContentfulEntry<AuthorFields>): ProcessedAuthor {
  const avatar = entry.fields.avatar

  return {
    id: entry.sys.id,
    name: entry.fields.name,
    slug: entry.fields.slug,
    bio: entry.fields.bio,
    avatar: avatar
      ? {
          url: optimizeImageUrl(avatar.fields.file?.url || '', {
            width: 400,
            height: 400,
          }),
          alt: avatar.fields.title || entry.fields.name,
        }
      : undefined,
    email: entry.fields.email,
    title: entry.fields.title,
  }
}

/**
 * Process blog post entry into full format
 */
export function processBlogPost(
  entry: ContentfulEntry<BlogPostFields>
): ProcessedBlogPost {
  const heroImage = entry.fields.heroImage
  const author = entry.fields.author
  const categories = entry.fields.categories || []

  // Validate required fields
  if (!heroImage?.fields?.file?.url) {
    throw new Error(`Blog post "${entry.fields.title}" is missing hero image. Please add a hero image in Contentful.`)
  }
  if (!author?.fields?.name) {
    throw new Error(`Blog post "${entry.fields.title}" is missing author. Please select an author in Contentful.`)
  }

  // Calculate reading time from content
  const plainText = documentToPlainTextString(entry.fields.content)
  const readingTime = calculateReadingTime(plainText)

  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    heroImage: {
      url: optimizeImageUrl(heroImage.fields.file.url, {
        width: 1200,
        height: 630,
      }),
      alt: heroImage.fields.title || entry.fields.title,
      width: heroImage.fields.file?.details?.image?.width || 1200,
      height: heroImage.fields.file?.details?.image?.height || 630,
    },
    content: entry.fields.content,
    author: processAuthor(author),
    categories: categories.map(processCategory),
    tags: entry.fields.tags || [],
    publishedDate: new Date(entry.fields.publishedDate),
    updatedDate: entry.fields.updatedDate
      ? new Date(entry.fields.updatedDate)
      : undefined,
    featured: entry.fields.featured || false,
    metaTitle: entry.fields.metaTitle || entry.fields.title,
    metaDescription: entry.fields.metaDescription || entry.fields.excerpt,
    readingTime,
  }
}

/**
 * Process blog post entry into preview format (for listings)
 */
export function processBlogPostPreview(
  entry: ContentfulEntry<BlogPostFields>
): BlogPostPreview {
  // Check if entry has fields
  if (!entry.fields) {
    console.error('Blog post entry has no fields:', entry)
    throw new Error(`Blog post entry ${entry.sys.id} has no fields. Make sure it's published in Contentful.`)
  }
  
  const heroImage = entry.fields.heroImage
  const author = entry.fields.author
  const categories = entry.fields.categories || []
  
  // Validate required fields with helpful error messages
  const title = entry.fields.title || 'Unknown Title'
  
  if (!entry.fields.title) {
    throw new Error(`Blog post ${entry.sys.id} is missing a title. Please add a title in Contentful.`)
  }
  if (!heroImage?.fields?.file?.url) {
    console.error('Blog post entry has no hero image:', entry)
    throw new Error(`Blog post "${title}" is missing a hero image. Please upload an image in the "Hero Image" field and make sure it's published.`)
  }
  if (!author?.fields?.name) {
    throw new Error(`Blog post "${title}" is missing an author. Please select an author in Contentful and make sure the author entry is published.`)
  }

  // Calculate reading time
  const plainText = documentToPlainTextString(entry.fields.content)
  const readingTime = calculateReadingTime(plainText)

  return {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    heroImage: {
      url: optimizeImageUrl(heroImage.fields.file.url, {
        width: 600,
        height: 400,
      }),
      alt: heroImage.fields.title || entry.fields.title,
    },
    author: {
      name: author.fields.name,
      avatar: author.fields.avatar?.fields?.file?.url
        ? optimizeImageUrl(author.fields.avatar.fields.file.url, {
            width: 100,
            height: 100,
          })
        : undefined,
    },
    categories: categories.map(processCategory),
    publishedDate: new Date(entry.fields.publishedDate),
    readingTime,
    featured: entry.fields.featured || false,
  }
}
