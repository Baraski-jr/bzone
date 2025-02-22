"use client"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const FooterComponent = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  )

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-[#141414] text-gray-300">
      <div className=" max-w-[100rem] w-[95%] mx-auto">
        {/* The First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:justify-items-end py-14 space-y-8 md:space-y-0 border-b-2 border-gray-500">
          {/* First Col*/}
          <div className="space-y-2">
            <Link
              href="/"
              className="font-bold text-3xl font-serif italic text-white"
            >
              {" "}
              B-ZONE{" "}
            </Link>
            <div className="w-full md:w-[90%]">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                eaque animi doloribus itaque obcaecati est!
              </p>
            </div>
            {/* Social Media Links */}
            <div className="flex space-x-2 pt-2">
              <Link
                title="facebook"
                href="/"
                className="rounded-lg border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700"
              >
                f
              </Link>
              <Link
                title="Lindkin"
                href="/"
                className="rounded-lg border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700"
              >
                ln
              </Link>
              <Link
                title="X"
                href="/"
                className="rounded-lg border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700"
              >
                X
              </Link>
            </div>
          </div>
          {/* Second */}
          <div className="flex w-full justify-between">
            <div className="">
              <h1 className="text-lg text-white font-semibold pb-2">
                Quick Links
              </h1>
              <div className="">
                <Link
                  className="block hover:text-[#84BA86] active:underline transition-colors duration-200"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="block hover:text-[#84BA86] active:underline transition-colors duration-200"
                  href="/products/all"
                >
                  Products
                </Link>
                <Link
                  className="block hover:text-[#84BA86] active:underline transition-colors duration-200"
                  href="/cart"
                >
                  Carts
                </Link>
              </div>
            </div>
            {/* Third */}
            <div className="">
              <h1 className="text-lg text-white font-semibold pb-2">
                Get In Touch
              </h1>
              <div className="">
                <h2>Busumbala</h2>
                <a
                  className="block hover:text-[#84BA86] active:underline transition-colors duration-200"
                  href="mailto:bzone@gmail.com"
                >
                  support@bzone.com
                </a>
                <a
                  className="block hover:text-[#84BA86] active:underline transition-colors duration-200"
                  href="tel:+220 000 0000"
                >
                  +200 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="text-center py-6">
          <p className=""> &copy; {currentYear} Reserved B-ZONE</p>
        </div>
      </div>
    </footer>
  )
}
export default FooterComponent
