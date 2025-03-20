import Link from "next/link"
import React from "react"

const BreadCrumb = ({ name }: { name?: string }) => {
  return (
    <div className="breadcrumbs">
      <ul>
        <li>
          <Link className="" href={"/"}>
            Home
          </Link>{" "}
        </li>
        <li className="breadcrumbs-separator rtl:rotate-180">
          <span className="icon-[tabler--chevron-right]"></span>
        </li>
        <li>
          <Link className="" href={"/products"}>
            Product
          </Link>
        </li>
        <li className="breadcrumbs-separator rtl:rotate-180">
          <span className="icon-[tabler--chevron-right]"></span>
        </li>
        <li aria-current="page" className="">
          {name}
        </li>
      </ul>
    </div>
  )
}

export default BreadCrumb
