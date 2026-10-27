'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string // e.g., '/blog' or '/blog/category/solar'
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null

  // Path-based pages so they work with static export (query strings aren't pre-rendered)
  const pageHref = (page: number) =>
    page === 1 ? basePath : `${basePath}/page/${page}`

  const pages: (number | '...')[] = []

  // Always show first page
  pages.push(1)

  // Add pages around current page
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    if (pages[pages.length - 1] !== i - 1 && i !== 2) {
      pages.push('...')
    }
    pages.push(i)
  }

  // Always show last page
  if (totalPages > 1) {
    if (pages[pages.length - 1] !== totalPages - 1 && totalPages !== 2) {
      pages.push('...')
    }
    pages.push(totalPages)
  }

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      {/* Previous button */}
      {currentPage > 1 ? (
        <Link
          href={pageHref(currentPage - 1)}
          className="flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-400"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
                ...
              </span>
            )
          }

          const isCurrentPage = page === currentPage

          return (
            <Link
              key={page}
              href={pageHref(page)}
              className={`min-w-[40px] rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors ${
                isCurrentPage
                  ? 'bg-[#1AA3DD] text-white'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              aria-current={isCurrentPage ? 'page' : undefined}
            >
              {page}
            </Link>
          )
        })}
      </div>

      {/* Next button */}
      {currentPage < totalPages ? (
        <Link
          href={pageHref(currentPage + 1)}
          className="flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-400"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </nav>
  )
}
