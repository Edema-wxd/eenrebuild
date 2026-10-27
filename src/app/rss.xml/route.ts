import { getAllBlogPosts } from '@/lib/contentful/queries'
import { Feed } from 'feed'

export const dynamic = 'force-static'

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eenconsulting.ng'
  const posts = await getAllBlogPosts()

  const feed = new Feed({
    title: 'EEN Consulting Blog',
    description:
      'Expert insights on solar energy, water conservation, EDGE certification, and sustainable building practices in Nigeria',
    id: siteUrl,
    link: siteUrl,
    language: 'en',
    image: `${siteUrl}/logos/een-logo.svg`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, EEN Consulting`,
    feedLinks: {
      rss: `${siteUrl}/rss.xml`,
    },
    author: {
      name: 'EEN Consulting',
      email: 'info@eenconsulting.ng',
      link: siteUrl,
    },
  })

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.excerpt,
      content: post.excerpt, // You could render full content here if needed
      author: [
        {
          name: post.author.name,
        },
      ],
      category: post.categories.map((cat) => ({
        name: cat.name,
      })),
      date: post.publishedDate,
      // Contentful image URLs are protocol-relative (//images.ctfassets.net/...)
      image: post.heroImage.url.startsWith('//')
        ? `https:${post.heroImage.url}`
        : post.heroImage.url,
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
