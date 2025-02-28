import Link from "next/link"
import React from "react"

const CustomNav = ({ name }: { name?: string }) => {
  return (
    <div className="font-mono font-semibold text-xs text-slate-500 ">
      <Link
        className="hover:font-bold hover:text-slate-700 transition-all duration-300"
        href={"/"}
      >
        Home
      </Link>{" "}
      •{" "}
      <Link
        className="hover:font-bold hover:text-slate-700 transition-all duration-300"
        href={"/products"}
      >
        {" "}
        Product
      </Link>
      {name && <span className="pl-2">• {name}</span>}
    </div>
  )
}

export default CustomNav
