import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules'

const indedx = () => {
  return (
    <div className="w-full bg-[#242424]">
        <div className="mx-auto w-[95%] py-3">
            <Swiper
                modules={[Autoplay, Navigation]} 
                spaceBetween={15}
                slidesPerView={2}
                loop={true}       
                autoplay={{ delay: 100, disableOnInteraction: false, }}
                >
                <SwiperSlide className='space-x-3'>
                        <a href='#' className="text-[#797979] font-bold text-xs md:text-sm "> STORE LOCATION </a>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <a href='#' className="text-[#797979] font-bold text-xs md:text-sm "> FREE EXPRESS SHIPPING </a>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <a href='#' className="text-[#797979] font-bold text-xs md:text-sm "> SUPPORT </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default indedx
