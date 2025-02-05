"use client"

import { navLinks } from "@/lib/constants"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useCallback, useState } from "react"
import { NavLinkProps } from "@/types"
import { CartModel } from "@/components/ui/cartModel"
const DesktopHeader = ({
  isOpenCart,
  setIsOpenCart,
  counter,
  isScrolled,
}: {
  isOpenCart: boolean
  setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>
  counter: number
  isScrolled: boolean
}) => {
  const pathname = usePathname()
  const homePage =
    pathname === "/" && !isScrolled
      ? "bg-opacity-0"
      : "bg-[#84BA86] shadow-sm bg-opacity-100"

  const toggleCart = useCallback(() => {
    setIsOpenCart((prev) => !prev)
  }, [setIsOpenCart])

  return (
    <div
      className={`fixed top-0 z-50 hidden md:block w-full ${homePage} transition-all duration-300`}
    >
      {/* Control for the opening and closing of QuickCartView*/}
      <CartModel isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />

      <div className="flex items-center justify-between h-24 mx-8">
        {/* logo */}
        <Link
          href="/"
          className="font-bold text-3xl font-serif italic text-white"
        >
          B-ZONE{" "}
        </Link>
        {/* navs */}
        <nav className="flex gap-5">
          {navLinks.map(({ url, label }: NavLinkProps) => {
            const isActive =
              pathname.split("?")[0].toLowerCase() === url.toLowerCase()
            const linkClass = isActive
              ? `font-bold underline-offset-3`
              : `font-light`
            return (
              <Link
                key={label}
                className={`inline-block capitalize text-white text-base hover:underline ${linkClass} transition-all duration-200`}
                href={url}
              >
                {label}
              </Link>
            )
          })}
        </nav>
        {/* Cart */}
        <div
          onClick={() => toggleCart()}
          className="flex w-10 relative cursor-pointer"
        >
          <Image
            width={25}
            height={50}
            src="/icons/bag.png"
            alt="Cart"
            className="w-auto"
          />
          <span className="absolute -top-2 -right-1 bg-green-400 text-white w-6 h-6 rounded-full grid place-content-center">
            {counter}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader
