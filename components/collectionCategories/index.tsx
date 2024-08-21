import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

const CollectionCategory = () => {
    return (
        <section className="mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 w-[95%] mx-auto">
                {/* left */}
                <Link href='/' className="block overflow-hidden">
                    <Image className='object-cover object-right-bottom w-full hover:-rotate-2 hover:scale-105 ease-linear transition-all duration-1000' src='/banner-image-new.jpg' alt='New Arrival' width={200} height={250} />
                </Link>
                {/* right */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
                    {/* top */}
                    <Link href='/' className="block overflow-hidden">
                        <Image className='object-cover object-right-bottom w-full h-full hover:rotate-1 hover:scale-110 ease-linear transition-all duration-1000' src='/banner-image-trend.jpg' alt='trending now' width={200} height={250} />
                    </Link>
                    {/* down */}
                    <div className="grid grid-cols-2">
                        {/* left */}
                        <Link href='/' className="block overflow-hidden ">
                            <Image className='object-cover object-right-bottom w-full h-full hover:rotate-1 hover:scale-110 ease-linear transition-all duration-700' src='/banner-image-campaign.jpg' alt='trending' width={200} height={250} />
                        </Link>
                        {/* right */}
                        <Link href='/' className="block overflow-hidden ">
                            <Image className='object-cover object-right-bottom w-full h-full hover:rotate-1 hover:scale-110 ease-linear transition-all duration-700' src='/banner-image-lookbook.jpg' alt='trending' width={200} height={250} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CollectionCategory