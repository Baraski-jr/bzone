"use client"
import React, { useEffect, useState } from "react"
import MobileHeader from "../MobileHeader"
import DesktopHeader from "../DesktopHeader"
import { useWixClient } from "@/hooks/useWixCient"
import { useCartStore } from "@/hooks/useCartStore"
import { CartModel } from "@/components/ui/cartModel"

const HeaderComponent = () => {
  const { counter, cart, getCart } = useCartStore()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  const wixClient = useWixClient()
  useEffect(() => {
    if (counter > 0 && cart) {
      getCart(wixClient)
    }
  }, [wixClient, getCart, counter, cart])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true) // Change the background color when scrolled more than 50px
      } else {
        setIsScrolled(false) // Reset the background when scrolled back up
      }
    }
    // Function to handle scroll event
    handleScroll()

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header>
      <CartModel isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
      <MobileHeader
        counter={counter}
        setIsOpenCart={setIsOpenCart}
        isScrolled={isScrolled}
      />
      <DesktopHeader
        counter={counter}
        isOpenCart={isOpenCart}
        setIsOpenCart={setIsOpenCart}
        isScrolled={isScrolled}
      />
    </header>
  )
}

export default HeaderComponent
