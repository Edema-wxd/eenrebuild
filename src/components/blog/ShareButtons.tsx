'use client'

import { Facebook, Twitter, Linkedin, Link2, Mail } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  url: string
  description?: string
}

export default function ShareButtons({
  title,
  url,
  description = '',
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
    email: `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(`${description}\n\n${url}`)}`,
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const buttonClass =
    'flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400'

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-gray-700">Share:</span>

      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
        <span className="hidden sm:inline">Twitter</span>
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
        <span className="hidden sm:inline">Facebook</span>
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>

      {/* Email */}
      <a
        href={shareLinks.email}
        className={buttonClass}
        aria-label="Share via Email"
      >
        <Mail className="h-4 w-4" />
        <span className="hidden sm:inline">Email</span>
      </a>

      {/* Copy link */}
      <button
        onClick={handleCopyLink}
        className={buttonClass}
        aria-label="Copy link"
      >
        <Link2 className="h-4 w-4" />
        <span className="hidden sm:inline">
          {copied ? 'Copied!' : 'Copy link'}
        </span>
      </button>
    </div>
  )
}
