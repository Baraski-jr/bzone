'use client';
import Add from '@/components/AddToCart';
import Buy from '@/components/buyButton';
import CustomizeProduct from '@/components/customizeProduct';
import CustomNav from '@/components/CustomNav';
import FeatureProducts from '@/components/featureProducts';
import Gutter from '@/components/Gutter';
import Thumbnails from '@/components/thumbnails';
import { products } from '@/constants';
import { PageProps, ProductsType } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const ProductDetail = ({params}: PageProps) => {
  const pat = params.productId.replace(/-/g, ' ');
  const [id, setId] = useState(0);
  const [product, setProduct] = useState<ProductsType>()
  const [index, setIndex] = useState(0);
  const discount = 10;

  useEffect(() => {
    const filt = products.filter((items) => (items.title === pat))
    setProduct(filt[0])
    setId(filt[0].id)
  },[pat])

  if (!product) return <div>Product not found.</div>;

  return (
    <div className='max-w-[300rem] w-[90%] mx-auto'>
    <Gutter />
      <section className="py-7">
        <CustomNav title={product.title} />
        <h2 className="md:hidden font-semibold text-xl md:text-2xl pb-3 pl-3">{product.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-x-10 ">
        {/* Product image display section */}
        <div className="md:flex">
            {/* Thumbnails for larger screens */}
            <div className="hidden md:block">
              <Thumbnails direction={'flex-col'} id={id} images={product.images} setIndex={ setIndex } />
            </div>
            {/* Main product image */}
            <div className="bg-[#F5F5F5] min-h-[15rem] md:min-h-fit flex items-center">
              <Image 
                width={700} 
                height={700} 
                quality={100} 
                priority
                src={product.images[index]} 
                alt={product.title} 
                className='w-1/2 md:w-full max-w-full mx-auto hover:scale-105 transition-all duration-300' 
              />
            </div>
            {/* Thumbnails for mobile view */}
            <div className="md:hidden pt-5">
              <Thumbnails id={id} images={product.images} setIndex={ setIndex } />
            </div>
        </div>
        {/* Product details */}
        <div className="w-full flex flex-col gap-6">
          <h2 className="hidden md:block font-semibold text-xl md:text-2xl">{product.title}</h2>
            <div className="py-5 border-y-4 border-gray-50">
              <h1 className="font-bold text-base">
                {/* Price:  */}
                { discount > 0 && <span className='text-red-600 line-through mx-1 font-normal text-sm'>GMD{product.price}.00</span> }
                <span className='text-slate-900'> GMD{product.price}.00</span>
            </h1> 
          </div>
          <p className="font-normal text-slate-500">{product.description}</p>
            <CustomizeProduct colours={product.colours} sizes={products[id].sizes} />
            <div className="border-y-4 border-gray-50 py-3">
            {/* Controlling the disability of the Adding BTN */}
            {product.inventory === 0 ? 
                <Add inventory={product.inventory} disable={true} ControlQuantity={true} /> :
                <Add inventory={product.inventory} ControlQuantity={true} />
              }
            </div>
            {/* Controlling the disability of the buying BTN */}
            {product.inventory === 0 ? <Buy disable={true} /> : <Buy /> }
            {/* <Buy /> */}
        </div>
      </div>
      </section>
      {/* Related producct */}
      <section className="">
        <FeatureProducts title={'Related Products'} />
        <FeatureProducts />
      </section>
    </div>
  );
}

export default ProductDetail;
