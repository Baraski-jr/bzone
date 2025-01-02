import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#141414] text-gray-300">
            <div className="container w-[95%] mx-auto">
                {/* The First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:justify-items-end py-14 space-y-8 md:space-y-0 border-b-2 border-gray-500">
                    {/* First Col*/}
                    <div className="space-y-2">
                        <Link href='/' className="font-bold text-3xl font-serif italic text-white"> B-ZONE </Link>
                        <div className="w-full md:w-[90%]">
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque animi doloribus itaque obcaecati est!
                            </p>
                        </div>
                        {/* Social Media Links */}
                        <div className="flex space-x-2 pt-2">
                            <Link title='facebook' href='/' className="rounded-full border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700">f</Link>
                            <Link title='Lindkin' href='/' className="rounded-full border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700">ln</Link>
                            <Link title='X' href='/' className="rounded-full border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700">X</Link>
                        </div>
                    </div>
                    {/* Second */}
                    <div className="flex w-full justify-between">
                        <div className="">
                            <h1 className="text-lg text-white font-semibold pb-2">Quick Links</h1>
                            <ul className=""> 
                               <li><Link className='block hover:text-[#84BA86] active:underline transition-colors duration-200' href="/" >Home</Link> </li>
                               <li><Link className='block hover:text-[#84BA86] active:underline transition-colors duration-200' href="/products/all" >Products</Link> </li>
                               <li><Link className='block hover:text-[#84BA86] active:underline transition-colors duration-200' href="/cart" >Carts</Link> </li>
                            </ul>
                        </div>
                        {/* Third */}
                        <div className="">
                            <h1 className="text-lg text-white font-semibold pb-2">Get In Touch</h1>
                            <ul className=""> 
                               <li>Busumbala</li>
                               <li><a className='block hover:text-[#84BA86] active:underline transition-colors duration-200' href="mailto:bzone@gmail.com">bzone@gmail.com</a> </li>
                               <li><a className='block hover:text-[#84BA86] active:underline transition-colors duration-200' href="tel:+220 000 0000">+200 000 0000</a> </li>
                            </ul>
                        </div>
                    </div> 
                </div>
                {/* Second Row */}
                <div className="text-center py-6">
                    <i className=""> &copy; {currentYear} Reserved B-ZONE</i>
                </div>
            </div>
        </footer>
  )
}
export default FooterComponent