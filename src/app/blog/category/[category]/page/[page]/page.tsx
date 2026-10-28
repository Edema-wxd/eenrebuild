import { notFound, redirect } from 'next/navigation'
import CategoryListing from '@/components/blog/CategoryListing'
import { BLOG_PAGE_SIZE } from '@/components/blog/BlogListing'
import {
  getAllCategorySlugs,
  getBlogPostsByCategory,
  getCategoryBySlug,
} from '@/lib/contentful/queries'

export const dynamicParams = false

interface CategoryPaginatedPageProps {
  params: Promise<{ category: string; page: string }>
}

export async function generateMetadata({ params }: CategoryPaginatedPageProps) {
  const { category: categorySlug, page } = await params
  const category = await getCategoryBySlug(categorySlug)

  if (!category) {
    return { title: 'Category Not Found | EEN Consulting' }
  }

  return {
    title: `${category.name} Articles - Page ${page} | EEN Consulting Blog`,
    description:
      category.description ||
      `Browse articles about ${category.name.toLowerCase()} from EEN Consulting`,
  }
}

export default async function CategoryPaginatedPage({
  params,
}: CategoryPaginatedPageProps) {
  const { category, page } = await params
  const pageNumber = Number(page)
  if (pageNumber === 1) redirect(`/blog/category/${category}`)
  if (!Number.isInteger(pageNumber) || pageNumber < 1) notFound()

  return <CategoryListing categorySlug={category} page={pageNumber} />
}

// Page 1 redirects to /blog/category/[category], but is always generated
// because static export rejects a dynamic route with no params
export async function generateStaticParams() {
  const categorySlugs = await getAllCategorySlugs()

  const params = await Promise.all(
    categorySlugs.map(async (category) => {
      const { totalPages } = await getBlogPostsByCategory(category, 1, BLOG_PAGE_SIZE)
      return Array.from({ length: Math.max(totalPages, 1) }, (_, i) => ({
        category,
        page: String(i + 1),
      }))
    })
  )

  return params.flat()
}
