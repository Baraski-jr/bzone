"use client"
import React, { useEffect, useState } from 'react'
import { BuyBtn } from '../buyButton'
import ProductGallary from '../ProductGallary'
import DOMPurify from "isomorphic-dompurify"
import { formatCurrency } from '@/lib/CurrencyFormatter'
import { products } from '@wix/stores'
import CustomizeProduct from '../customizeProduct'
import { AdditionInforComponent } from '../additionInforSection'
import Add from '../AddToCart'
import { VARIANT_ID } from '@/lib/constants'

function MainProductDisplay({product}: {product: products.Product}) {

  const [selectedVariant, setselectedVariant] = useState<products.Variant>()
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: string}>({})
  const [selectedProduct, setSelectedProduct] = useState<products.Choice | undefined>(undefined)

//   console.log("selected Product: ", selectedProduct)

  useEffect(() => {
    const choice = product.productOptions?.length && product.productOptions.length > 0 && product.productOptions[0].choices
    choice &&  setSelectedProduct(choice[0])
  }, [])

//   console.log("Product Variant: ", product)
  
  // console.log("Choice: ", choice && choice[0].media || [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-10 ">
        {product.productOptions && product.productOptions.length > 0 ? (
            <ProductGallary Media={(selectedProduct?.media) || ({} as products.Media)} />
        ):(
            <ProductGallary Media={product.media as products.Media} />
        )}
        <div className="w-full flex flex-col gap-6">
        <h2 className="hidden md:block font-semibold text-xl">
            {product.name}
        </h2>
        <div className="py-2 border-y-4 border-gray-50">
            {product.priceData?.price === product.priceData?.discountedPrice ? (
            <h3 className="font-medium text-2xl">
                {formatCurrency(product.priceData?.price || 0)}
            </h3>
            ) : (
            <div className="flex items-center gap-4">
                <h3 className="text-sm text-red-500 line-through">
                {formatCurrency(product.priceData?.price || 0)}
                </h3>
                <h2 className="font-medium text-lg">
                {formatCurrency(product.priceData?.discountedPrice || 0)}
                </h2>
            </div>
            )}
        </div>
        <div
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(product.description || ""),
            }}
        ></div>
        {/* Variation */}
        {product.variants && product.productOptions ? ( 
            <CustomizeProduct
                product={product}
                productId={product._id!}
                productOptions={product.productOptions} 
                variants={product.variants}
                setSelectedProduct={setSelectedProduct}
                selectedVariant={selectedVariant}
                setselectedVariant={setselectedVariant}
                selectedOptions={selectedOptions}
                setSelectedOptions={setSelectedOptions}
            /> 
        ) : (
        <div className="space-y-3">
            {(product.stock?.quantity ?? 0) > 1 && (
            <Add
                productId={product._id!}
                varianId={VARIANT_ID}
                stockNumber={product.stock?.quantity || 0}
            />
            )}

            <BuyBtn product={product} />
        </div>
            )}

         {/* Shipping estimate detail cart  */}
        <div className="flex justify-center items-center divide-x-[1px] space-x-2 border-[2px] border-slate-100 p-3 rounded-md">
            <div className="flex flex-col justify-center space-y-2 items-center px-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3d3d3d"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-truck"
            >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
            </svg>
            <p className="text-center text-slate-600 text-sm">
                Estimate delivery times:{" "}
                <b className="text-slate-900">3-5 days International.</b>
            </p>
            </div>
            <div className="flex flex-col justify-center space-y-2 items-center px-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#141414"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-package-plus"
            >
                <path d="M16 16h6" />
                <path d="M19 13v6" />
                <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                <path d="m7.5 4.27 9 5.15" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" x2="12" y1="22" y2="12" />
            </svg>
            <p className="text-center text-slate-600 text-sm">
                Free shipping & returns:{" "}
                <b className="text-slate-900">On all orders over $150.</b>
            </p>
            </div>
        </div>
        {/* Additianl information section */}
        <div className="">
            {product.additionalInfoSections?.map((section: any) => (
            <AdditionInforComponent
                key={section.title}
                title={section.title || ""}
                description={section.description || ""}
            />
            ))}
        </div>
        </div>
  </div>
  )
}

export default MainProductDisplay
