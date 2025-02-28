import { wixClientServer } from "@/lib/wix/ClientServer"
import { products } from "@wix/stores"

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
  // sort?: any
  pageNumber?: number
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
// Fetch category
export const querySingleCollectionById = async ({
  collectionId,
}: {
  collectionId: string
}) => {
  const wixCient = await wixClientServer()
  const collection = await wixCient.collections.getCollection(collectionId)
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
  // sort,
  pageNumber,
}: ProductsFilters = {}) => {
  const wixClient = await wixClientServer()

  let query = wixClient.products.queryProducts()

  if (limit) query = query.limit(limit)
  if (slug) query = query.eq("slug", slug)
  if (collectionId) query = query.eq("collectionIds", collectionId)

  // Added
  if (max) query = query.lt("priceData.price", max || 999999)
  if (min) query = query.gt("priceData.price", min || 0)

  if (pageNumber) {
    query = query.skip(pageNumber)
  }

  // Sorting

  // if (sort) {
  //   const [sortType, sortBy] = sort.split(" ")
  //   if (sortType === "asc") query.ascending(sortBy)
  //   if (sortType === "desc") query.descending(sortBy)
  // }
  const products = await query.find()
  return products
}

export async function getSingleProduct({ id }: { id: string }) {
  const wixCient = await wixClientServer()
  const response = await wixCient.products.getProduct(id)
  const productId = response.product?._id
  const prodctName = response.product?.name
  const images = response.product?.media?.mainMedia?.image?.url
  return { productId, prodctName, images }
}
