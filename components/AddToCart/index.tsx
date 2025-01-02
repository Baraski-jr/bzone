'use client'
import { useCart } from '@/context/CartContext';
import { ProductsType } from '@/types';
import React, { useEffect } from 'react'

const Add: React.FC<{ disable?: boolean, product: ProductsType}> = ({ product,  disable=false}) => {

  const [Quantitiy, setQuantitiy] = React.useState(1);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const existingProduct = cart.find(item => item.id === product.id);
    if(existingProduct) {
      setQuantitiy(existingProduct.quantity);
    }
  }, [cart])


  const handleAddBtn = () => {
    if(product.inventory < 1) return;
    if(product.inventory <= Quantitiy) return;
    addToCart(product);
  }
  return (
    <div className='flex items-center gap-x-5'>    
      
      {/* Add Cart button */}
      <button
        onClick={() => handleAddBtn()}
        disabled={disable}
        className={`flex-1 bg-slate-950 text-base text-white h-12 transition-colors duration-300 ${disable? 'bg-opacity-80 cursor-not-allowed': 'hover:bg-opacity-95'}`}
      >
        ADD TO CART
      </button>
    </div>
  )
}

export default Add