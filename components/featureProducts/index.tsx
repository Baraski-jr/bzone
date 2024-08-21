'use client'
import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import ProductCart from '../productCart';
import { products } from '@/constants';



const FeatureProducts = () => {
    return (
        <section className="w-[95%] mx-auto py-1 my-3 mb-9">
          <header className="text-center space-y-2 py-5">
                <h1 className="font-bold text-slate-700 text-xl md:text-2xl"> FEATURED PRODUCTS </h1>
                <p className="text-slate-500 text-sm md:text-base">The most prominent product in the store, which was bought with the highest number </p>
            </header>
            <div className="sm:w-full overflow-hidden">
                <Swiper className='h-full'
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation={true}
                    breakpoints={{
                    640: { slidesPerView: 2, },
                    768: { slidesPerView: 2, },
                    1024: { slidesPerView: 4.2, },
                    1280: { slidesPerView: 4.2, },
                    1536: { slidesPerView: 4.2, },
                    11920: { slidesPerView: 6, },
                }}
            >
                {
                    products.map(({ id, name, imageURl, price }) => (
                      <SwiperSlide key={id}>
                        <ProductCart name={name} imageUrl={imageURl} price={price} id={id} />
                      </SwiperSlide>
                    ) )
                }
                </Swiper>
            </div>
      </section>
  )
}

export default FeatureProducts
