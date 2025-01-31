"use client"
import React, { useEffect, useState } from "react"
import MobileHeader from "../MobileHeader"
import DesktopHeader from "../DesktopHeader"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"

const HeaderComponent = () => {
  const { counter, getCart } = useCartStore()
  const [isScrolled, setIsScrolled] = useState(false)

  const wixClient = useWixClient()
  useEffect(() => {
    getCart(wixClient)
  }, [wixClient])

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true) // Change the background color when scrolled more than 50px
      } else {
        setIsScrolled(false) // Reset the background when scrolled back up
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header>
      <MobileHeader counter={counter} isScrolled={isScrolled} />
      <DesktopHeader counter={counter} isScrolled={isScrolled} />
    </header>
  )
}

export default HeaderComponent
