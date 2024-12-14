import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-800 text-gray-300 ">
            <div className="container w-[95%] mx-auto">
                {/* The First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:justify-items-end py-14 space-y-8 md:space-y-0 border-b-2 border-gray-500">
                    {/* First Col*/}
                    <div className="space-y-2">
                        <Link href='/' className="font-bold text-3xl font-serif italic text-white"> B-ZONE </Link>

                        {/* <div className="flex items-center space-x-1">
                            <Image src="/icons/logo.png" alt="Logo" width={130} height={50} />
                        </div> */}
                        <div className="w-full md:w-[90%]">
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque animi doloribus itaque obcaecati est!
                            </p>
                        </div>
                        {/* Social Media Links */}
                        <div className="flex space-x-2 pt-2">
                            <Link href='/' className="rounded-full border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700">f</Link>
                            <Link href='/' className="rounded-full border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700">i</Link>
                            <Link href='/' className="rounded-full border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700">t</Link>
                            <Link href='/' className="rounded-full border-2 border-slate-500 p-1 text-blue-400 text-xl font-semibold grid place-content-center w-[2.5rem] h-[2.5rem] hover:bg-slate-200 transition-all duration-700">l</Link>
                        </div>
                    </div>
                    {/* Second */}
                    <div className="flex w-full justify-between">
                        <div className="">
                            <div className="">
                                <h1 className="text-lg text-white font-semibold pb-2">Quick Links</h1>
                            </div>
                            <div className=""> 
                                <div className="">
                                    <a href="#hero" className="">Home</a>
                                </div>
                                <div className="">
                                    <a href="#about" className="">About Us</a>
                                </div>
                                <div className="">
                                    <a href="#activities" className="">Activities</a>
                                </div>
                                <div className="">
                                    <a href="#contact" className="">Contact Us</a>
                                </div>
                            </div>
                        </div>
                        {/* Third */}
                        <div className="">
                            <div className="">
                                <h1 className="text-lg text-white font-semibold pb-2">Get In Touch</h1>
                            </div>
                            <div className=""> 
                                <div className="">
                                    <a href="/">Busumbala</a>
                                </div>
                                <div className="">
                                    <a href="mailto:yigda@gmail.com">b-zone@gmail.com</a>
                                </div>
                                <div className="">
                                    <a href="tel:+220 000 0000">+200 000 0000</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                {/* Second Row */}
                <div className="text-center py-6">
                    <p className=""> &copy; {currentYear} Reserved B-zone</p>
                </div>
            </div>
        </footer>
  )
}
export default FooterComponent