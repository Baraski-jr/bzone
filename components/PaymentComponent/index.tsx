import React from 'react'

export default function PaymentComponent() {
  return (
    <div className="py-3 space-y-3">
        <h3 className="text-xl">Payment</h3>
        <p className="text-slate-500 text-sm">All transctions are secure and encrypted.</p>
        <form className="space-y-5">
            <div className="">
                {/* Header of the form */}
                <header className="border-blue-600 border-[.1rem] bg-blue-100 bg-opacity-80 rounded-t-md p-3">
                    <div className="flex justify-between">
                        <div className="flex gap-x-2 items-center">
                            {/* Rounded  */}
                            {/* <div className="bg-blue-500 rounded-full w-[1rem] h-[1rem] grid place-content-center">
                                <div className="rounded-full bg-white w-[.4rem] h-[.4rem]"></div>
                            </div> */}
                            <input type="radio" name="" id="" />
                            <p className="">Credit card</p>
                        </div>
                        <div className="bg-yellow-500 px-4 py-[2px] rounded-sm">
                            <p className="font-medium text-white">B</p>
                        </div>
                    </div>
                </header>
                {/* Body of the form*/}
                <div className="bg-slate-200 bg-opacity-50 w-full space-y-5 p-5">
                    <div className="">
                        {/* Card Number */}
                        <input type="number" placeholder='Card Number' className="text-sm border-b-2 border-slate-300 py-3 px-3 text-slate-700 w-full rounded-sm focus:outline-none focus:border-blue-500 hover:border-blue-200" />
                    </div>
                    <div className="flex gap-x-4">
                        <input type="date" className="text-sm border-b-2 border-slate-300 py-3 px-3 text-slate-700 w-full rounded-sm focus:outline-none focus:border-blue-500 hover:border-blue-200" />
                        <div className="w-full">
                            <input type="number"placeholder='Security code'  className="text-sm border-b-2 border-slate-300 py-3 px-3 text-slate-700 w-full rounded-sm focus:outline-none focus:border-blue-500 hover:border-blue-200" />
                        </div>
                    </div>
                    <input type="number" placeholder='Name on card'  className="text-sm border-b-2 border-slate-300 py-3 px-3 text-slate-700 w-full rounded-sm focus:outline-none focus:border-blue-500 hover:border-blue-200" />
                    <div className="flex gap-x-2">
                        <input type="checkbox" name="offer" id="" />
                        <p className="text-sm ">Use shipping address as billing address</p>
                    </div>
                </div>
                {/* Footer of the form */}
                <div className="border-[.1rem] rounded-b-md p-3">
                    <div className="flex justify-between">
                        <div className="flex gap-x-2 items-center">
                            {/* Rounded  */}
                            {/* <div className="border-2 rounded-full w-[1rem] h-[1rem] grid place-content-center">
                                <div className="rounded-full bg-white w-[.4rem] h-[.4rem]"></div>
                            </div> */}
                            <input type="radio" name="" id="" />
                            <p className="">PayPal</p>
                        </div>
                        <div className="">
                            <p className="">PayPal</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pay now button */}
            <div className="">
                <button type='submit' className="w-full py-3 bg-[#105889] text-white rounded-sm hover:bg-[#2c71a1] transition-all duration-200">Pay now</button>
            </div>
        </form>
    </div>
  )
}
