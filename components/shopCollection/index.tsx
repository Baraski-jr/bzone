"use client"

import React, { useState, useEffect } from "react"
import { products as initialProducts } from "@/lib/constants"
import FilterComponent from "../filterComponent"
import ProductCart from "../ui/productCart"
import CustomNav from "../CustomNav"
import { ProductsType } from "@/types"
import SkeletonShopCollection from "../ui/Skeleton/SkeletonShopCollection"

const ShopCollection = () => {
  const [products, setProducts] = useState<ProductsType[]>([])
  const [filteredProducts, setFilteredProducts] = useState<ProductsType[]>([])

  useEffect(() => {
    setProducts(initialProducts)
    setFilteredProducts(initialProducts)
  }, [])

  const handleFilter = (category: string) => {
    if (category === "all") {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      )
      setFilteredProducts(filtered)
    }
  }

  if (products.length === 0) return <SkeletonShopCollection />

  return (
    <div className="flex gap-x-4 w-[85%] mx-auto py-8">
      {/* <SideBarFilter /> */}
      <section className="space-y-5 md:space-y-4">
        <FilterComponent onFilter={handleFilter} />
        <CustomNav />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-7">
          {filteredProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ShopCollection
