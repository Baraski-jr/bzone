import ShopCollection from "@/components/shopCollection"
import SubHero from "@/components/ui/subHero"
import React, { Suspense } from "react"
import Gutter from "@/components/Gutter"
import { getCollectionBySlug } from "@/lib/actions"
import SkeletonShopCollection from "@/components/ui/Skeleton/SkeletonShopCollection"

export default async function Page({ searchParams }: { searchParams: any }) {
  const collectionProducts = await getCollectionBySlug({
    slug: searchParams.category || "all-products",
  })
  return (
    <>
      <Gutter />
      <SubHero title={collectionProducts.collection?.name || "All"} />
      <Suspense fallback={<SkeletonShopCollection />}>
        <ShopCollection
          categoryId={
            collectionProducts.collection?._id ||
            process.env.ALL_PRODUCTS_CATEGORY_ID!
          }
        />
      </Suspense>
    </>
  )
}
