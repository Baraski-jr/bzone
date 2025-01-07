import Image from 'next/image'
import React from 'react'

export default function FreeReview() {
  return (
    <div className='bg-[#141414] border-b-[.4px] border-slate-300 grid grid-cols-2 gap-8 md:flex flex-wrap justify-evenly items-center py-16 mt-11'>
        <div className="cursor-pointer flex items-center justify-center flex-col gap-y-3 text-gray-400 hover:text-[#96BE7C] transition-colors duration-150">
            <Image className='w-16' width={100} height={100} src={'/shipping.png'} alt=''/>
            <p className="text-base font-semibold uppercase ">Free Shipping</p>
        </div>  
        <div className="cursor-pointer flex items-center justify-center flex-col gap-y-3 text-gray-400 hover:text-[#96BE7C] transition-colors duration-150">
            <Image className='w-16' width={100} height={100} src={'/support.png'} alt=''/>
            <p className="text-base font-semibold uppercase">24/7 Support</p>
        </div> 
        <div className="cursor-pointer flex items-center justify-center flex-col gap-y-3 text-gray-400 hover:text-[#96BE7C] transition-colors duration-150">
            <Image className='w-16' width={100} height={100} src={'/payment.png'} alt=''/>
            <p className="text-base font-semibold uppercase">Secure Payment</p>
        </div>  
        <div className="cursor-pointer flex items-center justify-center flex-col gap-y-3 text-gray-400 hover:text-[#96BE7C] transition-colors duration-150">
            <Image className='w-16' width={100} height={100} src={'/money.png'} alt=''/>
            <p className="text-base font-semibold uppercase">Money Back</p>
        </div>   
    </div>
  )
}
