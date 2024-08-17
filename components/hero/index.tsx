'use client'

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const LandingHero = () => {

  const swiperRef = useRef<any>(null);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current.swiper;
    const slides = document.querySelectorAll('.swiper-slide img');
    
    slides.forEach((slide, index) => {
      if (index === swiperInstance.realIndex) {
        slide.classList.add('slide-in');
        slide.classList.remove('slide-out');
      } 
    });
  };

    return (
      <section className=' flex md:items-center pb-7 bg-hero-bg bg-cover bg-top min-h-[70vh] md:min-h-[90vh] w-full md:pt-[6rem] pt-[2rem]'> 
        <div className="mx-auto w-[95%] space-y-7 ">
          {/* main */}
          <div className="md:flex justify-between">
            {/* left */}
            <div className="place-content-center w-full md:w-1/4 md:space-y-8 space-y-5">
              <div className="bg-slate-950 px-4 py-2 text-white font-semibold w-fit">
                $999 - <span className="line-through">$1200</span>
              </div>
              <h1 className="md:text-6xl text-5xl font-bold text-white uppercase"> REACT INFINITY </h1>
              <Link href='/#men' className="inline-block rounded-full text-white font-semibold border-2 px-5 md:px-8 py-3 uppercase hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"> SHOP NOW </Link>
            </div>
            <div className="w-full overflow-hidden">
              <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                onSlideChange={handleSlideChange}
                autoplay={{
                  delay: 100,                 // Auto-play delay
                  disableOnInteraction: false, // Continue autoplay after interaction
                }}

              >
              <SwiperSlide>
                <img
                  className='hover:drop-shadow-2xl drop-shadow-md mx-auto max-w-full w-[90%] md:w-[70%] md:hover:-translate-x-10 hover:translate-x-4 hover:scale-105 md:hover:scale-110 hover:skew-x-2 hover:-skew-y-2 hover:rotate-12 active:rotate-2 ease-in-out transition-all duration-1000'
                  src="/hero/shoes-white.png" alt="shoe"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='hover:drop-shadow-2xl drop-shadow-md mx-auto max-w-full w-[90%] md:w-[70%] md:hover:-translate-x-10 hover:translate-x-4 hover:scale-105 md:hover:scale-110 hover:skew-x-2 hover:-skew-y-2 hover:rotate-12 active:rotate-2 ease-in-out transition-all duration-1000'
                  src="/hero/shoes-blue.png" alt="shoe"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='hover:drop-shadow-2xl drop-shadow-md mx-auto max-w-full w-[90%] md:w-[70%] md:hover:-translate-x-10 hover:translate-x-4 hover:scale-105 md:hover:scale-110 hover:skew-x-2 hover:-skew-y-2 hover:rotate-12 active:rotate-2 ease-in-out transition-all duration-1000'
                  src="/hero/shoes-orange.png" alt="shoe"
                />
              </SwiperSlide>
            </Swiper>
            </div>
            {/* social media icons */}
            <div className="hidden md:grid place-content-center space-y-3">
              <a href="#" className="text-green-500 grid place-content-center rounded-full w-[2rem] h-[2rem] font-bold text-base bg-white hover:cursor-[url('/icons/cursor.svg'),_auto]">f</a>
              <a href="#" className="text-green-500 grid place-content-center rounded-full w-[2rem] h-[2rem] font-bold text-base bg-white hover:cursor-[url('/icons/cursor.svg'),_auto]">X</a>
              <a href="#" className="text-green-500 grid place-content-center rounded-full w-[2rem] h-[2rem] font-bold text-base bg-white hover:cursor-[url('/icons/cursor.svg'),_auto]">in</a>
              <a href="#" className="text-green-500 grid place-content-center rounded-full w-[2rem] h-[2rem] font-bold text-base bg-white hover:cursor-[url('/icons/cursor.svg'),_auto]">T</a>
            </div>
          </div>
          {/* play button & switch btn */}
          <div className="flex justify-center md:justify-end gap-8 pt-4 md:pt-5 w-full">
              <div className="drop-shadow-lg rounded-full cursor-pointer bg-white bg-opacity-45 w-[6rem] h-[6rem] relative hover:scale-105 transition-all duration-500"
                onClick={() => swiperRef.current.swiper.slideTo(0)}  
              >
                <img className='drop-shadow-xl w-[6.5rem] max-w-[8rem]  absolute right-0 bottom-5 hover:-rotate-2 active:rotate-2 active:duration-100 hover:drop-shadow-2xl transition-all duration-700' src="/hero/shoes-white.png" alt="shoes" />
              </div>
              <div className="hover:drop-shadow-md rounded-full cursor-pointer bg-white bg-opacity-15 w-[6rem] h-[6rem] relative hover:scale-105 transition-all duration-500"
                onClick={() => swiperRef.current.swiper.slideTo(1)}
              >
                <img className='drop-shadow-xl w-[6.5rem] max-w-[8rem]  absolute right-0 bottom-5 hover:-rotate-2 active:rotate-2 active:duration-100 hover:drop-shadow-2xl transition-all duration-700' src="/hero/shoes-blue.png" alt="shoes" />
              </div>
              <div className="hover:drop-shadow-md rounded-full cursor-pointer bg-white bg-opacity-15 w-[6rem] h-[6rem] relative hover:scale-105 transition-all duration-500"
                onClick={() => swiperRef.current.swiper.slideTo(2)}>
                <img className='drop-shadow-xl w-[6.5rem] max-w-[8rem]  absolute right-0 bottom-5 hover:-rotate-2 active:rotate-2 active:duration-100 hover:drop-shadow-2xl transition-all duration-700' src="/hero/shoes-orange.png" alt="shoes" />
              </div>
          </div>
        </div>
      </section>
  )
}

export default LandingHero
