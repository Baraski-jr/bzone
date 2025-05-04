'use client'
import Image from "next/image"
import React from "react"
import Link from "next/link"
import Gutter from "@/components/Gutter"
import { shoeSlides } from "@/lib/constants"
import { CldImage } from "next-cloudinary" // Adjust the import path if necessary
import { shoeSlide } from "@/types"

const LandingHero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-top pt-5 md:pb-5">
      <Gutter />
      <div
        id="horizontal-thumbnails"
        data-carousel='{ "loadingClasses": "opacity-0", "isInfinite": "true", "isCentered": "true", "isDraggable": "true", "speed": 6000 }'
        className="relative  flex md:items-center max-w-[100rem] w-[95%] mx-auto"
      >
        <div className="carousel space-y-4">
          <div className="carousel-body carousel-dragging:transition-none h-3/4 opacity-0">
            {/* <!-- Slide 1 --> */}
            {shoeSlides.map(({ id, name, image, price }: shoeSlide) => (
              <div key={id} className="carousel-slide w-full">
                <div className="md:flex justify-between">
                  {/* left */}
                  <div className="place-content-center w-full md:w-1/4 flex-2 md:space-y-8 space-y-5">
                    <div className="bg-slate-950 px-4 py-2 text-white font-semibold w-fit">
                      ${price.discountPrice} -
                      <span className="line-through">
                        ${price.originalPrice}
                      </span>
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
                  {/* middle */}
                  <div className="flex-1 md:pt-16 md:pr-28 py-4 flex items-center justify-center">
                    {/* <Image
                      width={844}
                      height={530}
                      src={image}
                      className="lg:w-[35rem] hover:drop-shadow-2xl drop-shadow-md mx-auto w-[80%] md:w-[60%] md:hover:-translate-x-10 hover:translate-x-4 hover:scale-105 md:hover:scale-110 hover:skew-x-2 hover:-skew-y-2 hover:rotate-12 active:rotate-[20deg] ease-in-out transition-all duration-1000 hover:cursor-[url('/icons/cursor.svg'),_auto]"
                      alt={name}
                      /> */}
                    <CldImage
                      src={image} // Use this sample image or upload your own via the Media Explorer
                      width="844" // Transform the image: auto-crop to square aspect_ratio
                      className="lg:w-[35rem] hover:drop-shadow-2xl drop-shadow-md mx-auto w-[80%] md:w-[60%] md:hover:-translate-x-10 hover:translate-x-4 hover:scale-105 md:hover:scale-110 hover:skew-x-2 hover:-skew-y-2 hover:rotate-12 active:rotate-[20deg] ease-in-out transition-all duration-1000 hover:cursor-[url('/icons/cursor.svg'),_auto]"
                      height="530"
                      crop={{
                        type: 'auto',
                        source: true
                      }} alt={name}                    
                      />
                  </div>
                  {/* social media icons */}
                  <div className="flex-2 hidden md:grid place-content-center space-y-3 px-1">
                    <a
                      title="facebook"
                      className="a-hover cursor-pointer text-primary relative flex items-center justify-center rounded-full w-9 aspect-square font-bold text-base bg-white transition-all ease-in-out duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#84BA86"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      title="X"
                      className=" a-hover cursor-pointer text-primary relative flex items-center justify-center rounded-full w-9 aspect-square font-bold text-base bg-white transition-all ease-in-out duration-200"
                    >
                      X
                    </a>
                    <a
                      title="lindkin"
                      className="a-hover cursor-pointer text-primary relative flex items-center justify-center rounded-full w-9 aspect-square font-bold text-base bg-white transition-all ease-in-out duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#84BA86"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      title="telegram"
                      className="a-hover cursor-pointer text-primary relative flex items-center justify-center rounded-full w-9 aspect-square font-bold text-base bg-white transition-all ease-in-out duration-200"
                    >
                      T
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination btton images */}
          <div className="flex items-center mx-auto w-[95%] pt-3">
            <Link
              href={`/products?category=all-products`}
              className="block min-w-fit md:hidden rounded-full text-white font-semibold border-2 px-5 md:px-8 py-3 uppercase hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500"
            >
              SHOP NOW
            </Link>
            <div className="carousel-pagination gap-4 flex justify-end w-full md:w-11/12 mx-auto pb-3">
              {shoeSlides.map(({ id, name, image }: shoeSlide) => (
                <div
                  key={id}
                  className="w-15 aspect-square md:w-20 carousel-pagination-item carousel-active:bg-opacity-70 bg-opacity-30 drop-shadow-lg rounded-full cursor-pointer bg-white relative hover:scale-105 transition-all duration-500"
                >
                  <Image
                    width={50}
                    height={50}
                    className="drop-shadow-xl w-16 md:w-25 absolute -left-1 bottom-4 hover:-rotate-2 active:rotate-2 active:duration-100 hover:drop-shadow-2xl transition-all duration-700"
                    src={image}
                    alt={name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingHero
