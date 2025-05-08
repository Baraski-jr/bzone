import Add from "@/components/AddToCart"
import Gutter from "@/components/Gutter"
import { queryProducts } from "@/model/store/store-api"
import { products } from "@wix/stores"
import React from "react"
import DOMPurify from "isomorphic-dompurify"
import Link from "next/link"
import ProductCart from "@/components/ui/productCart"
import BreadCrumb from "@/components/BreadCrumb"
import MainProductDisplay from "@/components/mainProductDisplay"

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
    const product = (await queryProducts({ slug: param.slug, limit: 1 })).items[0]
      // console.log("product", product)
      // console.log("product Variant", product.variants)

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
          <h2 className="md:hidden font-semibold text-xl md:text-base pb-3 pl-3">
            {product.name}
          </h2>
          <MainProductDisplay product={product} />
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
