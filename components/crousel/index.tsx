"use client"

import React from "react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import ProductCart from "../ui/productCart"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { CrouselType } from "@/types"

const PRODUCT_PER_PAGE = 8

const Crousel: React.FC<CrouselType> = ({
  products,
  slidePerView = 2,
  navigation = false,
}) => {
  return (
    <Swiper
      className="h-full"
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={slidePerView}
      navigation={navigation}
    >
      {products.map((product) => (
        <SwiperSlide key={product.product._id}>
          <ProductCart product={product.product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Crousel
