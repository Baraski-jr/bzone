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
import Link from 'next/link';

interface ProductCartProps {
  title: string;
  subTitle: string;
  bgUrl: string;
}

const Collections = ({title, subTitle, bgUrl}: ProductCartProps) => {
  return (
      <section className="mt-6 md:mt-10 flex items-center xl:min-h-[75vh] 2xl:min-h-full ">
        {/* header */}
        <div className="w-[95%] mx-auto">
          <header className="text-center space-y-2 py-5 px-2">
            <h1 className="font-bold text-slate-700 text-xl md:text-2xl">{title}</h1>
            <p className="text-slate-500 text-sm md:text-base"> {subTitle}</p>
          </header>
          <div className="sm:flex lg:gap-4 gap-2 gap-y-3">
            <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <Link href='/Products' className="absolute flex items-center justify-center py-5 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-700">
                <button className="inline-block rounded-full text-white font-semibold text-base border-2 px-5 md:px-4 py-2 uppercase bg-green-500 bg-opacity-25 hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"> SHOP NOW </button>
              </Link>  
              <img className=' w-full h-full  object-cover object-right-bottom' src={bgUrl} alt={title} width={200} height={250} />
            </div>
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
