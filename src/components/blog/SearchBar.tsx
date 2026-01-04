'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { BlogPostPreview } from '@/lib/contentful/types'
import { createSearchIndex, searchPosts } from '@/lib/blog/searchIndex'
import Link from 'next/link'
import { formatDate } from '@/utils/formatDate'
import FlexSearch from 'flexsearch'

interface SearchBarProps {
  posts: BlogPostPreview[]
}

export default function SearchBar({ posts }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<BlogPostPreview[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [searchIndex, setSearchIndex] = useState<{
    index: FlexSearch.Index
    posts: BlogPostPreview[]
  } | null>(null)

  // Initialize search index
  useEffect(() => {
    const { index, posts: indexedPosts } = createSearchIndex(posts)
    setSearchIndex({ index, posts: indexedPosts })
  }, [posts])

  // Perform search
  useEffect(() => {
    if (!searchIndex || !query.trim()) {
      setResults([])
      setIsOpen(false)
      return
    }

    const searchResults = searchPosts(query, searchIndex.index, searchIndex.posts, 5)
    const resultPosts = searchResults.map((result) =>
      searchIndex.posts.find((p) => p.id === result.id)
    ).filter((p): p is BlogPostPreview => p !== undefined)

    setResults(resultPosts)
    setIsOpen(resultPosts.length > 0)
  }, [query, searchIndex])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleClear = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-10 focus:border-[#1AA3DD] focus:outline-none focus:ring-2 focus:ring-[#1AA3DD]/20"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search results dropdown */}
      {isOpen && results.length > 0 && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Results */}
          <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-xl">
            <div className="p-2">
              {results.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="block rounded-lg p-3 transition-colors hover:bg-gray-50"
                  onClick={() => {
                    setIsOpen(false)
                    setQuery('')
                  }}
                >
                  <h4 className="mb-1 font-semibold text-gray-900">
                    {post.title}
                  </h4>
                  <p className="mb-2 line-clamp-2 text-sm text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.author.name}</span>
                    <span>•</span>
                    <time>{formatDate(post.publishedDate)}</time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
