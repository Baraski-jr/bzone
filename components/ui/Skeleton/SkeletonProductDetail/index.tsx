const SkeletonProductDetail = () => {
  return (
    <div className="w-full min-h-96 flex flex-col gap-6 py-5">
      <div className="hidden md:block w-1/2 h-2 rounded-full skeleton animate-pulse"></div>
      <div className="py-5 border-y-4 border-gray-50">
        <div className="md:block w-2/5 h-2 rounded-full skeleton animate-pulse"></div>
      </div>
      <div className="md:block w-full h-2 rounded-full skeleton animate-pulse"></div>
      <div className="md:block w-3/4  h-2 rounded-full skeleton animate-pulse"></div>
      <div className="md:block w-11/12 h-2 rounded-full skeleton animate-pulse"></div>
      <div className="md:block w-full h-2 rounded-full skeleton animate-pulse"></div>

      <div className="flex gap-x-7">
        <div className="md:block w-1/3 h-14 skeleton animate-pulse"></div>
        <div className="md:block w-1/3 h-14 skeleton animate-pulse"></div>
      </div>

      <div className="border-y-4 border-gray-50 py-3 flex gap-x-3">
        <div className="md:block w-full h-10 skeleton animate-pulse"></div>
        <div className="md:block w-full h-10 skeleton animate-pulse"></div>
      </div>
    </div>
  )
}

export default SkeletonProductDetail
