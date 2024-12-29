import { coloursType, sizesType } from '@/types'
import React, { useState } from 'react'
import ColourComponent from '../ColoursComponent'

const CustomizeProduct: React.FC<{colours: coloursType[], sizes: sizesType[],}> = ({sizes, colours}) => {
  const id = 2

  const [colour, setColour] = useState(colours[0].name)
  const [size, setSize] = useState(sizes[0].name)
  
  return (
    <div className="flex space-x-12 gap-6">
      {/* Size */}
      {size.length > 0 && 
        <div className="space-y-4" >
          <h3 className="font-normal">Size: <span className="uppercase"> { size[0] } </span></h3>
          <div
            className="flex gap-x-2">
            { sizes.map(({ items, name }: coloursType) => (
              items > 0 &&
              <button
                  onClick={() => setSize(name)}
                  key={name}
                  className={`${name === size ? 'border-slate-600' : 'border-slate-200' } uppercase text-slate-800 font-semibold px-4 py-2 rounded-sm border-2`} >
                  {name}
              </button>
                ))
              }
            </div>
        </div>
      }
        {/* Colour */}
        { colours.length > 0 &&
          <div className="space-y-4 py-3">
            <h3 className="font-normal">Colour: {colour} </h3>
            <ColourComponent colours={colours} colour={colour} setColour={setColour} />
          </div>
        }


    </div>
  )
}

export default CustomizeProduct