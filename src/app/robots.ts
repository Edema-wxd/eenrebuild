import { MetadataRoute } from 'next'
import { SITE_URL as siteUrl } from '@/lib/site'

// Generated as /robots.txt in both the static export (FTP) and on Vercel.
export const dynamic = 'force-static'

// Paths with no search value. /_next/ is deliberately NOT blocked: Google
// needs the JS/CSS bundles to render pages correctly.
const disallow = ['/api/']

// AI search and assistant crawlers. Allowed explicitly so EEN content can be
// cited in AI answers (ChatGPT, Claude, Perplexity, Gemini, Copilot).
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      { userAgent: aiCrawlers, allow: '/', disallow },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
