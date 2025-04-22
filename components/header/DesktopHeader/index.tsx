"use client"

import { navLinks } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useCallback } from "react"

const DesktopHeader = ({
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
  const isActive = (href: string) => pathname === href

  const homePage =
    pathname === "/" && !isScrolled
      ? "bg-opacity-0"
      : "bg-[#84BA86] shadow-sm bg-opacity-100"

  // Toggle the cart view
  const toggleCart = useCallback(() => {
    setIsOpenCart((prev) => !prev)
  }, [setIsOpenCart])

  return (
    <div
      className={`fixed top-0 z-30 hidden md:block w-full ${homePage} transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-24 mx-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-3xl font-serif italic text-white"
        >
          B-ZONE{" "}
        </Link>
        {/* Navigation links */}
        <nav className="flex gap-5">
          {navLinks.map(
            ({ url = "/", label }: { url?: string; label: string }) => {
              return (
                <Link
                  key={label}
                  className={
                    isActive(url)
                      ? ` bg-opacity-20 border-slate-50 border-b-2 py-2 px-4 rounded-md active:bg-opacity-80 hover:border-slate-50 bg-gray-50 hover:bg-opacity-10 inline-block capitalize text-white text-base  transition-all duration-200`
                      : `font-medium border-b-[1px] py-2 px-4 rounded-md border-transparent active:bg-opacity-60 hover:border-slate-50 bg-gray-50 bg-opacity-5 hover:bg-opacity-10 inline-block capitalize text-white text-base  transition-all duration-200`
                  }
                  href={url}
                >
                  {label}
                </Link>
              )
            }
          )}
        </nav>

        <div className="flex items-center gap-4">
          {/* Cart icon with counter */}
          <button
            type="button"
            onClick={toggleCart}
            className="py-2 px-4 rounded-md bg-gray-50 bg-opacity-5 hover:bg-opacity-20 flex relative cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <span className={`absolute -top-2 -right-1 ${counter === 0 ? 'bg-slate-200 text-slate-900': 'bg-green-400 text-white'} w-6 h-6 rounded-full grid place-content-center`}>
              {counter}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader
