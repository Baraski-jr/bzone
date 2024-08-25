import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProductCartProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCart: React.FC<ProductCartProps> = ({ name, imageUrl, price, id}) => {
  return (
    <Link href={`/Products/${id}`} className='relative grid place-content py-5 mb-1 md:py-0 h-full md:h-80 rounded-md hover:bg-slate-50 transition-all duration-200'>
      <div className="overflow-hidden bg-[#F5F5F5]">
        <Image width={580} height={200} src={imageUrl} alt={name} className='w-full scale-150 object-cover hover:translate-y-2 transition-all duration-700 ' />
      </div>
      <div className='flex flex-col justify-center  space-y-1 px-2 py-2'>
        <h2 className='text-base capitalize'>{name}</h2>
        <p className='text-sm'>GMD{price}.00</p>
      </div>
    </Link>
  )
}

export default ProductCart
