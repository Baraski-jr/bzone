import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules'

const AutoScroll = () =>  (      
    <div className="w-full bg-[#242424]">
        <div className="mx-auto w-[95%] py-3">
            <Swiper
                className=''
                modules={[Autoplay, Navigation]} 
                centeredSlides={true}
                spaceBetween={25}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 200, disableOnInteraction: false, }}
                >
                <SwiperSlide >
                    <p className="text-[#797979] font-bold text-xs md:text-sm "> STORE LOCATION </p>
                </SwiperSlide>
                <SwiperSlide >
                    <p className="text-[#797979] font-bold text-xs md:text-sm "> FREE EXPRESS SHIPPING </p>
                </SwiperSlide>
                <SwiperSlide >
                    <p className="text-[#797979] font-bold text-xs md:text-sm "> SUPPORT </p>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
)

export default AutoScroll
