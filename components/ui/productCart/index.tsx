'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductsType } from '@/types';
import Add from '@/components/AddToCart';

const ProductCart: React.FC<ProductsType> = ({ title, images, price, inventory, }) => {

  return (
    <>
      <div className='relative py-5 mb-1 md:py-0 h-full md:h-96 rounded-md hover:bg-slate-50 transition-all duration-200'>
        <Link href={`/collection/shoes/${title.replace(/ /g, '-')}`} className="block overflow-hidden bg-[#F5F5F5]">
          <Swiper className='h-full relative'
            modules={[Navigation, Pagination]}
            // spaceBetween={10}
            slidesPerView={1}
            pagination={true}
            navigation={false} // to add the navigation arrows
            >
            { images.map((url: string, index) => (
              <SwiperSlide key={index}   >
                <Image width={200} height={180} src={url} alt={title} quality={100} className='mx-auto w-full h-full text-center object-cover hover:scale-105 transition-all duration-700 ' />
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>
        <div className='flex flex-col justify-center gap-3 pt-3 px-2 '>
          <h2 className='text-lg capitalize line-clamp-1'>{title}</h2>
          <p className='text-sm font-semibold text-slate-500'>GMD{price}.00</p>
          <Add inventory={inventory} ControlQuantity={false} />
        </div>
        {/* The sold out card */}
        {(inventory === 0) && (
          <div className="bg-red-500 py-2 px-3 aspect-auto rounded-md grid place-content-center absolute top-2 right-2 z-40">
            <p className="text-base font-mono text-white font-medium tracking-wide">Sold</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ProductCart
