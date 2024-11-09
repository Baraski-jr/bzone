import { ColourComponentPropType, coloursType } from '@/types'
import React from 'react'

const ColourComponent:React.FC<ColourComponentPropType> = ({colour, colours, setColour }) => {  
  return (
    <div className="flex gap-x-2">
      { colours.map(({items, name}: coloursType, index: any) => (
        <div
          onClick={() => setColour(name)}
          key={index}
          className={`${name === colour && 'ring-2'} size-6 rounded-full relative flex items-center justify-center cursor-pointer`}
        >
          <div className={`h-5 w-5 bg-${name}-500 rounded-full `}></div>
          { items === 0 && <div className="absolute h-8 w-0.5 -rotate-45 bg-gray-600 rounded-full "></div> }
        </div>
        ))
      }
    </div>
  )
}

export default ColourComponent