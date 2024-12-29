'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { NavLinkProps } from '@/types'
import { usePathname } from 'next/navigation'
import { QuickCartView } from '@/components/ui/QuickCartView'

const MobileHeader = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const pathname = usePathname()

    const handleMenue = () => {
        setOpenCart(false)
        setOpenMenu((prev) => !prev)
    }

    const animation = openMenu ? 'translate-y-0' : 'translate-y-[100rem]'

    return (
        <div className="z-50 md:hidden w-full flex drop-shadow-md items-center h-20 fixed bg-[#84BA86] top-0 shadow-md">
            <div className="flex justify-between items-center mx-auto w-[95%] ">
                {/* Menu */}
                <Image
                    width={30}
                    height={50}
                    src="/icons/menu.png"
                    alt="menu"
                    className='cursor-pointer'
                    onClick={() => handleMenue()}
                />
                {/* logo */} 
                <Link href='/' className="font-bold text-2xl )font-serif italic text-slate-50"> B-ZONE </Link>
                {/* Cart icons */}
                {!openMenu && (
                    <Image
                        width={25}
                        height={50}
                        src="/icons/bag.png"
                        alt="Cart"
                        className='cursor-pointer'
                        onClick={() => setOpenCart((prev) => !prev)}
                    />)
                }
                {/* Open the quick cart view */}
                { openCart && <QuickCartView setIsOpen={setOpenCart} /> }

                <div className={`z-30 border-t-2 border-slate-300 flex flex-col items-center gap-5 px-5 pt-[40%] min-h-dvh w-full bg-[#84BA86] absolute top-[5rem] left-0 transition-transform ease-in-out duration-500 ${animation}`}>
                    { navLinks.map(({label, url}: NavLinkProps) => {
                        const isActive = pathname === url
                        const linkClass = isActive ? `font-bold underline-` : `font-light`
                        return (
                            <Link
                                key={label}
                                className={`inline-block capitalize text-white text-xl  ${linkClass}`} href={url}>
                                {label}
                            </Link>
                            )
                        }) }
                </div>
            </div>
      </div>
  )
}

export default MobileHeader

