import { collections } from "@wix/stores"
import { wixClientServer } from "@/lib/wix/ClientServer"

interface CollectionFilters {
  limit?: number
  exclude?: string
  include?: string
}

interface ProductsFilters {
  limit?: number
  slug?: string
  collectionId?: string
  max?: number
  min?: number
  sort?: any
  pageNumber?: any
}
// Fetch category
export const querySingleCollectionBySlug = async ({
  slug,
}: {
  slug: string
}) => {
  const wixCient = await wixClientServer()
  const { collection } = await wixCient.collections.getCollectionBySlug(slug)
  return collection
}

export const queryCollections = async ({
  limit,
  exclude,
}: CollectionFilters = {}) => {
  const wixCient = await wixClientServer()
  let query = wixCient.collections.queryCollections()

  if (limit) query = query.limit(limit)

  if (exclude) query = query.ne("name", [exclude])

  const { items } = await query.find()
  return items
}

export const queryProducts = async ({
  slug,
  limit,
  collectionId,
  max,
  min,
  sort,
  pageNumber,
}: ProductsFilters = {}) => {
  const wixClient = await wixClientServer()

  let query = wixClient.products.queryProducts()

  if (limit) {
    query = query.limit(limit)
  }
  if (slug) {
    query = query.eq("slug", slug)
  }
  if (collectionId) {
    query = query.eq("collectionIds", collectionId)
  }

  // Added
  if (max) {
    query = query.lt("priceData.price", max || 999999)
  }
  if (min) {
    query = query.gt("priceData.price", min || 0)
  }

  if (pageNumber) {
    console.log(pageNumber)
    query.skip(pageNumber ? parseInt(pageNumber) * (limit ? limit : 8) : 0)
  }
  // Sorting

  if (sort) {
    const [sortType, sortBy] = sort.split(" ")
    if (sortType === "asc") query.ascending()
    if (sortType === "desc") query.descending(sortBy)
  }
  const items = await query.find()
  return items
}
