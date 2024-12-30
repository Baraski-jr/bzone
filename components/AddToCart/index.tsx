'use client'
import React, { useState } from 'react'

const Add: React.FC<{inventory: number, ControlQuantity?: boolean, disable?: boolean}> = ({inventory, ControlQuantity = false, disable=false}) => {
  const [quantity, setQuantity] = useState(0)

  const handleQuantity = (type: 'i' | 'd') => {

    if (type === 'i' && quantity < inventory) { setQuantity((prev) => prev + 1) }
    else if (type === 'd' && quantity > 1) { setQuantity((prev) => prev - 1) }
    
  };

  return (
    <div className='flex items-center gap-x-5'>    
      
    {/* Quantity button */}
      { ControlQuantity && (
        <div className="flex flex-2 justify-center items-center border-2 w-fit h-12">
          <div className="px-3 cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => handleQuantity("d")}
          > -
          </div>
          <div className="px-3">{ quantity }</div>
          <div className="px-3 cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => handleQuantity("i")}
          > +
          </div>
        </div>
      )
    }
      {/* Add Cart button */}
      <button
        onClick={() => setQuantity(1)}
        disabled={disable}
        className={`flex-1 bg-slate-950 text-base text-white h-12 transition-colors duration-300 ${disable? 'bg-opacity-80 cursor-not-allowed': 'hover:bg-opacity-95'}`}
      >
        ADD TO CART
      </button>
    </div>
  )
}

export default Add