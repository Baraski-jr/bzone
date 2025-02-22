"use client"

import { useState } from "react"
import DOMPurify from "isomorphic-dompurify"

type Props = {
  title: string
  description: string
}
export const AdditionInforComponent = ({ title, description }: Props) => {
  const [isHeight, setIseight] = useState(false)

  return (
    <div className="border-b-2 border-b-slate-300 py-2" key={title}>
      <button
        type="button"
        onClick={() => setIseight((prev) => !prev)}
        className="flex justify-between items-center gap-x-2 w-full"
      >
        <h4 className="font-semibold capitalize text-slate-800 text-sm">
          {title}
        </h4>
        {isHeight ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus"
          >
            <path d="M5 12h14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-plus"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </svg>
        )}
      </button>
      <div className={`text-sm text-gray-500 overflow-hidden`}>
        <p
          className={`${
            isHeight ? "py-2 min-h-fit" : "h-0 "
          } transition-all duration-300`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description || ""),
          }}
        ></p>
      </div>
    </div>
  )
}
