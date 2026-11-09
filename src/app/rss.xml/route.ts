import { getAllBlogPosts } from '@/lib/contentful/queries'
import { Feed } from 'feed'
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'
// Regenerate at most hourly on Vercel (ISR); Contentful publishes also
// trigger /api/revalidate. Ignored by the static export.
export const revalidate = 3600

export async function GET() {
  const siteUrl = SITE_URL
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
      email: CONTACT_EMAIL,
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
      // Pass an explicit type: `feed` would otherwise infer it from the file
      // extension, but optimizeImageUrl serves WebP (fm=webp) by default
      image: {
        url: post.heroImage.url,
        type: 'image/webp',
      },
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
