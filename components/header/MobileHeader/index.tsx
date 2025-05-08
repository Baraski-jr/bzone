"use client"

import Link from "next/link"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { navLinks } from "@/lib/constants"
import { NavLinkProps } from "@/types"
import { usePathname, useRouter } from "next/navigation"
const MobileHeader = ({
  counter,
  isScrolled,
  setIsOpenCart,
}: {
  counter: number
  isScrolled: boolean
  setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const pathname = usePathname()
  const router = useRouter()


  // Acitive navigation link for the menu element itself

  const isActive = (href: string) => pathname === href
  const handleLinkClick = (url: string) => {
    setOpenMenu(false)
    if (window.location.pathname === url) {
      // Same path: refresh the page
      router.refresh()
    } else {
      // Different path: navigate normally
      router.push(url)
    }
  }

  const toggleCart = useCallback(() => {
    setIsOpenCart((prev) => !prev)
  }, [setIsOpenCart])

  // Prevent the user from clicking on the body when the menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [openMenu])

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setOpenMenu(false)
  //     }
  //   }

  //   if (openMenu) {
  //     document.addEventListener("mousedown", handleClickOutside)
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside)
  //   }
  // }, [openMenu])

  const homePage =
    pathname === "/" && !isScrolled
      ? "bg-opacity-0"
      : "bg-[#84BA86] shadow-md bg-opacity-100"

  return (
    <>
      <div
        className={`md:hidden w-full flex items-center z-20 h-20 fixed bg-primary ${homePage} `}
      >
        <div className="flex justify-between items-center mx-auto w-[95%] ">
          {/* Menu */}
          <button
            type="button"
            onClick={handleMenu}
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
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          {/* logo */}
          <Link
            href={"/"}
            className="font-bold text-2xl font-serif italic text-slate-50"
          >
            B-ZONE{" "}
          </Link>

          {/* Cart icons */}
          <div className="flex gap-4 items-center">
            <button
              type="button"
              onClick={toggleCart}
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
              <span className={`absolute -top-2 -right-1 ${counter === 0 ? 'bg-slate-200 text-slate-900': 'bg-green-400 text-white'} w-6 h-6 rounded-full grid place-content-center`}>
                {counter}
              </span>
            </button>
          </div>

          {/* Menu */}
          <div
            className={`${
              openMenu ? " translate-y-0 " : "-translate-y-[100%] delay-500 "
            } cursor-pointer absolute z-50 top-0 left-0 min-h-screen w-full bg-slate-900 bg-opacity-70 transition-transform ease-in-out duration-0`}
          >
            <div
              className={`${
                openMenu
                  ? "translate-y-0  duration-500"
                  : "-translate-y-[100%]  duration-500"
              }  cursor-default bg-primary drop-shadow-xl rounded-b-xl border-t-2 flex flex-col items-center gap-5 min-h-16 w-full transition-all ease-in-out`}
            >
              <div className="flex flex-col justify-center gap-4 w-full p-5">
                <div className="flex justify-between items-center">
                  <button
                    onClick={handleMenu}
                    className="self-start hover:rotate-180 active:-rotate-180 transform transition-all duration-200 mb-3"
                    type="button"
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
                      className="lucide lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                {navLinks.map(({ label, url }: NavLinkProps) => {
                  return (
                    <Link
                      key={label}
                      onClick={(e) => {
                        e.preventDefault()  // stop normal navigation
                        handleLinkClick(url)
                      }}
                      className={`${
                        isActive(url)
                          ? ` bg-opacity-20 border-slate-50 border-b-2 py-2 px-4 rounded-md hover:border-slate-50 active:bg-opacity-80 bg-gray-50  hover:bg-opacity-10 inline-block capitalize text-white text-base  transition-all duration-200`
                          : `font-medium border-b-[1px] py-2 px-4 rounded-md border-transparent hover:border-slate-50 active:bg-opacity-60 bg-gray-50 bg-opacity-5 hover:bg-opacity-10 inline-block capitalize text-white text-base  transition-all duration-200`
                      } `}
                      href={url}
                    >
                      {label}
                    </Link>
                  )
                })}
                {/* <Link
                  className={`${
                    pathname.split("?")[0].toLowerCase() === "/orders"
                      ? ` bg-opacity-20 border-slate-50 border-b-2`
                      : `font-medium border-b-[1px]`
                  } hover:border-b-slate-100 border-transparent relative flex gap-2 items-center skew-x-2 bg-gray-50 bg-opacity-5 hover:bg-opacity-10 text-white py-2 px-4 rounded-md transition-all duration-200`}
                  href={`/orders`}
                >
                  <span className="">My Orders</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileHeader
