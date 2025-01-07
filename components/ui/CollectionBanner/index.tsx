import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CollectionBanner({url, bgUrl}: {url:string, bgUrl:string}) {
  return (
    <Link href={url} className="block relative w-full h-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4">
    <div className="absolute flex items-center justify-center py-5 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-700">
      <button className="inline-block rounded-full text-white font-semibold text-base border-2 px-5 md:px-4 py-2 uppercase bg-green-500 bg-opacity-25 hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500">
        SHOP NOW
      </button>
    </div>
    <Image width={400} height={50} className="w-full h-96 sm:h-[370px] object-cover object-center" src={bgUrl} alt={url} />
  </Link>
  )
}

export default CollectionBanner
