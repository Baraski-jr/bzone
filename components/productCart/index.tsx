import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProductCartProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCart: React.FC<ProductCartProps> = ({ name, imageUrl, price }) => {
  return (
    <Link href='/Products' className='relative py-5 md:py-0 h-[98%] rounded-md flex flex-col justify-between hover:shadow-xl max-w-full transition-all duration-500'>
      <div className="overflow-hidden">
        <img width={180} height={200} src={imageUrl} alt={name} className='w-full max-w-full h-full object-cover scale-105 hover:scale-125 hover:translate-y-3 hover:rotate-12 transition-all duration-700 bg-[#F6F6F6]' />
      </div>
      <div className='flex flex-col justify-end space-y-1 px-2 py-2 mt-auto'>
        <h2 className='text-base capitalize'>{name}</h2>
        <p className='text-base'>GMD{price}.00</p>
      </div>
    </Link>
  )
}

export default ProductCart
