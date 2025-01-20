"use client"

import Add from "@/components/AddToCart"
import Buy from "@/components/buyButton"
import CustomizeProduct from "@/components/customizeProduct"
import CustomNav from "@/components/CustomNav"
import FeatureProducts from "@/components/featureProducts"
import Gutter from "@/components/Gutter"
import ProductGallary from "@/components/ProductGallary"
import SkeletonProductDetailPage from "@/components/ui/Skeleton/SkeletonProductDetailPage"
import { products } from "@/lib/constants"
import { PageProps } from "@/types"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function Page({ params }: PageProps) {
  const [productId, setProductId] = useState<string | null>(null)
  const discount = 10

  useEffect(() => {
    params.then((data) => {
      setProductId(data.productId)
    })
  }, [params])

  if (!productId) return <SkeletonProductDetailPage />
  const product = products.find(
    (product) => product.title === productId.replaceAll(/-/g, " ")
  )
  if (!product) return <div>Product not found.</div>

  return (
    <div className="max-w-[300rem] w-[90%] mx-auto">
      <Gutter />
      <section className="py-7">
        <CustomNav title={product.title} />
        <h2 className="md:hidden font-semibold text-xl md:text-2xl pb-3 pl-3">
          {product.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-x-10 ">
          {/* Product image display section */}
          <ProductGallary product={product} />

          {/* Product details */}
          <div className="w-full flex flex-col gap-6">
            <h2 className="hidden md:block font-semibold text-xl md:text-2xl">
              {product.title}
            </h2>
            <div className="py-5 border-y-4 border-gray-50">
              <h1 className="font-bold text-base">
                {/* Price:  */}
                {discount > 0 && (
                  <span className="text-red-600 line-through mx-1 font-normal text-sm">
                    GMD{product.price}.00
                  </span>
                )}
                <span className="text-slate-900"> GMD{product.price}.00</span>
              </h1>
            </div>
            <p className="font-normal text-slate-500">{product.description}</p>

            <CustomizeProduct
              colours={product.colours}
              sizes={products[product.id].sizes}
            />

            <div className="border-y-4 border-gray-50 py-3 flex gap-x-3">
              {/* Controlling the disability of the Adding BTN */}
              {product.inventory === 0 ? (
                <Add product={product} disable={true} />
              ) : (
                <Add product={product} />
              )}
              {/* <Buy /> */}
              {product.inventory === 0 ? (
                <Link className="block flex-1 w-full" href={"/checkout"}>
                  {" "}
                  <Buy disable={true} />{" "}
                </Link>
              ) : (
                <Link className="block flex-1 w-full" href={"/checkout"}>
                  {" "}
                  <Buy />{" "}
                </Link>
              )}
            </div>

            {/* Controlling the disability of the buying BTN */}
          </div>
        </div>
      </section>
      {/* Related producct */}
      <section className="">
        <FeatureProducts title={"Related Products"} />
        <FeatureProducts />
      </section>
    </div>
  )
}
