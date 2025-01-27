import { wixClientServer } from "../wix/ClientServer"

// Use hook to fetch data
const wixClient = await wixClientServer()

// Fetch category
export const getCategory = async ({ categoryId }: { categoryId: string }) => {
  // Added wixClient Temporary
  return await wixClient.collections.getCollection(categoryId)
}

// Fetch category
export const getCollectionBySlug = async ({ slug }: { slug: string }) => {
  return await wixClient.collections.getCollectionBySlug(slug)
}

// Fetch products
export const getProducts = async ({
  categoryId,
  PRODUCT_PER_PAGE = 8,
}: {
  categoryId: string
  PRODUCT_PER_PAGE?: number
}) => {
  const response = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(PRODUCT_PER_PAGE)
    .find()

  return response
}

// Fetch single product

export async function getSingleProduct({ slug }: { slug: string }) {
  const response = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find()
  return response.items[0]
}
