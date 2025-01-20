import ShopCollection from "@/components/shopCollection"
import SubHero from "@/components/ui/subHero"
import React from "react"
import Gutter from "@/components/Gutter"

export default async function Page() {
  return (
    <>
      <Gutter />
      <SubHero title={"Products"} />
      <ShopCollection />
    </>
  )
}
