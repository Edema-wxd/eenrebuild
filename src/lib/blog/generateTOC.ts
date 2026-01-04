import { Document, Block, Inline } from '@contentful/rich-text-types'
import { BLOCKS } from '@contentful/rich-text-types'
import { TOCHeading } from '../contentful/types'

/**
 * Extract headings from Contentful rich text document to generate Table of Contents
 */
export function generateTableOfContents(document: Document): TOCHeading[] {
  const headings: TOCHeading[] = []

  function extractText(node: Block | Inline): string {
    if ('value' in node) {
      return node.value
    }

    if ('content' in node && Array.isArray(node.content)) {
      return node.content.map(extractText).join('')
    }

    return ''
  }

  function processNode(node: Block | Inline) {
    if (!('nodeType' in node)) return

    // Check if it's a heading
    if (
      node.nodeType === BLOCKS.HEADING_2 ||
      node.nodeType === BLOCKS.HEADING_3 ||
      node.nodeType === BLOCKS.HEADING_4
    ) {
      const text = extractText(node)
      const level =
        node.nodeType === BLOCKS.HEADING_2
          ? 2
          : node.nodeType === BLOCKS.HEADING_3
          ? 3
          : 4

      // Create URL-friendly ID
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()

      headings.push({ id, text, level })
    }

    // Recursively process children
    if ('content' in node && Array.isArray(node.content)) {
      node.content.forEach(processNode)
    }
  }

  document.content.forEach(processNode)

  return headings
}

/**
 * Generate heading IDs for anchor links
 */
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
