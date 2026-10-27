import { notFound } from 'next/navigation'
import BlogHero from '@/components/blog/BlogHero'
import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import { getBlogPostsByCategory, getCategoryBySlug } from '@/lib/contentful/queries'
import { BLOG_PAGE_SIZE } from '@/components/blog/BlogListing'

interface CategoryListingProps {
  categorySlug: string
  page: number
}

export default async function CategoryListing({
  categorySlug,
  page,
}: CategoryListingProps) {
  const pageSize = BLOG_PAGE_SIZE

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
