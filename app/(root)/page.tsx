// import HeaderComponent from "@/components/header/headerComponent"
import LandingHero from "@/components/ui/hero"
import Collections from "@/components/collectionComponent"
import CollectionCategory from "@/components/collectionCategories"
import Promotion from "@/components/promotion"
import FreeReview from "@/components/FreeReview"
import React, { Suspense } from "react"
import { SkeletonCollection } from "@/components/ui/Skeleton/SkeletonCollection"
import LoadingSpinner from "@/components/LoadingSpinner"
export default async function Home() {
  return (
    <section className="relative">
      {/* <HeaderComponent /> */}
      <Suspense fallback={<LoadingSpinner />}>
        <LandingHero />
      </Suspense>

      <CollectionCategory />
      <Suspense fallback={<SkeletonCollection />}>
        <Collections
          categoryId={process.env.MEN_PRODUCTS_CATEGORY_ID!}
          limit={10}
          name="NEW ARRIVAL"
          />
      </Suspense>
      
      <Promotion />

      <Suspense fallback={<SkeletonCollection />}>
        <Collections
          categoryId={process.env.WOMEN_PRODUCTS_CATEGORY_ID!}
          limit={10}
          name="TOP TENDING"
        />
      </Suspense>

      <FreeReview />
    </section>
  )
}
