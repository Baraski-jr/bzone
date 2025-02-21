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
        <div className="cursor-pointer " onClick={() => handleMenue()}>
          {openMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className="absolute -top-2 -right-1 bg-red-500 text-white w-6 h-6 rounded-full grid place-content-center">
              {counter}
            </span>
          </div>
        )}
        {isOpenCart && (
          <CartModel isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
        )}

        <div
          className={`z-30 border-t-2 border-slate-300 flex flex-col items-center gap-5 px-5 pt-[40%] min-h-dvh w-full bg-[#84BA86] absolute top-[5rem] left-0 ${animation} transition-all ease-in-out duration-500`}
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
