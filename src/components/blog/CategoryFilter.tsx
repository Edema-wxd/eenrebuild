'use client'

import { ProcessedCategory } from '@/lib/contentful/types'
import CategoryBadge from './CategoryBadge'
import Link from 'next/link'

interface CategoryFilterProps {
  categories: ProcessedCategory[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold text-gray-700">Filter:</span>
      <Link
        href="/blog"
        className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50"
      >
        All
      </Link>
      {categories.map((category) => (
        <CategoryBadge key={category.id} category={category} />
      ))}
    </div>
  )
}
