'use client'

import { BlogPostPreview } from '@/lib/contentful/types'
import { formatDate } from '@/utils/formatDate'
import { formatReadingTime } from '@/lib/blog/readingTime'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CategoryBadge from './CategoryBadge'

interface BlogCardProps {
  post: BlogPostPreview
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Hero Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <Image
            src={post.heroImage.url}
            alt={post.heroImage.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes={
              featured
                ? '(max-width: 768px) 100vw, 66vw'
                : '(max-width: 768px) 100vw, 33vw'
            }
          />

          {/* Featured badge */}
          {post.featured && (
            <div className="absolute left-4 top-4 rounded-full bg-[#1AA3DD] px-3 py-1 text-xs font-semibold text-white">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          {post.categories.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {post.categories.slice(0, 2).map((category) => (
                <CategoryBadge key={category.id} category={category} />
              ))}
            </div>
          )}

          {/* Title */}
          <h3
            className={`mb-2 font-bold text-gray-900 transition-colors group-hover:text-[#1AA3DD] ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
            }`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 line-clamp-3 text-gray-600">{post.excerpt}</p>

          {/* Meta info */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-3">
              {/* Author avatar */}
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <span className="font-medium text-gray-700">
                {post.author.name}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <time dateTime={post.publishedDate.toISOString()}>
                {formatDate(post.publishedDate)}
              </time>
              <span>•</span>
              <span>{formatReadingTime(post.readingTime)}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
