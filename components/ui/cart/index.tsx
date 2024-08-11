import React from 'react'

interface ProductCartProps {
  name: string;
  price: number;
  url: string;
}

const ProductCart: React.FC<ProductCartProps> = ({ name, url, price }) => {
  return (
    <figure className='relative h-[98%] rounded-md flex flex-col justify-between hover:shadow-2xl max-w-full origin-top hover:scale-100 active:rotate-2 ease-in-out transition-all duration-1000'>
      <img src={url} alt={name} className=' w-full max-w-full h-full object-cover bg-[#F6F6F6] bg-opacity-70' />
      {/* <img src={url} alt={name} className='w-full max-w-full h-full object-cover bg-[#F6F6F6] bg-opacity-70' /> */}
      <figcaption className='flex flex-col justify-end space-y-1 px-2 py-2 mt-auto'>
        <h2 className='text-base capitalize'>{name}</h2>
        <p className=' text-base'>GMD{price}.00</p>
      </figcaption>
    </figure>

  )
}

export default ProductCart
