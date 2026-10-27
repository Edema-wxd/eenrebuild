import { MetadataRoute } from 'next'
import { getAllBlogPostSlugs, getAllCategorySlugs } from '@/lib/contentful/queries'

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

  return [...staticPages, ...blogPages, ...categoryPages]
}
