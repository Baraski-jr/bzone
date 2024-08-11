'use client'
import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import ProductCart from '../ui/cart';



const FeatureProducts = () => {
    return (
        <section className="container py-1 my-3 mb-9">
          <header className="text-center space-y-2 py-5">
                <h1 className="font-bold text-slate-700 text-xl md:text-2xl"> FEATURED PRODUCTS </h1>
                <p className="text-slate-500 text-sm md:text-base">The most prominent product in the store, which was bought with the highest number </p>
            </header>
            <div className="sm:w-full overflow-hidden ">
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
                    1536: { slidesPerView: 4, },
                    11920: { slidesPerView: 6, },

                    }}
                    >
                    <SwiperSlide>
                    <ProductCart name={'air'} url={'/products/a1.png'} price={300} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'nike'} url={'/products/b1.png'} price={200} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'adidas'} url={'/products/c1.png'} price={2500} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'pumer'} url={'/products/d1.png'} price={500} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'air'} url={'/products/e1.png'} price={700} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'nike'} url={'/products/f1.png'} price={1000} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'adidas'} url={'/products/g1.png'} price={1000} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'pumer'} url={'/products/h1.png'} price={600} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'pumer'} url={'/products/i1.png'} price={550} />
                    </SwiperSlide>
                    <SwiperSlide>
                    <ProductCart name={'pumer'} url={'/products/j1.png'} price={950} />
                    </SwiperSlide>
                </Swiper>
            </div>
      </section>
  )
}

export default FeatureProducts
