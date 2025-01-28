import ShopCollection from "@/components/shopCollection"
import SubHero from "@/components/ui/subHero"
import React, { Suspense } from "react"
import Gutter from "@/components/Gutter"
import SkeletonShopCollection from "@/components/ui/Skeleton/SkeletonShopCollection"
import Filter from "@/components/Filter"
import { collections, products } from "@wix/stores"
import {
  queryCollections,
  queryProducts,
  querySingleCollectionBySlug,
} from "@/model/store/store-api"
import { wixClientServer } from "@/lib/wix/ClientServer"

const PRODUCT_PER_PAGE = 12

export default async function Page({ searchParams }: any) {
  let collections: collections.Collection[] = []
  let collectionId
  let collectionName

  collections = await queryCollections()
  const collection = await querySingleCollectionBySlug({
    slug: searchParams.category || "all-products",
  })

  collectionId = collection?._id || process.env.ALL_PRODUCTS_CATEGORY_ID!

  collectionName = collection?.name || ""

  const wixClient = await wixClientServer()

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", collectionId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page ? parseInt(searchParams.page) * PRODUCT_PER_PAGE : 0
    )
  // .find();

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ")

    if (sortType === "asc") {
      productQuery.ascending(sortBy)
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy)
    }
  }

  const products = await productQuery.find()

  // try {
  //   collections = await queryCollections()
  //   const collection = await querySingleCollectionBySlug({
  //     slug: searchParams.category || "all-products",
  //   })

  //   collectionId = collection?._id || process.env.ALL_PRODUCTS_CATEGORY_ID!

  //   collectionName = collection?.name || ""
  //   if (collectionId) {
  //     let Sort
  //     if (searchParams?.sort) {
  //       Sort = searchParams.sort
  //     }

  //     let page = await searchParams?.page
  //     console.log(page)
  //     products = await queryProducts({
  //       min: searchParams?.min,
  //       max: searchParams?.max,
  //       collectionId: collectionId,
  //       limit: PRODUCT_PER_PAGE,
  //       sort: Sort,
  //       pageNumber: searchParams?.page,
  //     })
  //   } else {
  //     products = await queryProducts({
  //       collectionId,
  //       limit: 10,
  //     })
  //   }
  // } catch (err) {
  //   console.error(err)
  // }

  console.log(products)
  return (
    <>
      <Gutter />
      <SubHero title={collectionName!} />
      <Suspense fallback={<SkeletonShopCollection />}>
        <Filter />
        <ShopCollection
          collectionName={collectionName!}
          products={products?.items!}
          currentPage={products?.currentPage! || 0}
          hasPrev={products?.hasPrev()!}
          hasNext={products?.hasNext()!}
        />
      </Suspense>
    </>
  )
}
