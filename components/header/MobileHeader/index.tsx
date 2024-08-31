import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const MobileHeader = () => {
    return (
        <header className="md:hidden w-full bg-white py-5 ">
            <div className="flex justify-between items-center mx-auto w-[95%]">
                {/* navs */}
                <div className="">
                    <Image width={30} height={50} src="/icons/menu.png"  alt="menu" />
                </div>
                {/* logo */} 
                <Link href='/' className="inline-block">
                    <Image width={130} height={50} src="/icons/logo-mobile.png" alt="Logo" />
                </Link>
                {/* chats */}
                <div className="">
                    <Link href="/" className="block">
                        <Image width={25} height={50} src="/icons/bag.png" alt="collection" />
                    </Link>
                </div>
            </div>
      </header>
  )
}

export default MobileHeader
