"use client"

import { useState } from "react"

export const ControlQuantity = () => {
  const [quantity, setQuantitiy] = useState(1)

  const handleQuantity = (type: "i" | "d") => {
    // if (type === "i" && quantity < product.inventory) {
    // } else if (type === "d" && product.quantity > 1) {
    // }
  }

  return (
    <div>
      {/* Quantity button */}
      <div className="flex flex-2 justify-center items-center border-2 border-slate-100 w-fit h-8">
        <div
          className="px-3 cursor-pointer hover:bg-slate-300 transition-transform duration-200"
          onClick={() => handleQuantity("d")}
        >
          -
        </div>
        <span className="block px-3">4</span>
        <div
          className="px-3 cursor-pointer hover:bg-slate-300 transition-all duration-300"
          onClick={() => handleQuantity("i")}
        >
          {" "}
          +
        </div>
      </div>
    </div>
  )
}
