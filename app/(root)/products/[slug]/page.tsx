import Add from "@/components/AddToCart"
import Gutter from "@/components/Gutter"
import ProductGallary from "@/components/ProductGallary"
import { VARIANT_ID } from "@/lib/constants"
import { queryProducts } from "@/model/store/store-api"
import { products } from "@wix/stores"
import React from "react"
import DOMPurify from "isomorphic-dompurify"
import Link from "next/link"
import ProductCart from "@/components/ui/productCart"
import { AdditionInforComponent } from "@/components/additionInforSection"
import { formatCurrency } from "@/lib/CurrencyFormatter"
import { BuyBtn } from "@/components/buyButton"
import BreadCrumb from "@/components/BreadCrumb"

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
    .catch((error) => {
      return []
    })
}

export default async function Page({ params }: { params: Promise<ParamType> }) {
  try {
    const param = await params
    const product = (await queryProducts({ slug: param.slug, limit: 1 }))
      .items[0]

    // Similar prodcuts
    const products = await queryProducts({
      collectionId: product.collectionIds && product.collectionIds[0],
      limit: 8,
    })
    const SimilarProducts = products.items.filter(
      (similarProduct) => similarProduct._id != product._id
    )

    return (
      <div className="max-w-[95rem] w-[90%] mx-auto">
        <Gutter />
        <section className="py-7">
          <div className="pb-3">
            <BreadCrumb name={product.name || ""} />
          </div>
          <h2 className="md:hidden font-semibold text-xl md:text-2xl pb-3 pl-3">
            {product.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-10 ">
            <ProductGallary product={product || ""} />
            <div className="w-full flex flex-col gap-6">
              <h2 className="hidden md:block font-semibold text-xl md:text-2xl">
                {product.name}
              </h2>
              <div className="py-2 border-y-4 border-gray-50">
                {product.priceData?.price ===
                product.priceData?.discountedPrice ? (
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
              {/* {product.variants && product.productOptions ? ( 
              <CustomizeProduct
                //   product={product}
                //   productId={product._id!}
                //   variants={product.variants}
                //   productOptions={product.productOptions}
                // /> */}
              {/* // ) : ( */}
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

              {/* Shipping estimate detail cart */}
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
        </section>
        {/* Similar prodcuts */}
        <section className="my-5 space-y-3">
          <div className="space-y-2">
            <h2 className="text-center font-semibold text-lg md:text-xl lg:text-2xl">
              People Also Bought
            </h2>
            <p className="text-center text-slate-700 ">
              Here’s some of our most similar products people are buying. Click
              to discover trending style.
            </p>
          </div>
          <section className="space-y-5 md:space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-9">
              {SimilarProducts.map((product) => (
                <ProductCart key={product._id} product={product} />
              ))}
            </div>
          </section>
        </section>
      </div>
    )
  } catch (error) {
    return (
      <div className="flex flex-col justify-center items-center space-y-4 min-h-[60dvh]">
        <p className="">Product not available</p>
        <Link
          href={"/products"}
          className="border-b-2 hover:shadow-primary hover:shadow-sm active:shadow-primary active:shadow-lg border-b-primary block w-1/2 text-center py-2 px-3 rounded-full transition-all duration-300"
        >
          Go Shopping
        </Link>
      </div>
    )
  }
}
