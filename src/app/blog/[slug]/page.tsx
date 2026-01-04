import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getBlogPostBySlug, getAllBlogPostSlugs, getRelatedBlogPosts } from '@/lib/contentful/queries'
import { formatDate } from '@/utils/formatDate'
import { formatReadingTime } from '@/lib/blog/readingTime'
import { generateTableOfContents } from '@/lib/blog/generateTOC'
import BlogContent from '@/components/blog/BlogContent'
import TableOfContents from '@/components/blog/TableOfContents'
import ShareButtons from '@/components/blog/ShareButtons'
import RelatedPosts from '@/components/blog/RelatedPosts'
import CategoryBadge from '@/components/blog/CategoryBadge'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found | EEN Consulting',
    }
  }

  return {
    title: `${post.metaTitle} | EEN Consulting Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [
        {
          url: post.heroImage.url,
          width: post.heroImage.width,
          height: post.heroImage.height,
          alt: post.heroImage.alt,
        },
      ],
      type: 'article',
      publishedTime: post.publishedDate.toISOString(),
      ...(post.updatedDate && {
        modifiedTime: post.updatedDate.toISOString(),
      }),
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage.url],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Generate table of contents
  const tableOfContents = generateTableOfContents(post.content)

  // Get related posts
  const relatedPosts = await getRelatedBlogPosts(
    post.id,
    post.categories,
    post.tags,
    3
  )

  // Build full URL for sharing
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eenconsulting.ng'
  const postUrl = `${siteUrl}/blog/${post.slug}`

  return (
    <main>
      {/* Back to blog */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#1AA3DD]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Article header */}
          <header className="mx-auto mb-12 max-w-4xl">
            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <CategoryBadge key={category.id} category={category} clickable={false} />
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mb-6 text-xl text-gray-600">{post.excerpt}</p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              {/* Author */}
              <div className="flex items-center gap-2">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar.url}
                    alt={post.author.avatar.alt}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div className="font-medium text-gray-900">{post.author.name}</div>
                  {post.author.title && (
                    <div className="text-xs text-gray-500">{post.author.title}</div>
                  )}
                </div>
              </div>

              <span className="text-gray-400">•</span>

              {/* Published date */}
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedDate.toISOString()}>
                  {formatDate(post.publishedDate)}
                </time>
              </div>

              <span className="text-gray-400">•</span>

              {/* Reading time */}
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {formatReadingTime(post.readingTime)}
              </div>
            </div>

            {/* Share buttons */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <ShareButtons
                title={post.title}
                url={postUrl}
                description={post.excerpt}
              />
            </div>
          </header>

          {/* Hero image */}
          <div className="mx-auto mb-12 max-w-5xl">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={post.heroImage.url}
                alt={post.heroImage.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>

          {/* Article body with TOC */}
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_300px]">
            {/* Main content */}
            <div className="min-w-0">
              <BlogContent content={post.content} />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">Tags:</span>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author bio */}
              {post.author.bio && (
                <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <div className="flex items-start gap-4">
                    {post.author.avatar && (
                      <Image
                        src={post.author.avatar.url}
                        alt={post.author.avatar.alt}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">
                        {post.author.name}
                      </h3>
                      {post.author.title && (
                        <p className="mb-2 text-sm font-medium text-[#1AA3DD]">
                          {post.author.title}
                        </p>
                      )}
                      <p className="text-gray-700">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              {tableOfContents.length > 0 && (
                <TableOfContents headings={tableOfContents} />
              )}
            </aside>
          </div>

          {/* Related posts */}
          <div className="mx-auto max-w-7xl">
            <RelatedPosts posts={relatedPosts} />
          </div>
        </div>
      </article>
    </main>
  )
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs()

  return slugs.map((slug) => ({
    slug,
  }))
}
