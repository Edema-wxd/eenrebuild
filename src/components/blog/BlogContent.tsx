'use client'

import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types'
import { generateHeadingId } from '@/lib/blog/generateTOC'
import Image from 'next/image'
import Link from 'next/link'
import CodeBlock from './CodeBlock'

interface BlogContentProps {
  content: Document
}

export default function BlogContent({ content }: BlogContentProps) {
  const renderOptions: Options = {
    renderNode: {
      // Headings with anchor IDs
      [BLOCKS.HEADING_2]: (node, children) => {
        const text = (children as string[])[0] || ''
        const id = generateHeadingId(text)
        return (
          <h2 id={id} className="mb-4 mt-8 scroll-mt-20 text-3xl font-bold text-gray-900">
            {children}
          </h2>
        )
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        const text = (children as string[])[0] || ''
        const id = generateHeadingId(text)
        return (
          <h3 id={id} className="mb-3 mt-6 scroll-mt-20 text-2xl font-bold text-gray-900">
            {children}
          </h3>
        )
      },
      [BLOCKS.HEADING_4]: (node, children) => {
        const text = (children as string[])[0] || ''
        const id = generateHeadingId(text)
        return (
          <h4 id={id} className="mb-2 mt-4 scroll-mt-20 text-xl font-bold text-gray-900">
            {children}
          </h4>
        )
      },

      // Paragraphs
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
      },

      // Lists
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700">{children}</ul>
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-700">{children}</ol>
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <li className="leading-relaxed">{children}</li>
      },

      // Quotes
      [BLOCKS.QUOTE]: (node, children) => {
        return (
          <blockquote className="my-6 border-l-4 border-[#1AA3DD] bg-gray-50 p-4 italic text-gray-700">
            {children}
          </blockquote>
        )
      },

      // Code blocks
      [BLOCKS.PARAGRAPH]: (node, children) => {
        // Check if this paragraph contains only code
        if (
          node.content.length === 1 &&
          node.content[0].nodeType === 'text' &&
          node.content[0].marks?.some((mark) => mark.type === 'code')
        ) {
          return (
            <CodeBlock code={node.content[0].value} language="javascript" />
          )
        }
        return <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
      },

      // Embedded assets (images)
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title, description } = node.data.target.fields
        const imageUrl = file?.url

        if (!imageUrl) return null

        // Optimize image URL
        const optimizedUrl = `${imageUrl}?w=1200&fm=webp&q=80`

        return (
          <figure className="my-8">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={optimizedUrl}
                alt={description || title || 'Blog image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            {(title || description) && (
              <figcaption className="mt-2 text-center text-sm text-gray-600">
                {description || title}
              </figcaption>
            )}
          </figure>
        )
      },

      // Hyperlinks
      [INLINES.HYPERLINK]: (node, children) => {
        const uri = node.data.uri
        const isExternal = uri.startsWith('http')

        return (
          <Link
            href={uri}
            className="font-medium text-[#1AA3DD] underline decoration-[#1AA3DD]/30 transition-colors hover:decoration-[#1AA3DD]"
            {...(isExternal && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            {children}
          </Link>
        )
      },
    },

    renderMark: {
      // Inline code
      code: (text) => {
        return (
          <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-[#1AA3DD]">
            {text}
          </code>
        )
      },
      // Bold
      bold: (text) => {
        return <strong className="font-bold text-gray-900">{text}</strong>
      },
      // Italic
      italic: (text) => {
        return <em className="italic">{text}</em>
      },
    },
  }

  return (
    <article className="prose prose-lg mx-auto max-w-none">
      {documentToReactComponents(content, renderOptions)}
    </article>
  )
}
