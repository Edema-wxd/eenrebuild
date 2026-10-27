import { Document } from '@contentful/rich-text-types'

// ===== CONTENTFUL TYPES =====

// Shapes of entries as returned by getEntries with `include: 2` (links resolved).
// The SDK's skeleton generics don't model resolved links cleanly, so responses
// are cast to these at the query layer.
export interface ContentfulEntry<TFields> {
  sys: { id: string }
  fields: TFields
}

export interface ContentfulAsset {
  fields: {
    title?: string
    file?: {
      url: string
      details?: { image?: { width: number; height: number } }
    }
  }
}

export interface BlogPostFields {
  title: string
  slug: string
  excerpt: string
  heroImage: ContentfulAsset
  content: Document
  author: ContentfulEntry<AuthorFields>
  categories: ContentfulEntry<CategoryFields>[]
  tags?: string[]
  publishedDate: string
  updatedDate?: string
  featured?: boolean
  metaTitle?: string
  metaDescription?: string
}

export interface CategoryFields {
  name: string
  slug: string
  description?: string
  color?: string
}

export interface AuthorFields {
  name: string
  slug: string
  bio?: string
  avatar?: ContentfulAsset
  email?: string
  title?: string
}

// ===== PROCESSED TYPES (for use in components) =====

export interface ProcessedBlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  heroImage: {
    url: string
    alt: string
    width: number
    height: number
  }
  content: Document
  author: ProcessedAuthor
  categories: ProcessedCategory[]
  tags: string[]
  publishedDate: Date
  updatedDate?: Date
  featured: boolean
  metaTitle: string
  metaDescription: string
  readingTime: number // in minutes
}

export interface ProcessedCategory {
  id: string
  name: string
  slug: string
  description?: string
  color: string
}

export interface ProcessedAuthor {
  id: string
  name: string
  slug: string
  bio?: string
  avatar?: {
    url: string
    alt: string
  }
  email?: string
  title?: string
}

// ===== LISTING TYPES =====

export interface BlogPostPreview {
  id: string
  title: string
  slug: string
  excerpt: string
  heroImage: {
    url: string
    alt: string
  }
  author: {
    name: string
    avatar?: string
  }
  categories: ProcessedCategory[]
  publishedDate: Date
  readingTime: number
  featured: boolean
}

export interface PaginatedBlogPosts {
  posts: BlogPostPreview[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

// ===== TABLE OF CONTENTS =====

export interface TOCHeading {
  id: string
  text: string
  level: number
}
