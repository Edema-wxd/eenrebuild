import { MetadataRoute } from 'next'
import {
  getAllBlogPostSlugs,
  getAllCategorySlugs,
  getBlogPostsByCategory,
  getPaginatedBlogPosts,
} from '@/lib/contentful/queries'
import { BLOG_PAGE_SIZE } from '@/components/blog/BlogListing'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eenconsulting.ng'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/solar',
    '/services/water-solutions',
    '/services/smart-metering',
    '/edge-building',
    '/partners',
    '/contact-us',
    '/wihcn',
    '/blog',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Blog post pages
  const blogSlugs = await getAllBlogPostSlugs()
  const blogPages = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Category pages
  const categorySlugs = await getAllCategorySlugs()
  const categoryPages = categorySlugs.map((slug) => ({
    url: `${siteUrl}/blog/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Paginated listing pages (page 1 redirects to the base listing, so start at 2)
  const pageNumbers = (totalPages: number) =>
    Array.from({ length: Math.max(totalPages - 1, 0) }, (_, i) => i + 2)

  const { totalPages: blogTotalPages } = await getPaginatedBlogPosts(1, BLOG_PAGE_SIZE)
  const blogListingPages = pageNumbers(blogTotalPages).map((page) => ({
    url: `${siteUrl}/blog/page/${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  const categoryListingPages = (
    await Promise.all(
      categorySlugs.map(async (slug) => {
        const { totalPages } = await getBlogPostsByCategory(slug, 1, BLOG_PAGE_SIZE)
        return pageNumbers(totalPages).map((page) => ({
          url: `${siteUrl}/blog/category/${slug}/page/${page}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.4,
        }))
      })
    )
  ).flat()

  return [
    ...staticPages,
    ...blogPages,
    ...categoryPages,
    ...blogListingPages,
    ...categoryListingPages,
  ]
}
