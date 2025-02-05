"use client"

import Link from "next/link"
import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { navLinks } from "@/lib/constants"
import { NavLinkProps } from "@/types"
import { usePathname } from "next/navigation"
import { CartModel } from "@/components/ui/cartModel"

const MobileHeader = ({
  counter,
  isScrolled,
  isOpenCart,
  setIsOpenCart,
}: {
  counter: number
  isScrolled: boolean

  isOpenCart: boolean
  setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname()

  const toggleCart = useCallback(() => {
    setIsOpenCart((prev) => !prev)
  }, [setIsOpenCart])

  const handleMenue = () => {
    // Close the cart Modal when the menu is open
    setOpenMenu((prev) => !prev)
  }

  const menu = openMenu ? "/icons/close-menu.png" : "/icons/open-menu.png"
  const animation = openMenu ? "translate-y-0" : "translate-y-[100rem]"
  const homePage =
    pathname === "/" && !isScrolled
      ? "bg-opacity-0"
      : "bg-[#84BA86] shadow-md bg-opacity-100"

  return (
    <div
      className={`z-50 md:hidden w-full flex drop-shadow-md items-center h-20 fixed ${homePage} top-0 transition-all duration-300`}
    >
      <div className="flex justify-between items-center mx-auto w-[95%] ">
        {/* Menu */}
        <Image
          width={40}
          height={40}
          src={menu}
          alt="menu"
          className="cursor-pointer "
          onClick={() => handleMenue()}
        />
        {/* logo */}
        <Link
          href="/"
          className="font-bold text-2xl )font-serif italic text-slate-50"
        >
          B-ZONE{" "}
        </Link>
        {/* Cart icons */}
        {!openMenu && (
          <div
            onClick={() => toggleCart()}
            className="flex w-10 relative cursor-pointer"
          >
            <Image
              width={40}
              height={40}
              src="/icons/bag.png"
              alt="Cart"
              className="cursor-pointer"
            />
            <span className="absolute -top-2 -right-1 bg-green-400 text-white w-6 h-6 rounded-full grid place-content-center">
              {counter}
            </span>
          </div>
        )}
        {isOpenCart && (
          <CartModel isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
        )}

        <div
          className={`z-30 border-t-2 border-slate-300 flex flex-col items-center gap-5 px-5 pt-[40%] min-h-dvh w-full bg-[#84BA86] absolute top-[5rem] left-0 transition-transform ease-in-out duration-500 ${animation}`}
        >
          {navLinks.map(({ label, url }: NavLinkProps) => {
            const isActive =
              pathname.split("?")[0].toLowerCase() === url.toLowerCase()
            const linkClass = isActive ? `font-bold underline-` : `font-light`
            return (
              <Link
                key={label}
                className={`inline-block capitalize text-white text-xl  ${linkClass}`}
                href={url}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
