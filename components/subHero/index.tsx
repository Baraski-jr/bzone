import React from 'react'

const SubHero = () => {
  return (
    <section className="py-5 md:mt-10">
      <div className="h-full py-5 bg-subHero-bg bg-cover bg-no-repeat bg-center md:py-20 px-5 w-[98%] mx-auto flex items-center md:min-h-[50vh]">
        <div className="mr-auto py-4">
          <p className=" text-white font-semibold xl:font-bold xl:text-2xl">Special Running Shoes</p>
          <h2 className=" text-white font-bold text-2xl mt-1 md:mt-4 xl:font-bold xl:text-5xl">Air Jordn 5 Retro</h2>
          <button className="text-[#0B1A48] font-bold text-sm md:text-base uppercase bg-white px-3 py-2 md:py-4 md:px-8 mt-3 md:mt-7">DISCOVER NOW</button>
        </div>
      </div>
    </section>
  )
}

export default SubHero
