'use client'

import { BlogPostPreview } from '@/lib/contentful/types'
import { formatDate } from '@/utils/formatDate'
import { formatReadingTime } from '@/lib/blog/readingTime'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface RelatedPostsProps {
  posts: BlogPostPreview[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-16 border-t border-gray-200 pt-16">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">Related Articles</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={post.heroImage.url}
                  alt={post.heroImage.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="mb-2 line-clamp-2 font-bold text-gray-900 transition-colors group-hover:text-[#1AA3DD]">
                  {post.title}
                </h3>

                <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <time>{formatDate(post.publishedDate)}</time>
                  <span>•</span>
                  <span>{formatReadingTime(post.readingTime)}</span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
