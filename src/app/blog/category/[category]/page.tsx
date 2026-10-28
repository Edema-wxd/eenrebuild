import CategoryListing from '@/components/blog/CategoryListing'
import { getCategoryBySlug, getAllCategorySlugs } from '@/lib/contentful/queries'

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
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  return <CategoryListing categorySlug={category} page={1} />
}

// Generate static paths for all categories
export async function generateStaticParams() {
  const categorySlugs = await getAllCategorySlugs()

  return categorySlugs.map((category) => ({
    category,
  }))
}
