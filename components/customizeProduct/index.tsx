import { coloursType, sizesType } from "@/types"
import React, { useState } from "react"

const CustomizeProduct: React.FC<{
  colours: coloursType[]
  sizes: sizesType[]
}> = ({ sizes, colours }) => {
  const [colour, setColour] = useState(colours[0].name)
  const [size, setSize] = useState(sizes[0].name)

  return (
    <div className="flex flex-col s gap-6">
      {/* Size */}
      {size.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-normal">Size:</h3>
          <div className="flex gap-x-2 pl-4">
            {sizes.map(
              ({ items, name }: sizesType) =>
                items > 0 && (
                  <div
                    onClick={() => setSize(name)}
                    key={name}
                    className={`${
                      name === size ? "border-slate-600" : "border-slate-200"
                    } text-slate-800 font-medium px-4 py-2  cursor-pointer rounded-sm border-2`}
                  >
                    {name}
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {/* Colour */}
      {colours.length > 0 && (
        <div className="space-y-4 py-3">
          <h3 className="font-normal">Colour: </h3>
          <div className="flex gap-x-2 pl-4">
            {colours.map(({ items, name }: coloursType, index: any) => (
              <div
                key={index}
                onClick={() => setColour(name)}
                className={`${
                  name === colour ? "border-slate-600" : "border-slate-200"
                } flex gap-x-3 text-slate-800 font-medium px-4 py-2 cursor-pointer rounded-sm border-2 `}
              >
                <div
                  className={`${
                    name === colour && "ring-2"
                  } size-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  <span
                    className={`h-5 w-5 bg-${name}-500 rounded-full `}
                  ></span>
                </div>
                {name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CustomizeProduct
