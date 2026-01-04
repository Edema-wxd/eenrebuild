'use client'

import { motion } from 'framer-motion'

interface BlogHeroProps {
  title?: string
  description?: string
}

export default function BlogHero({
  title = 'Blog',
  description = 'Insights on sustainability, energy efficiency, and green building solutions in Nigeria',
}: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1AA3DD]/10 to-[#73C167]/10 py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#1AA3DD]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#73C167]/20 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">{description}</p>
        </motion.div>
      </div>
    </section>
  )
}
