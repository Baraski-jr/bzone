import React from 'react'

interface ProductCartProps {
  name: string;
  url: string;
}

const ProductCart: React.FC<ProductCartProps> = ({ name, url }) => {
  return (
    <figure className='relative shadow-lg rounded-md bg-yellow-50 bg-opacity-25 flex flex-col justify-between '>
        <img className='rounded-lg mx-auto' width={250} src={url} alt="" />
      <figcaption className='space-y-2 px-2 py-3'>
        <h2 className='font-semibold text-xl capitalize'>{name}</h2>
        <p className='font-semibold text-base'>Price: $100</p>
      </figcaption>
    </figure>

  )
}

export default ProductCart
