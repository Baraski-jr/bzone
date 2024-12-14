'use client'
import { useState } from "react";


export const ControlQuantity = ({inventory,}: {inventory: number} ) => {
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type: 'i' | 'd') => {
  
      if (type === 'i' && quantity < inventory) { setQuantity((prev) => prev + 1) }
      else if (type === 'd' && quantity > 1) { setQuantity((prev) => prev - 1) }
      
    };

    return ( 
        <div>
                  
    {/* Quantity button */}
      <div className="flex flex-2 justify-center items-center border-2 border-slate-100 w-fit h-8">
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
    </div>
    );
}