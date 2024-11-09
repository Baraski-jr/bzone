'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { NavLinkProps } from '@/types'
import { usePathname } from 'next/navigation'
import Cart from '@/components/cart'

const MobileHeader = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const pathname = usePathname()

    const animation = openMenu ? 'translate-x-0' : 'translate-x-[100rem]'

    return (
        <div className="z-50 md:hidden w-full flex items-center h-20 fixed bg-[#9AC37D] top-0 shadow-md">
            <div className="flex justify-between items-center mx-auto w-[95%] ">
                {/* Menu */}
                <Image
                    width={30}
                    height={50}
                    src="/icons/menu.png"
                    alt="menu"
                    className='cursor-pointer'
                    onClick={() => setOpenMenu((prev) => !prev)}
                />
                {/* logo */} 
                <Link href='/' className="font-bold text-2xl font-serif italic text-slate-50"> B-ZONE </Link>
                {/* icons */}
                <Image
                    width={25}
                    height={50}
                    src="/icons/bag.png"
                    alt="Cart"
                    className='cursor-pointer'
                    onClick={() => setOpenCart((prev) => !prev)}
                />
                <div className={`z-50 flex flex-col gap-5 px-5 py-5 h-[calc(100vh-21rem)] w-full bg-slate-900 absolute top-[5rem] left-0 transition-transform ease-in-out duration-500 ${animation}`}>
                    { navLinks.map(({label, url}: NavLinkProps) => {
                        const isActive = pathname === url
                        const linkClass = isActive ? `font-semibold text-green-600` : `text-base font-medium text-white`
                        return (
                            <Link
                                key={label}
                                className={`inline-block uppercase text-base font-bold  ${linkClass}`} href={url}>
                                {label}
                            </Link>
                            )
                        }) }
                </div>
                {/* {openCart && (<Cart /> )} */}
            </div>
      </div>
  )
}

export default MobileHeader

