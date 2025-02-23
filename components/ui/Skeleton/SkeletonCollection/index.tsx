import SkeletonProductCart from "../SkeletonProductCart"

export const SkeletonCollection = () => {
  return (
    <section className="mt-6 mb-10 md:mt-10 flex items-center">
      {/* Header */}
      <div className="w-[95%] mx-auto">
        <header className="space-y-2 py-5 px-2">
          <div className="mx-auto w-1/12 h-4 rounded-full skeleton animate-pulse"></div>
          <div className="mx-auto w-1/3 h-4 rounded-full skeleton animate-pulse"></div>
        </header>
        <div className="sm:flex lg:gap-4 gap-2 gap-y-3 sm:space-x-5 space-y-5 sm:space-y-0">
          {/* Banner Image */}
          <div className="block w-full h-96 sm:h-[370px] sm:w-1/2 lg:w-1/3 xl:w-1/4 skeleton animate-pulse"></div>
          <div className="flex justify-center lg:justify-normal sm:w-full h-fit gap-x-2 sm:gap-x-2 lg:gap-x-3">
            {/* 1 */}
            <SkeletonProductCart />
            {/* 2 */}
            <SkeletonProductCart />
            {/* 3 */}
            <SkeletonProductCart />
            {/* 4 */}
            <SkeletonProductCart />
          </div>
        </div>
      </div>
    </section>
  )
}
{
  /* <Crousel products={filteredProducts} slidePerView={2} navigation={true} /> */
}
