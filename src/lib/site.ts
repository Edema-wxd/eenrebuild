// Public site URL, used for absolute links (sitemap, RSS, canonical/OG URLs).
// Set NEXT_PUBLIC_SITE_URL per environment; the fallback is the production domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://eenconsult.com.ng'
).replace(/\/$/, '')

export const CONTACT_EMAIL = 'info@eenconsult.com.ng'
