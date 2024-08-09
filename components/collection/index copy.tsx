import React from 'react'
import Image from 'next/image';
import ProductCart from '../ui/cart'

interface ProductCartProps {
  title: string;
  subTitle: string;
  bgUrl: string;
}


const Collections = ({title, subTitle, bgUrl}: ProductCartProps) => {
  return (
      <section className="py-6">
        {/* header */}
        <div className="container">
          <header className="text-center space-y-2 py-3">
            <h1 className="font-bold text-slate-700 text-2xl">{title}</h1>
            <p className="text-slate-500"> {subTitle}</p>
          </header>`
          <div className="sm:flex md:border-orange-500 lg:border-green-500 xl:border-blue-500 sm:border-slate-700 border-2 lg:gap-4">
            {/* image */}
              <Image className='object-cover object-right-bottom w-full sm:w-1/2 lg:w-1/3 xl:w-1/4' src={bgUrl} alt={title} width={200} height={250} />
            {/* products */}
              <div className="sm:w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <ProductCart name={'air'} url={'/products/marbo-shoes-product-01 (1).jpeg'} />
                  <ProductCart name={'nike'} url={'/products/marbo-shoes-product-03 (1).jpeg'} />
                  <ProductCart name={'adidas'} url={'/products/marbo-shoes-product-04-a (1).jpeg'} />
                  <ProductCart name={'pumer'} url={'/products/marbo-shoes-product-05-a (1).jpeg'} />
              </div>
          </div>
        </div>
    </section>
  )
}

export default Collections
