import React from "react"
import Crousel from "../crousel/index copy 2"
import { products } from "@/lib/constants"

const FeatureProducts = ({
  title,
  description,
}: {
  title?: string
  description?: string
}) => {
  return (
    <section className="w-[95%] mx-auto py-1 my-3 mb-9">
      <header className="text-center space-y-2 py-5">
        <h1 className="font-bold text-slate-700 text-xl md:text-2xl">
          {" "}
          {title}{" "}
        </h1>
        <p className="text-slate-500 text-sm md:text-base">{description}</p>
      </header>
      <div className="overflow-hidden sm:w-full h-fit gap-5 md:gap-0 relative">
        <div className="md:hidden">
          <Crousel products={products} slidePerView={2} navigation={true} />
        </div>
        <div className="hidden md:block">
          <Crousel products={products} slidePerView={4} navigation={true} />
        </div>
      </div>
    </section>
  )
}

export default FeatureProducts
