// import { coloursType } from "@/types"
// import React from "react"

// type Prop = {
//   colour: string
//   colours: coloursType[]
//   setColour: React.Dispatch<React.SetStateAction<string>>
// }

// const ColourComponent: React.FC<Prop> = ({ colour, colours, setColour }) => {
//   return (
//     <div className="flex gap-x-2">
//       {colours.map(({ items, name }: coloursType, index: any) => (
//         <div
//           key={index}
//           onClick={() => setColour(name)}
//           className={`${
//             name === colour ? "border-slate-600" : "border-slate-200"
//           } flex gap-x-3 text-slate-800 font-medium px-4 py-2 rounded-sm border-2 `}
//         >
//           <div
//             className={`${
//               name === colour && "ring-2"
//             } size-6 rounded-full relative flex items-center justify-center cursor-pointer`}
//           >
//             <span className={`h-5 w-5 bg-${name}-500 rounded-full `}></span>
//             {items === 0 && (
//               <div className="absolute h-8 w-0.5 -rotate-45 bg-gray-600 rounded-full "></div>
//             )}
//           </div>
//           {name}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ColourComponent
