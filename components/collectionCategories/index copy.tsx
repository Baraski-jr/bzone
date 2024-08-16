import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

const CollectionCategory = () => {
    return (
        <section className="py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[95%] mx-auto">
                {/* left */}
                <Link href='/' className="inline-block hover:rotate-2 transition-all delay-300 hover:rounded-3xl duration-1000 overflow-hidden">
                    <img className='object-cover object-right-bottom w-full  hover:rounded-xl hover:scale-105 ease-linear transition-all duration-300' src='/banner-image-new.jpg' alt='New Arrival' width={200} height={250} />
                </Link>
                {/* right */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                    {/* top */}
                    <Link href='/' className="inline-block  transition-all  duration-1000 overflow-hidden">
                        <img className='object-cover object-right-bottom w-full hover:rotate-1 duration-[5000ms] hover:scale-110 ease-linear transition-all duration-300' src='/banner-image-trend.jpg' alt='trending now' width={200} height={250} />
                    </Link>
                    {/* down */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* left */}
                        <Link href='/' className="inline-block hover:rotate-1 transition-all  duration-1000 overflow-hidden">
                            <img className='object-cover object-right-bottom w-full hover:scale-110 ease-linear transition-all duration-300' src='/banner-image-campaign.jpg' alt='trending' width={200} height={250} />
                        </Link>
                        {/* right */}
                        <Link href='/' className="inline-block hover:rotate-1 transition-all  duration-1000 overflow-hidden">
                            <img className='object-cover object-right-bottom w-full hover:scale-110 ease-linear transition-all duration-300' src='/banner-image-lookbook.jpg' alt='trending' width={200} height={250} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CollectionCategory