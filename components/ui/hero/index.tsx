'use client'

import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { shoeSlides } from '@/constants';
import Link from 'next/link';
import { shoeSlide } from '@/types';

const LandingHero = () => {
  const [slide, setSlide] = useState('React Infinity')

  const swiperRef = useRef<any>(null);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current.swiper;
    const slides = document.querySelectorAll('.swiper-slide Image');
    
    slides.forEach((slide, index) => {
      if (index === swiperInstance.realIndex) {
        slide.classList.add('slide-in');
        slide.classList.remove('slide-out');
      } 
    });
  };  

    return (
      <section className='flex md:items-center pb-7 bg-hero-bg bg-cover bg-top w-full pt-5'> 
        <div className="mx-auto w-[95%] space-y-7 "> 
          {/* main */}
          {/* Start here */}
          <div className="w-full overflow-hidden">
            <Swiper
              ref={swiperRef}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              onSlideChange={handleSlideChange}
              autoplay={{ delay: 500, disableOnInteraction: false, }}
            >
              {shoeSlides.map(({ id, name, image, price }: shoeSlide) => (
                <SwiperSlide key={id}>
                    <div className="md:flex justify-between ">
                      {/* left */}
                      <div className="flex-2 place-content-center w-full md:w-1/4 md:space-y-8 space-y-5">
                        <div className="bg-slate-950 px-4 py-2 text-white font-semibold w-fit">
                          ${price.discountPrice} - <span className="line-through">${price.originalPrice}</span>
                        </div>
                        <h1 className="md:text-6xl text-5xl font-bold text-white uppercase"> {name} </h1>
                        <Link href={`/collection/${name.replace(/ /g, '-')}`} className="inline-block rounded-full text-white font-semibold border-2 px-5 md:px-8 py-3 uppercase hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"> SHOP NOW </Link>
                      </div>
                      {/* middle */}
                      <div className="md:pt-16 md:pr-28 flex items-center justify-center">
                        <Image
                          width={300}
                          height={100}
                          priority
                          src={image}
                          alt={name}
                          className="flex-1 hover:drop-shadow-2xl drop-shadow-md mx-auto max-w-full w-[90%] md:w-[60%] md:hover:-translate-x-10 hover:translate-x-4 hover:scale-105 md:hover:scale-110 hover:skew-x-2 hover:-skew-y-2 hover:rotate-12 active:rotate-2 ease-in-out transition-all duration-1000 hover:cursor-[url('/icons/cursor.svg'),_auto]"
                        />
                      </div>
                      {/* social media icons */}
                      <div className="flex-2 hidden md:grid place-content-center space-y-3 px-1">
                        <a href="#" className="text-green-500 grid place-content-center rounded-full w-[2rem] h-[2rem] font-bold text-base bg-white hover:cursor-[url('/icons/cursor.svg'),_auto]">f</a>
                        <a href="#" className="text-green-500 grid place-content-center rounded-full w-[2rem] h-[2rem] font-bold text-base bg-white hover:cursor-[url('/icons/cursor.svg'),_auto]">X</a>
                        <a href="#" className="text-green-500 grid place-content-center rounded-full w-[2rem] h-[2rem] font-bold text-base bg-white hover:cursor-[url('/icons/cursor.svg'),_auto]">in</a>
                        <a href="#" className="text-green-500 grid place-content-center rounded-full w-[2rem] h-[2rem] font-bold text-base bg-white hover:cursor-[url('/icons/cursor.svg'),_auto]">T</a>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
              </Swiper>
            </div>
          {/* play button & switch btn */}
          <div className="flex justify-center md:justify-end gap-8 pt-4 md:pt-5 w-full">
            {shoeSlides.map(({ id, name, image }: shoeSlide) => (
              <div key={id} onClick={() => setSlide(name)} >
                <div
                  className={`${name === slide ? 'bg-opacity-50' : 'bg-opacity-15'} drop-shadow-lg rounded-full cursor-pointer bg-white w-[6rem] h-[6rem] relative hover:scale-105 transition-all duration-500`}
                    onClick={() => swiperRef.current.swiper.slideTo(id)}>
                    <Image
                      width={100}
                      height={50}
                      className='drop-shadow-xl w-[6.5rem] max-w-[8rem] absolute right-0 bottom-5 hover:-rotate-2 active:rotate-2 active:duration-100 hover:drop-shadow-2xl transition-all duration-700'
                      src={image}
                      alt={name} />
                  </div>
              </div>
              ))
            }
          </div>
        </div>
      </section>
  )
}

export default LandingHero
