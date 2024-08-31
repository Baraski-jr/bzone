// import Image from 'next/image';
// import React from 'react';

// const ProductDetail = async () => {

//   const response = await fetch('https://fakestoreapi.com/products/1');
//   const product = await response.json();

//   console.log(product);

//   return (
//     <section className="py-5">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-[95%] mx-auto">
//         {/* product image display section*/}
//         <div className="md:flex">
//           <div className="hidden md:flex flex-col gap-y-1 pr-1 pt-5">

//             <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
//               <Image width={50} height={50} className='bg-[#F5F5F5] rounded-xl scale-125' src={product.image} alt={product.title} />
//             </button>
//             <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
//               <Image width={50} height={50} className='bg-[#F5F5F5] rounded-xl scale-125' src={product.image} alt={product.title} />
//             </button>
//             <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
//               <Image width={50} height={50} className='bg-[#F5F5F5] rounded-xl scale-125' src={product.image} alt={product.title} />
//             </button>
//             <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
//               <Image width={50} height={50} className='bg-[#F5F5F5] rounded-xl scale-125' src={product.image} alt={product.title} />
//             </button>
//           </div>
//           <div className="bg-[#F5F5F5] h-fit size-full">
//             <Image width={180} height={180} quality={100} className='max-w-full w-full' src={product.image} alt={product.title} ></Image>
//           </div>
//           {/* More option images visibel only on mobile view */}
//           {/* Main product image */}
//           <div className="md:hidden flex gap-x-2 py-2 overflow-hidden">
//             <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
//               <Image width={70} height={70} className=' bg-[#F5F5F5] rounded-xl scale-110' src={product.image} alt={product.title} />
//             </button>
//             <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
//               <Image width={70} height={70} className=' bg-[#F5F5F5] rounded-xl scale-110' src={product.image} alt={product.title} />
//             </button>
//             <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
//               <Image width={70} height={70} className=' bg-[#F5F5F5] rounded-xl scale-110' src={product.image} alt={product.title} />
//             </button>
//             <button className="overflow-hidden rounded-lg border-2 border-transparent hover:border-slate-300 h-fit transition-all duration-300">
//               <Image width={70} height={70} className=' bg-[#F5F5F5] rounded-xl scale-110' src={product.image} alt={product.title} />
//             </button>
//           </div>
//         </div>
//         {/* Product detaisls right  */}
//         <div className="border-2 w-full bg-slate-300 size-full">
//           <div className="">
//             <h2 className=""> {product.title} </h2>
//             <h1 className=""> {product.price} </h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ProductDetail