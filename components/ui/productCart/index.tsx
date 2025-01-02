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
import {  ProductsType } from '@/types';
import Add from '@/components/AddToCart';

const ProductCart = (product: ProductsType) => {

  return (
    <>
      <div className='relative py-5 mb-1 md:py-0 h-full md:h-96 rounded-md hover:bg-slate-50 transition-all duration-200'>
        <div className="block overflow-hidden bg-[#F5F5F5]">
          <Swiper className='h-full relative'
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation={false} // to add the navigation arrows
            >
            { product.images.map((url: string, index) => (
              <SwiperSlide key={index}   >
                <Link href={`/products/shoes/${product.title.replace(/ /g, '-')}`} className="overflow-hidden bg-[#F5F5F5] block h-60">
                  {/* The sold out card */}
                  {(product.inventory === 0) && (
                    <div className="bg-red-500 py-2 px-3 aspect-auto rounded-md grid place-content-center absolute top-2 right-2 z-40">
                      <p className="text-base font-mono text-white font-medium tracking-wide">Sold</p>
                    </div>
                  )}
                  
                  <Image 
                    width={300}
                    height={300}
                    src={url} alt={product.title} 
                    className='mx-auto w-full h-full text-center object-cover hover:scale-105 transition-all duration-700 ' 
                  />
                  
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='flex flex-col justify-center gap-3 pt-3 px-2'>
          <h2 className='text-sm capitalize line-clamp-1'>{product.title}</h2>
          <p className='text-sm font-semibold text-slate-500'>GMD{product.price}.00</p>
          {product.inventory === 0 ? 

           <Add product={product} disable={true} /> :
           <Add product={product}  />

          }
        </div>

      </div>
    </>
  )
}

export default ProductCart
