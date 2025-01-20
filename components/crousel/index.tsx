"use client"

import React from "react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import { CrouselType, ProductsType } from "@/types"
import ProductCart from "../ui/productCart"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const Crousel: React.FC<CrouselType> = ({
  displayLimit,
  products,
  slidePerView = 2,
  navigation = false,
}) => {
  const visibleProducts = displayLimit
    ? products.slice(0, displayLimit)
    : products

  return (
    <Swiper
      className="h-full"
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={slidePerView}
      navigation={navigation}
    >
      {visibleProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCart product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Crousel
