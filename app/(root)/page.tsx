import HeaderComponent from "@/components/header/headerComponent"
import LandingHero from "@/components/ui/hero"
import Collections from "@/components/collectionComponent"
import CollectionCategory from "@/components/collectionCategories"
import Promotion from "@/components/promotion"
import FreeReview from "@/components/FreeReview"
import React, { Suspense } from "react"
import { SkeletonCollection } from "@/components/ui/Skeleton/SkeletonCollection"
export default async function Home() {
  return (
    <section className="relative">
      <HeaderComponent />
      <LandingHero />
      <CollectionCategory />
      <Suspense fallback={<SkeletonCollection />}>
        <Collections
          categoryId={process.env.MEN_PRODUCTS_CATEGORY_ID!}
          limit={5}
          name="NEW ARRIVAL"
          />
      </Suspense>
      
      <Promotion />

      <Suspense fallback={<SkeletonCollection />}>
        <Collections
          categoryId={process.env.WOMEN_PRODUCTS_CATEGORY_ID!}
          limit={5}
          name="TOP TENDING"
        />
      </Suspense>

      <FreeReview />
    </section>
  )
}
