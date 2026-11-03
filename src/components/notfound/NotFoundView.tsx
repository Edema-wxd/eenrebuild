'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Droplets,
  Gauge,
  Home,
  Leaf,
  Mail,
  Sun,
} from 'lucide-react'

export interface RecentPostLink {
  slug: string
  title: string
  date: string
  category?: { name: string; color: string }
}

interface NotFoundViewProps {
  recentPosts?: RecentPostLink[]
  // Force a variant; otherwise it's inferred from the URL after mount
  variant?: 'site' | 'blog'
}

const siteLinks = [
  { href: '/services/solar', label: 'Solar Energy', icon: Sun, color: 'text-[#FFA500] bg-orange-50' },
  { href: '/services/water-solutions', label: 'Water Solutions', icon: Droplets, color: 'text-[#00A8E8] bg-sky-50' },
  { href: '/services/smart-metering', label: 'Smart Metering', icon: Gauge, color: 'text-[#6B46C1] bg-purple-50' },
  { href: '/edge-building', label: 'EDGE Certification', icon: Leaf, color: 'text-[#00A651] bg-green-50' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function NotFoundView({ recentPosts = [], variant }: NotFoundViewProps) {
  const pathname = usePathname()
  // The static 404.html is prerendered without knowing the requested URL,
  // so the blog variant is only chosen after mount to avoid a hydration mismatch
  const [isBlog, setIsBlog] = useState(variant === 'blog')

  useEffect(() => {
    if (!variant) setIsBlog(window.location.pathname.startsWith('/blog'))
  }, [variant, pathname])

  return (
    <main className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#1AA3DD] opacity-10 blur-3xl" />
        <div className="animate-blob absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#73C167] opacity-10 blur-3xl [animation-delay:2s]" />
      </div>

      <section className="relative py-16 md:py-24">
        <motion.div
          className="container mx-auto max-w-3xl px-4 text-center md:px-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={fadeUp}
            className="bg-gradient-to-r from-[#1AA3DD] to-[#73C167] bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl"
          >
            404
          </motion.p>

          <motion.h1 variants={fadeUp} className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {isBlog ? 'Article Not Found' : 'Page Not Found'}
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-base text-gray-600 md:text-lg">
            {isBlog
              ? "This article may have been moved, renamed or unpublished. Browse the latest insights below or head back to the blog."
              : "The page you're looking for doesn't exist or has moved. Let's get you back to sustainable solutions."}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {isBlog ? (
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-md bg-[#1AA3DD] px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#1590c4]"
              >
                <ArrowLeft className="h-5 w-5" />
                Back to Blog
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-md bg-[#1AA3DD] px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#1590c4]"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            )}
            <Link
              href={isBlog ? '/' : '/contact-us'}
              className="inline-flex items-center gap-2 rounded-md border-2 border-[#1AA3DD] px-6 py-3 font-semibold text-[#1AA3DD] transition-colors hover:bg-[#1AA3DD] hover:text-white"
            >
              {isBlog ? <Home className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
              {isBlog ? 'Go to Homepage' : 'Contact Us'}
            </Link>
          </motion.div>
        </motion.div>

        <div className="container relative mx-auto mt-16 max-w-4xl px-4 md:px-6">
          {isBlog && recentPosts.length > 0 ? (
            <div>
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-900 md:text-2xl">
                <BookOpen className="h-6 w-6 text-[#1AA3DD]" />
                Latest Articles
              </h2>
              <ul className="divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                {recentPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex items-center justify-between gap-4 p-4 transition-colors hover:bg-gray-50 md:p-5"
                    >
                      <div className="min-w-0">
                        <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                          {post.category && (
                            <span
                              className="rounded-full px-2 py-0.5 font-semibold text-white"
                              style={{ backgroundColor: post.category.color }}
                            >
                              {post.category.name}
                            </span>
                          )}
                          <span>{post.date}</span>
                        </div>
                        <p className="font-medium text-gray-900 group-hover:text-[#1AA3DD]">{post.title}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#1AA3DD]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2 className="mb-6 text-center text-xl font-semibold text-gray-900 md:text-2xl">
                Popular Destinations
              </h2>
              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                {siteLinks.map(({ href, label, icon: Icon, color }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-center text-sm shadow-sm md:p-5 md:text-base transition-all hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full ${color}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-medium text-gray-900 group-hover:text-[#1AA3DD]">{label}</span>
                  </Link>
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-gray-600">
                Looking for insights?{' '}
                <Link href="/blog" className="font-medium text-[#1AA3DD] hover:underline">
                  Read our blog
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
