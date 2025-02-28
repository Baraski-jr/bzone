"use client"

import Link from "next/link"
import React, { useCallback, useState } from "react"
import { navLinks } from "@/lib/constants"
import { NavLinkProps } from "@/types"
import { usePathname } from "next/navigation"
import { CartModel } from "@/components/ui/cartModel"
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs"

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
  // Clerk
  const { user } = useUser()
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname()

  const toggleCart = useCallback(() => {
    setIsOpenCart((prev) => !prev)
  }, [setIsOpenCart])

  const handleMenue = () => {
    // Close the cart Modal when the menu is open
    setIsOpenCart(false)

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

        <div className="flex gap-4 items-center">
          <button
            type="button"
            onClick={() => toggleCart()}
            className="py-2 px-4 rounded-md bg-gray-50 bg-opacity-5 hover:bg-opacity-20 flex relative cursor-pointer"
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
          </button>

          {/* User */}
          <ClerkLoaded>
            <SignedIn>
              {/* <Link
                className="flex-1 relative items-center skew-x-2 bg-gray-50 bg-opacity-5 hover:bg-opacity-20 text-white py-2 px-4 rounded-md"
                href={`/orders`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-package"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                  <path d="M12 22V12" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <path d="m7.5 4.27 9 5.15" />
                </svg>
              </Link> */}
            </SignedIn>{" "}
            {user ? (
              <div className="flex items-center gap-2">
                <UserButton />
              </div>
            ) : (
              <SignInButton />
            )}
          </ClerkLoaded>
        </div>

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
