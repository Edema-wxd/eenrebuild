import { ProcessedCategory } from '@/lib/contentful/types'
import Link from 'next/link'

interface CategoryBadgeProps {
  category: ProcessedCategory
  clickable?: boolean
}

export default function CategoryBadge({
  category,
  clickable = true,
}: CategoryBadgeProps) {
  const badge = (
    <span
      className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white transition-opacity hover:opacity-80"
      style={{ backgroundColor: category.color }}
    >
      {category.name}
    </span>
  )

  if (!clickable) {
    return badge
  }

  return (
    <Link href={`/blog/category/${category.slug}`} onClick={(e) => e.stopPropagation()}>
      {badge}
    </Link>
  )
}
