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
import { NetworkError } from "@/components/Erros/networkErro"
import ShopCollection from "@/components/ShopCollection"

const PRODUCT_PER_PAGE = 20

export const metadata: Metadata = {
  title: "Product listing",
  description: "",
}
type SearchParams = {
  category: string
  min: string
  max: string
  collectionId: string
  limit: string
  // sort: string
  page: string
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const searchParamProps = await searchParams

  try {
    const collection = await querySingleCollectionBySlug({
      slug: searchParamProps.category || "all-products",
    })

    const collectionId =
      collection?._id || process.env.ALL_PRODUCTS_CATEGORY_ID!

    const collectionName = collection?.name || ""

    const products = await queryProducts({
      min: parseInt(searchParamProps?.min),
      max: parseInt(searchParamProps?.max),
      collectionId: collectionId,
      limit: PRODUCT_PER_PAGE,
      pageNumber: parseInt(searchParamProps?.page)
        ? parseInt(searchParamProps.page) * PRODUCT_PER_PAGE
        : 0,
    })

    return (
      <>
        <Gutter />
        <SubHero title={collectionName!} />
        <Suspense fallback={<SkeletonShopCollection />}>
          <Filter />
          <ShopCollection
            totalPages={products.totalPages ?? 0}
            collectionName={collectionName}
            products={{ products: products.items }}
            currentPage={products?.currentPage ?? 0}
            hasPrev={products?.hasPrev()!}
            hasNext={products?.hasNext()!}
          />
        </Suspense>
      </>
    )
  } catch (error) {
    return (
      <div className="relative">
        <Gutter />
        <SkeletonShopCollection err={true} />
        <NetworkError
          top={1 / 3}
          link={"/products"}
          message={" Network Error"}
        />
      </div>
    )
  }
}
