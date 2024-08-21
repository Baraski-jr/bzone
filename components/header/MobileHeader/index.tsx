import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const MobileHeader = () => {
    return (
        <header className="md:hidden w-full bg-white py-5 ">
            <div className="flex justify-between items-center mx-auto w-[95%]">
                {/* navs */}
                <div className="">
                    <Image width={30} src="/icons/menu.png" alt="" />
                </div>
                {/* logo */} 
                <Link href='/' className="inline-block">
                    <Image className='' src="/icons/logo-mobile.png" alt="Logo" width={130}/>
                </Link>
                {/* chats */}
                <div className="">
                    <Link href="/" className="block">
                        <Image width={25} src="/icons/bag.png" alt="collection" />
                    </Link>
                </div>
            </div>
      </header>
  )
}

export default MobileHeader
