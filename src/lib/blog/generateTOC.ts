import { Document, Block, Inline, Text } from '@contentful/rich-text-types'
import { BLOCKS } from '@contentful/rich-text-types'
import { TOCHeading } from '../contentful/types'

/**
 * Extract the plain text of a rich text node, joining all text runs
 * (so 'Solar **Benefits**' yields 'Solar Benefits')
 */
export function extractNodeText(node: Block | Inline | Text): string {
  if (node.nodeType === 'text') {
    return node.value
  }

  return node.content.map(extractNodeText).join('')
}

/**
 * Get the anchor ID for a heading node. Used by both the TOC and the
 * heading renderers so links and anchors always match.
 */
export function getHeadingId(node: Block | Inline | Text): string {
  return generateHeadingId(extractNodeText(node))
}

/**
 * Extract headings from Contentful rich text document to generate Table of Contents
 */
export function generateTableOfContents(document: Document): TOCHeading[] {
  const headings: TOCHeading[] = []

  function processNode(node: Block | Inline | Text) {
    if (node.nodeType === 'text') return

    // Check if it's a heading
    if (
      node.nodeType === BLOCKS.HEADING_2 ||
      node.nodeType === BLOCKS.HEADING_3 ||
      node.nodeType === BLOCKS.HEADING_4
    ) {
      const text = extractNodeText(node)
      const level =
        node.nodeType === BLOCKS.HEADING_2
          ? 2
          : node.nodeType === BLOCKS.HEADING_3
          ? 3
          : 4

      // Create URL-friendly ID (same derivation as BlogContent anchors)
      const id = generateHeadingId(text)

      headings.push({ id, text, level })
    }

    // Recursively process children
    node.content.forEach(processNode)
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
