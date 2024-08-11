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
        <section className=" container ">
          <header className="text-center space-y-2 py-3">
            <h1 className="font-bold text-slate-700 text-2xl"> FEATURED PRODUCTS </h1>
            <p className="text-slate-500">The most prominent product in the store, which was bought with the highest number </p>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-5 py-4">
              <ProductCart name={'air'} url={'/products/a1.png'} price={300} />
              <ProductCart name={'nike'} url={'/products/b1.png'} price={200} />
              <ProductCart name={'adidas'} url={'/products/c1.png'} price={2500} />
              <ProductCart name={'pumer'} url={'/products/d1.png'} price={500} />
              <ProductCart name={'air'} url={'/products/e1.png'} price={700} />
              <ProductCart name={'nike'} url={'/products/f1.png'} price={1000} />
              <ProductCart name={'adidas'} url={'/products/g1.png'} price={1000} />
              <ProductCart name={'pumer'} url={'/products/h1.png'} price={600} />
              <ProductCart name={'pumer'} url={'/products/i1.png'} price={550} />
              <ProductCart name={'pumer'} url={'/products/j1.png'} price={950} />
          </div>
      </section>
  )
}

export default FeatureProducts
