export const SkeletonCartModal = () => {
  return (
    <div
      className={`fixed top-0  w-10/12 lg:w-2/4 z-50 transition-all ease-linear duration-300`}
    >
      <div className=" bg-white min-h-dvh px-5 md:px-12 shadow-xl">
        <div className="overflow-y-scroll h-[50dvh] md:min-h-[60dvh] divide-y-2 divide-slate-100 ">
          <ul className="pb-8">
            <li className="py-7 border-b-2 border-slate-100 w-full">
              <div className="flex gap-x-4 w-full">
                <div className="w-24 h-20 skeleton animate-pulse"></div>
                <div className="space-y-1 w-full">
                  <div className="skeleton w-1/3 h-4"></div>
                  <div className="skeleton w-1/4 h-4"></div>
                  <div className="flex items-baseline justify-between pr-2">
                    <div className="skeleton w-1/6 h-4"></div>
                    <div className="w-1/6 h-8 skeleton animate-pulse"></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* Sub footer */}
        <div className="py-6 pr-2 space-y-3 mb-auto absolute bottom-0 w-[85%] bg-white">
          {/* Total */}
          <div className="flex justify-between items-center">
            <div className="h-8 w-1/3 skeleton animate-pulse"></div>
            <div className="h-8 w-1/3 skeleton animate-pulse"></div>
          </div>
          <div className="border-b-2 border-slate-200 pb-3">
            <div className="w-3/4 h-4 skeleton animate-pulse"></div>
          </div>
          <div className="w-3/4 h-4  skeleton animate-pulse"></div>
          {/* Button */}
          <div className="flex gap-x-5">
            <div className="full h-12 w-full skeleton animate-pulse"></div>
            <div className="full h-12 w-full skeleton animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
