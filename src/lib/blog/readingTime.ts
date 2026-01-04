/**
 * Calculate reading time in minutes
 * Average reading speed: 200-250 words per minute
 * We use 225 as middle ground
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 225
  const wordCount = text.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)

  return minutes
}

/**
 * Format reading time for display
 */
export function formatReadingTime(minutes: number): string {
  if (minutes < 1) return '< 1 min read'
  if (minutes === 1) return '1 min read'
  return `${minutes} min read`
}
