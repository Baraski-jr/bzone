import client from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

const ProductDetail = async ({ params }: { params: {
  productId: any; id: string 
} }) => {
  const id = params.productId;

  const GET_DATA = gql`
    query {
      product(id: ${id}) {
        id
        title
        price
        description
        images
      }
    }
  `;

  const { data } = await client.query({ query: GET_DATA });
  const product = data.product;

  return (
    <section className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-x-10 w-[95%] mx-auto">
        {/* product image display section*/}
        <div className="md:flex">
          <div className="hidden md:flex flex-col gap-y-3 pr-3">
            {product.images.map((url: string) => (
              <div key={url} className="overflow-hidden bg-[#F5F5F5] p-1 px-2 border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
                <Image width={80} height={80} className='w-auto' src={url} alt="shoes" />
              </div>
            
            ))}
          </div>
          <div className="bg-[#F5F5F5] p-5 md:w-full">
            <Image width={700} height={130} quality={100} className='w-1/2 md:w-full max-w-full mx-auto' src={product.images[0]} alt='Products image' ></Image>
          </div>
          {/* More option images visibel only on mobile view */}
          {/* Main product image */}
          <div className="md:hidden flex gap-x-5 py-2 border-b-2">
            {product.images.map((url: string) => (
              <div key={url} className="overflow-hidden bg-[#F5F5F5] p-1 px-2 rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
                <Image width={50} height={50} className='' src={url} alt="shoes" />
              </div>
            ))
          }
          </div>
        </div>
        {/* Product detaisls right  */}
        <div className="w-full size-full space-y-5 pt-4">
          <h2 className="font-semibold text-xl">{product.title} </h2>
          <h1 className="font-semibold">Price: <span className='text-amber-600'>GMD{product.price}.00 </span></h1> 
          <p className="font-medium text-slate-500"> { product.description } </p>
          <div className="space-y-5">
            <h3 className="font-semibold text-base">Select Size</h3>
            <div className="space-x-2">
              {
                ['S', 'M', 'X', 'XL','XXL'].map((size) => (
                  <span key={size} className="bg-slate-100 size-5 px-3 py-2.5 font-semibold text-base border-2 border-transparent hover:border-slate-400 transition-all duration-300">{ size }</span>
                ))
              }
            </div>
          </div>
          <div className="py-5 flex gap-x-3">
            <button className="bg-slate-950 text-base text-white p-3">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail