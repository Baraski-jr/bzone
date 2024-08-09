
import Link from 'next/link'
import React from 'react'

const MobileHeader = () => {
    return (
        <header className="md:hidden w-full bg-white py-5 ">
            <div className="flex justify-between items-center mx-auto w-[95%]">
                {/* navs */}
                <div className="">
                    <img width={30} src="/icons/menu.png" alt="" />
                </div>
                {/* logo */}
                <div className="logo ">
                    <img className='' src="/icons/logo-mobile.png" alt="Logo" width={130}/>
                </div>
                {/* chats */}
                <div className="">
                    <Link href="/" className="block">
                        <img width={25} src="/icons/bag.png" alt="collection" />
                    </Link>
                </div>
            </div>
      </header>
  )
}

export default MobileHeader
