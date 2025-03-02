"use client"

import { navLinks } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useCallback } from "react"
import { NavLinkProps } from "@/types"
import { CartModel } from "@/components/ui/cartModel"
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs"

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
  // Clerk
  const { user } = useUser()
  // console.log(user)

  const pathname = usePathname()
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
          {navLinks.map(({ url, label }: NavLinkProps) => {
            const isActive =
              pathname.split("?")[0].toLowerCase() === url.toLowerCase()

            return (
              <Link
                key={label}
                className={`${
                  isActive
                    ? ` bg-opacity-20 border-slate-50 border-b-2`
                    : `font-medium border-b-[1px]`
                } py-2 px-4 rounded-md border-transparent active:bg-opacity-60 hover:border-slate-50 bg-gray-50 bg-opacity-5 hover:bg-opacity-10 inline-block capitalize text-white text-base  transition-all duration-200`}
                href={url}
              >
                {label}
              </Link>
            )
          })}
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
            <span className="absolute -top-2 -right-1 bg-green-400 text-white w-6 h-6 rounded-full grid place-content-center">
              {counter}
            </span>
          </button>
          {/* User */}
          <ClerkLoaded>
            <SignedIn>
              <Link
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
                {/* <PackageIcon className="w-8 h-8 text-white" /> */}
              </Link>
            </SignedIn>{" "}
            {user ? (
              <div className="flex items-center gap-2">
                <UserButton />
                <div className="hidden sm:block text-xs text-white">
                  <p className=""> Welcome Back</p>
                  <p className="font-bold ">{user.username}</p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 bg-opacity-5 hover:bg-opacity-20 text-white py-2 px-4 rounded-md transition-all duration-200">
                <SignInButton />
              </div>
            )}
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader
