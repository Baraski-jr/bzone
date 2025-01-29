import SubHero from "@/components/ui/subHero"
import React, { Suspense } from "react"
import Gutter from "@/components/Gutter"
import SkeletonShopCollection from "@/components/ui/Skeleton/SkeletonShopCollection"
import Filter from "@/components/Filter"
import {
  queryProducts,
  querySingleCollectionBySlug,
} from "@/model/store/store-api"
import { Metadata } from "next"
import { products } from "@wix/stores"
import CustomNav from "@/components/CustomNav"
import ProductCart from "@/components/ui/productCart"
import Pagination from "@/components/pagination"

const PRODUCT_PER_PAGE = 12

export const metadata: Metadata = {
  title: "Product listing",
  description: "",
}

export default async function Page({ searchParams }: any) {
  let collectionId
  let collectionName: string

  // const collection = await querySingleCollectionBySlug({
  //   slug: searchParams.category || "all-products",
  // })

  // collectionId = collection?._id || process.env.ALL_PRODUCTS_CATEGORY_ID!

  // collectionName = collection?.name || ""

  // const wixClient = await wixClientServer()

  // const productQuery = wixClient.products
  //   .queryProducts()
  //   .eq("collectionIds", collectionId)
  //   .gt("priceData.price", searchParams?.min || 0)
  //   .lt("priceData.price", searchParams?.max || 999999)
  //   .limit(PRODUCT_PER_PAGE)
  //   .skip(
  //     searchParams?.page ? parseInt(searchParams.page) * PRODUCT_PER_PAGE : 0
  //   )

  // if (searchParams?.sort) {
  //   const [sortType, sortBy] = searchParams.sort.split(" ")

  //   if (sortType === "asc") {
  //     productQuery.ascending(sortBy)
  //   }
  //   if (sortType === "desc") {
  //     productQuery.descending(sortBy)
  //   }
  // }
  // const products = await productQuery.find()

  const collection = await querySingleCollectionBySlug({
    slug: searchParams.category || "all-products",
  })

  collectionId = collection?._id || process.env.ALL_PRODUCTS_CATEGORY_ID!

  collectionName = collection?.name || ""
  let Sort
  if (searchParams?.sort) {
    Sort = searchParams.sort
  }

  const products = await queryProducts({
    min: searchParams?.min,
    max: searchParams?.max,
    collectionId: collectionId,
    limit: PRODUCT_PER_PAGE,
    sort: Sort ?? "",
    pageNumber: searchParams?.page
      ? parseInt(searchParams.page) * PRODUCT_PER_PAGE
      : 0,
  })

  // Shop Collection
  const ShopCollection = async () => {
    return (
      <>
        <div className="flex gap-x-4 w-[85%] mx-auto py-8">
          {/* <SideBarFilter /> */}
          <section className="space-y-5 md:space-y-4">
            <CustomNav name={collectionName} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-7">
              {products.items.map((product) => (
                <ProductCart key={product._id} product={product} />
              ))}
            </div>
          </section>
        </div>
        <Pagination
          currentPage={products?.currentPage ?? 0}
          hasPrev={products?.hasPrev()!}
          hasNext={products?.hasNext()!}
        />
      </>
    )
  }

  return (
    <>
      <Gutter />
      <SubHero title={collectionName!} />
      <Suspense fallback={<SkeletonShopCollection />}>
        <Filter />
        <ShopCollection />
      </Suspense>
    </>
  )
}
