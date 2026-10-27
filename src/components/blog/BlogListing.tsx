import { Suspense } from 'react'
import BlogHero from '@/components/blog/BlogHero'
import BlogCard from '@/components/blog/BlogCard'
import Pagination from '@/components/blog/Pagination'
import SearchBar from '@/components/blog/SearchBar'
import CategoryFilter from '@/components/blog/CategoryFilter'
import { getPaginatedBlogPosts, getAllBlogPosts, getAllCategories } from '@/lib/contentful/queries'

export const BLOG_PAGE_SIZE = 9

interface BlogListingProps {
  page: number
}

export default async function BlogListing({ page }: BlogListingProps) {
  const pageSize = BLOG_PAGE_SIZE

  // Fetch paginated posts and all posts for search
  const [paginatedData, allPosts, categories] = await Promise.all([
    getPaginatedBlogPosts(page, pageSize),
    getAllBlogPosts(),
    getAllCategories(),
  ])

  const { posts, totalPages } = paginatedData

  // Separate featured posts
  const featuredPosts = posts.filter((p) => p.featured)
  const regularPosts = posts.filter((p) => !p.featured)

  return (
    <main>
      <BlogHero />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Categories */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <Suspense fallback={<div className="h-10 w-full max-w-md animate-pulse rounded-lg bg-gray-200" />}>
              <SearchBar posts={allPosts} />
            </Suspense>

            {/* Categories */}
            <CategoryFilter categories={categories} />
          </div>

          {/* Featured Posts */}
          {page === 1 && featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Featured Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {featuredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} featured />
                ))}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <>
              {page === 1 && featuredPosts.length > 0 && (
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Latest Articles
                </h2>
              )}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {regularPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}

          {/* No posts message */}
          {posts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-gray-600">
                No blog posts found. Check back soon!
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                basePath="/blog"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
