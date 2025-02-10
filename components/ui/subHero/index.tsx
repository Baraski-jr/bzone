import { SubHeroPropType } from "@/types"
import React from "react"

const SubHero = ({ title }: SubHeroPropType) => {
  return (
    <section className="bg-subHero-bg bg-cover bg-center h-[13dvh] md:h-40 w-full grid place-content-center">
      <h1 className="text-center text-base text-slate-200 md:font-semibold pb-2">
        {title}
      </h1>
    </section>
  )
}

export default SubHero
