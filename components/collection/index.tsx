'use client'
import React from 'react'
import Image from 'next/image';
import ProductCart from '../ui/cart'



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';


interface ProductCartProps {
  title: string;
  subTitle: string;
  bgUrl: string;
}


const Collections = ({title, subTitle, bgUrl}: ProductCartProps) => {
  return (
      <section className="py-6 flex items-center xl:min-h-[85vh] 2xl:min-h-full">
        {/* header */}
        <div className="container">
          <header className="text-center space-y-2 py-3">
            <h1 className="font-bold text-slate-700 text-2xl">{title}</h1>
            <p className="text-slate-500"> {subTitle}</p>
          </header>`
          <div className="sm:flex lg:gap-4 gap-y-3">
              <Image className='object-cover object-right-bottom w-full sm:w-1/2 lg:w-1/3 xl:w-1/4' src={bgUrl} alt={title} width={200} height={250} />
            <div className="sm:w-full overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={2}
                navigation
                breakpoints={{
                  640: { slidesPerView: 2, },
                  768: { slidesPerView: 2, },
                  1024: { slidesPerView: 3, },
                  1280: { slidesPerView: 4, },
                  1536: { slidesPerView: 5, },
                  11920: { slidesPerView: 6, },

                }}
                >
                <SwiperSlide>
                  <ProductCart name={'air'} url={'/products/marbo-shoes-product-01 (1).jpeg'} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart name={'nike'} url={'/products/marbo-shoes-product-03 (1).jpeg'} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart name={'adidas'} url={'/products/marbo-shoes-product-04-a (1).jpeg'} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart name={'pumer'} url={'/products/marbo-shoes-product-05-a (1).jpeg'} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart name={'air'} url={'/products/marbo-shoes-product-01 (1).jpeg'} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart name={'nike'} url={'/products/marbo-shoes-product-03 (1).jpeg'} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart name={'adidas'} url={'/products/marbo-shoes-product-04-a (1).jpeg'} />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCart name={'pumer'} url={'/products/marbo-shoes-product-05-a (1).jpeg'} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Collections
