import Link from "next/link"
import React from "react"

const CustomNav = ({ name }: { name?: string }) => {
  return (
    <div className="font-mono font-semibold text-sm text-slate-600 pb-3">
      <Link href={"/"}>Home</Link> /<Link href={"/products"}> product</Link>
      {name && <span className="pl-2"> / {name}</span>}
    </div>
  )
}

export default CustomNav
