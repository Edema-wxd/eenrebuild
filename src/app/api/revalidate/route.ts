import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Contentful webhook target: called on entry publish/unpublish so the blog,
// RSS feed and sitemap regenerate immediately instead of waiting for the
// hourly revalidate. Vercel only: the static export (FTP) skips it.
export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET

  if (!secret || request.headers.get('x-revalidate-secret') !== secret) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  revalidatePath('/', 'layout')

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
