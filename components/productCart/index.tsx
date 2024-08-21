import Link from 'next/link';
import React from 'react'

interface ProductCartProps {
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCart: React.FC<ProductCartProps> = ({ name, imageUrl, price }) => {
  return (
    <Link href='/Products' className='relative grid place-content py-5 md:py-0 h-full md:h-80 rounded-md hover:shadow-lg transition-all duration-500'>
      <div className="overflow-hidden bg-[#F5F5F5]">
        <img width={180} height={200} src={imageUrl} alt={name} className='w-full object-cover hover:translate-y-3 transition-all duration-700 ' />
      </div>
      <div className='flex flex-col justify-end space-y-1 px-2 py-2 mt-auto'>
        <h2 className='text-base capitalize'>{name}</h2>
        <p className='text-sm md:text-base'>GMD{price}.00</p>
      </div>
    </Link>
  )
}

export default ProductCart
