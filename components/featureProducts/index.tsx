'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCart from '../productCart';
import { gql, useQuery } from '@apollo/client';

const GET_DATA = gql`
  query {
    products {
      id
      title
      price
      images
    }
  }
`;

const FeatureProducts = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products;

  return (
    <section className="w-[95%] mx-auto py-1 my-3 mb-9">
      <header className="text-center space-y-2 py-5">
        <h1 className="font-bold text-slate-700 text-xl md:text-2xl">FEATURED PRODUCTS</h1>
        <p className="text-slate-500 text-sm md:text-base">
          The most prominent product in the store, which was bought with the highest number
        </p>
      </header>
      <div className="sm:w-full overflow-hidden">
        <Swiper
          className='h-full'
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4.2 },
            1280: { slidesPerView: 5.6 },
            1536: { slidesPerView: 6.2 },
            1920: { slidesPerView: 7.2 }, // Updated breakpoint to 1920 instead of 11920
          }}
        >
          {products.slice(1, 20).map(({ id, title, images, price }) => (
            <SwiperSlide key={id} >
              <ProductCart id={id} title={title} image={images[0]} price={price} />
            </SwiperSlide>
            ) )
          }
        </Swiper>
      </div>
    </section>
  );
}

export default FeatureProducts;
