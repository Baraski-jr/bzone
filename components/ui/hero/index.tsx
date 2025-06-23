'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Gutter from '@/components/Gutter'
import { shoeSlides } from '@/lib/constants'
import { CldImage } from 'next-cloudinary'
import { shoeSlide } from '@/types'
import useEmblaCarousel from 'embla-carousel-react'

const LandingHero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div className="bg-hero-bg bg-cover bg-top md:pb-5">
      <Gutter />
      <div className="relative max-w-[100rem] w-[95%] mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {shoeSlides.map(({ id, name, image, price }: shoeSlide) => (
              <div key={id} className="flex-[0_0_100%]">
                <div className="md:flex justify-between py-10">
                  {/* Left */}
                  <div className="place-content-center w-full md:w-1/4 flex-2 md:space-y-8 space-y-5">
                    <div className="bg-slate-950 px-4 py-2 text-white font-semibold w-fit">
                      ${price.discountPrice} -
                      <span className="line-through">${price.originalPrice}</span>
                    </div>
                    <h1 className="md:text-6xl text-4xl font-bold text-white uppercase">
                      {name}
                    </h1>
                      <Link
                        href={`/products?category=all-products`}
                        className="hidden md:inline-block rounded-full text-white font-semibold border-2 px-5 md:px-8 py-3 uppercase hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"
                      >
                        SHOP NOW
                      </Link>
                  </div>
                  {/* Middle */}
                  <div className="flex-1 mx-auto md:pr-28 px-5 py-4 flex items-center justify-center">
                    <div className="relative w-3/4 md:w-2/3">
                      <CldImage
                        src={image}
                        width={844}
                        height={530}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={image}
                        quality="auto"
                        alt={name || 'Shoe image'}
                        className="hover:drop-shadow-2xl drop-shadow-md mx-auto md:hover:-translate-x-10 hover:translate-x-4 hover:scale-105 md:hover:scale-110 hover:skew-x-2 hover:-skew-y-2 hover:rotate-12 active:rotate-[20deg] ease-in-out transition-all duration-1000"
                      />
                    </div>
                  </div>
                  {/* Social */}
                  <div className="flex-2 hidden md:grid place-content-center space-y-3 px-1">
                    {/* Icons */}
                    <div title="facebook" className="hover:scale-105 cursor-pointer bg-white w-9 aspect-square rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84BA86" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </div>
                    <div title="X" className="hover:scale-105 cursor-pointer bg-white w-9 aspect-square rounded-full flex items-center justify-center">X</div>
                    <div title="linkedin" className="hover:scale-105 cursor-pointer bg-white w-9 aspect-square rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#84BA86" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </div>
                    <div title="telegram" className="hover:scale-105 cursor-pointer bg-white w-9 aspect-square rounded-full flex items-center justify-center">T</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Pagination */}
        <div className="carousel-pagination gap-4 flex justify-end w-full md:w-11/12 mx-auto pt-6 pb-3">
          {shoeSlides.map(({ id, name, image, color }, index) => {
            return (
              <button
                key={id}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-16 bg-${color} aspect-square md:w-20 carousel-pagination-item carousel-active:bg-opacity-70 bg-opacity-30 drop-shadow-lg rounded-full cursor-pointer relative hover:scale-105 transition-all duration-500`}
              >
              <CldImage
                width={70}
                height={70}
                loading="lazy"
                className="drop-shadow-xl absolute -left-1 bottom-4 hover:-rotate-2 active:rotate-2 active:duration-100 hover:drop-shadow-2xl transition-all duration-700"
                src={image}
                alt={name || "Shoe image"}  
              />
              </button>

            )
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingHero
