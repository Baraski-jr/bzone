import Add from "@/components/AddToCart"
import CustomizeProduct from "@/components/customizeProduct"
import CustomNav from "@/components/CustomNav"
import Gutter from "@/components/Gutter"
import ProductGallary from "@/components/ProductGallary"
import { queryProducts } from "@/model/store/store-api"
import { products } from "@wix/stores"
import { notFound } from "next/navigation"
import React from "react"

type ParamType = {
  slug: string
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ParamType>
}) {
  const param = await params
  if (param.slug) {
    const product = (
      await queryProducts({
        slug: param.slug,
        limit: 1,
      })
    ).items[0]

    if (product && product.name) {
      return {
        title: product.name,
      }
    }
    if (product && product.name) {
      return {
        title: product.name,
        description: product.description || "A great product for you.",
        keywords: "ecommerce, product, sale",
        openGraph: {
          title: product.name,
          description: product.description || "A great product for you.",
          images: product.media?.items?.[0]?.image?.url || "",
        },
      }
    }
    return {
      title: "Unavailable Product",
    }
  }
}
export async function generateStaticParams(): Promise<{ slug?: string }[]> {
  return queryProducts({
    limit: 10,
  })
    .then((items) =>
      items.items?.map((product: products.Product) => ({
        slug: product.slug,
      }))
    )
    .catch((err) => {
      return []
    })
}

export default async function Page({ params }: { params: Promise<ParamType> }) {
  const param = await params
  if (!param.slug) return notFound()
  const product = (await queryProducts({ slug: param.slug, limit: 1 })).items[0]
  if (!product) return notFound()

  return (
    <div className="max-w-[300rem] w-[90%] mx-auto">
      <Gutter />
      <section className="py-7">
        <CustomNav name={product.name!} />
        <h2 className="md:hidden font-semibold text-xl md:text-2xl pb-3 pl-3">
          {product.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-10 ">
          <ProductGallary product={product!} />
          <div className="w-full flex flex-col gap-6">
            <h2 className="hidden md:block font-semibold text-xl md:text-2xl">
              {product.name}
            </h2>
            <div className="py-5 border-y-4 border-gray-50">
              <h1 className="font-bold text-base">
                {(product.priceData?.discountedPrice ?? 0) > 0 && (
                  <span className="text-red-600 line-through mx-1 font-normal text-sm">
                    {product.priceData?.formatted?.price}
                  </span>
                )}
                <span className="text-slate-900">
                  {product.priceData?.formatted?.price}
                </span>
              </h1>
            </div>
            <p className="text-sm text-gray-500">{product.description}</p>

            {product.variants && product.productOptions ? (
              <CustomizeProduct
                product={product}
                productId={product._id!}
                variants={product.variants}
                productOptions={product.productOptions}
              />
            ) : (
              <Add
                productId={product._id!}
                varianId="00000000-0000-0000-0000-000000000000"
                stockNumber={product.stock?.quantity || 0}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
