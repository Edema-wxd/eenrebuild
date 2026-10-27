import { notFound } from 'next/navigation'
import BlogHero from '@/components/blog/BlogHero'
import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import {
  getBlogPostsByCategory,
  getCategoryBySlug,
  getAllCategorySlugs,
} from '@/lib/contentful/queries'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = await getCategoryBySlug(categorySlug)

  if (!category) {
    return {
      title: 'Category Not Found | EEN Consulting',
    }
  }

  return {
    title: `${category.name} Articles | EEN Consulting Blog`,
    description:
      category.description ||
      `Browse articles about ${category.name.toLowerCase()} from EEN Consulting`,
  }
}

interface CategoryPageProps {
  params: Promise<{ category: string }>
  searchParams: Promise<{ page?: string }>
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category: categorySlug } = await params
  const { page: pageParam } = await searchParams
  const page = Number(pageParam) || 1
  const pageSize = 9

  // Fetch category and posts
  const [category, paginatedData] = await Promise.all([
    getCategoryBySlug(categorySlug),
    getBlogPostsByCategory(categorySlug, page, pageSize),
  ])

  if (!category) {
    notFound()
  }

  const { posts, totalPages } = paginatedData

  return (
    <main>
      <BlogHero
        title={category.name}
        description={category.description || `Articles about ${category.name.toLowerCase()}`}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {posts.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    basePath={`/blog/category/${categorySlug}`}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-gray-600">
                No articles found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const categorySlugs = await getAllCategorySlugs()

  return categorySlugs.map((category) => ({
    category,
  }))
}
