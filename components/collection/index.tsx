'use client'
import React from 'react'
import Image from 'next/image';
import ProductCart from '../productCart'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';

interface ProductCartProps {
  title: string;
  subTitle: string;
  bgUrl: string;
}

const Collections = ({title, subTitle, bgUrl}: ProductCartProps) => {
  return (
      <section className="mt-6 md:mt-10 flex items-center xl:min-h-[75vh] 2xl:min-h-full">
        {/* header */}
        <div className="container">
          <header className="text-center space-y-2 py-5 px-2">
            <h1 className="font-bold text-slate-700 text-xl md:text-2xl">{title}</h1>
            <p className="text-slate-500 text-sm md:text-base"> {subTitle}</p>
          </header>
          <div className="sm:flex lg:gap-4 gap-2 gap-y-3">
              <Image className='object-cover object-right-bottom w-full sm:w-1/2 lg:w-1/3 xl:w-1/4' src={bgUrl} alt={title} width={200} height={250} />
          <div className="sm:w-full overflow-hidden gap-5 md:gap-0 relative">
              <Swiper className='h-full'
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={2}
                  // navigation
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
                    <ProductCart name={'air'} imageUrl={'/products/a1.png'} price={300} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'nike'} imageUrl={'/products/b1.png'} price={200} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'adidas'} imageUrl={'/products/c1.png'} price={2500} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'pumer'} imageUrl={'/products/d1.png'} price={500} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'air'} imageUrl={'/products/e1.png'} price={700} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'nike'} imageUrl={'/products/f1.png'} price={1000} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'adidas'} imageUrl={'/products/g1.png'} price={1000} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'pumer'} imageUrl={'/products/h1.png'} price={600} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'pumer'} imageUrl={'/products/i1.png'} price={550} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductCart name={'pumer'} imageUrl={'/products/j1.png'} price={950} />
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Collections
