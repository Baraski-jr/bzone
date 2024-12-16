import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { CrouselType, ProductsType } from '@/types';
import ProductCart from '../ui/productCart';

const Crousel: React.FC<CrouselType> = ({
  // breakpoint={},
  displayLimit,
  products,
  slidePerView = 2,
  navigation = false,
}) => {

  const visibleProducts = displayLimit? products.slice(0, displayLimit) : products

  return (
    <>
      <Swiper 
        className='h-full'
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView = {slidePerView}
        navigation={navigation}

        >
        {visibleProducts.map(({ id, title, images, price, inventory, colours }: ProductsType) =>  (
            <SwiperSlide key={id}>
              <ProductCart id={id} title={title} images={images} price={price} inventory={inventory} colours={colours} />
            </SwiperSlide>
          ))
        }
        </Swiper>
    </>
  )
}

export default Crousel;