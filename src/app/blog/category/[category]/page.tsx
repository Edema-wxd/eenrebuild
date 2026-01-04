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
  params: { category: string }
}) {
  const category = await getCategoryBySlug(params.category)

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
  params: { category: string }
  searchParams: { page?: string }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const page = Number(searchParams.page) || 1
  const pageSize = 9

  // Fetch category and posts
  const [category, paginatedData] = await Promise.all([
    getCategoryBySlug(params.category),
    getBlogPostsByCategory(params.category, page, pageSize),
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
                    basePath={`/blog/category/${params.category}`}
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
