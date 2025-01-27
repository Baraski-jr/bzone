import { wixClientServer } from "@/lib/wix/ClientServer"

interface CollectionFilters {
  limit?: number
  exclude?: string
}

interface ProductsFilters {
  limit?: number
  slug?: string
  collectionId?: string
}

export const queryCollections = async ({
  limit,
  exclude,
}: CollectionFilters = {}) => {
  const wixCient = await wixClientServer()
  let query = wixCient.collections.queryCollections()

  if (limit) {
    query = query.limit(limit)
  }
  if (exclude) {
    query = query.ne("name", [exclude])
  }

  const { items } = await query.find()

  return items
}

export const queryProducts = async ({
  slug,
  limit,
  collectionId,
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
  const { items } = await query.find()
  return items
}
