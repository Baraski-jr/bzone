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
import { products } from '@/constants';

interface ProductCartProps {
  title: string;
  subTitle: string;
  bgUrl: string;
}

const Collection = ({title, subTitle, bgUrl}: ProductCartProps) => {
  return (
      <section className="mt-6 md:mt-10 flex items-center">
        {/* header */}
        <div className="w-[95%] mx-auto">
          <header className="text-center space-y-2 py-5 px-2">
            <h1 className="font-bold text-slate-700 text-xl md:text-2xl">{title}</h1>
            <p className="text-slate-500 text-sm md:text-base"> {subTitle}</p>
          </header>
          <div className="sm:flex lg:gap-4 gap-2 gap-y-3 md:gap-y-0">
            <div className="relative w-full h-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4">
              <Link href='/Products' className="absolute flex items-center justify-center py-5 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-700">
                <button className="inline-block rounded-full text-white font-semibold text-base border-2 px-5 md:px-4 py-2 uppercase bg-green-500 bg-opacity-25 hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"> SHOP NOW </button>
              </Link>  
              <img className='w-full h-80 object-cover object-right-bottom' src={bgUrl} alt={title} />
            </div>
            <div className="sm:w-full overflow-hidden h-fit gap-5 md:gap-0 relative">
              <Swiper className='h-full bg-slate'
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
                {
                    products.map(({ id, name, imageURl, price }) => (
                      <SwiperSlide key={id} >
                        <ProductCart name={name} imageUrl={imageURl} price={price} />
                      </SwiperSlide>
                    ) )
                }
              </Swiper>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Collection
