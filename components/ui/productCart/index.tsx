'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';
import { ProductsType } from '@/types';
import ColourComponent from '@/components/ColoursComponent';

const ProductCart: React.FC<ProductsType> = ({ title, images, price, inventory, colours }) => {

  const [colour, setColour] = useState(colours[0].name)

  return (
    <>
      <div className='relative grid place-content py-5 mb-1 md:py-0 h-full md:h-96 rounded-md hover:bg-slate-50 transition-all duration-200'>
        <Link href={`/collection/shoes/${title.replace(/ /g, '-')}`} className="block overflow-hidden bg-[#F5F5F5]">
          <Swiper className='h-full relative'
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={false}
            >
            { images.map((url: string, index) => (
              <SwiperSlide key={index}   >
                <Image width={200} height={180} src={url} alt={title} className='mx-auto w-full h-full text-center object-cover hover:scale-105 transition-all duration-700 ' />
              </SwiperSlide>
            ))}
          </Swiper>
        </Link>
        <div className='flex flex-col justify-center gap-3 px-2 py-2'>
          <h2 className='text-base capitalize'>{title}</h2>
          <p className='text-sm font-semibold text-slate-500'>${price}.00</p>
            <ColourComponent colours={colours} colour={colour} setColour={setColour} />
        </div>
        {inventory > 0 && (
          <div className="bg-white py-3 px-5 aspect-auto rounded-lg grid place-content-center absolute top-2 right-2 z-40">
            <p className="text-base font-mono text-red-600 font-medium tracking-wider">Sold Out</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ProductCart
