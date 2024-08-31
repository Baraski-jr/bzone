import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProductCartProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCart: React.FC<ProductCartProps> = ({ title, image, price, id}) => {
  return (
    <Link href={`/Products/${id}`} className='relative grid place-content py-5 mb-1 md:py-0 h-full md:h-80 rounded-md hover:bg-slate-50 transition-all duration-200'>
      <div className="overflow-hidden bg-[#F5F5F5]">
        <Image width={200} height={180} quality={100} src={image} alt={title} className='mx-auto w-full h-full object-cover hover:scale-105 transition-all duration-700 ' />
      </div>
      <div className='flex flex-col justify-center space-y-1 px-2 py-2'>
        <h2 className='text-base capitalize'>{title}</h2>
        <p className='text-sm font-semibold text-slate-500'>GMD{price}</p>
      </div>
    </Link>
  )
}

export default ProductCart
