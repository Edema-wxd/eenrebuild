'use client'

import { useState, useEffect } from 'react'
import { TOCHeading } from '@/lib/contentful/types'
import { List } from 'lucide-react'

interface TableOfContentsProps {
  headings: TOCHeading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    // Intersection Observer to track which heading is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    )

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Scroll listener for sticky behavior
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  if (headings.length === 0) return null

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`rounded-lg border border-gray-200 bg-white p-6 transition-all ${
        isSticky ? 'sticky top-24' : ''
      }`}
    >
      <div className="mb-4 flex items-center gap-2">
        <List className="h-5 w-5 text-[#1AA3DD]" />
        <h3 className="font-bold text-gray-900">Table of Contents</h3>
      </div>

      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={`w-full text-left text-sm transition-colors hover:text-[#1AA3DD] ${
                activeId === heading.id
                  ? 'font-semibold text-[#1AA3DD]'
                  : 'text-gray-600'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
