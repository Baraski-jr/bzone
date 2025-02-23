const SkeletonFreeReview = () => {
  return (
    <div className="mx-auto skeleton animate-pulse grid grid-cols-2 place-content-center gap-8 md:flex flex-wrap justify-evenly items-center py-16 mt-11">
      <div className="mx-auto space-y-3 w-24">
        <div className="mx-auto w-16 h-16 rounded-full overlay-skeleton animate-pulse"></div>
        <div className="w-full h-4 rounded-full overlay-skeleton animate-pulse"></div>
      </div>
      <div className="mx-auto space-y-3 w-24">
        <div className="mx-auto w-16 h-16 rounded-full overlay-skeleton animate-pulse"></div>
        <div className="w-full h-4 rounded-full overlay-skeleton animate-pulse"></div>
      </div>
      <div className="mx-auto space-y-3 w-24">
        <div className="mx-auto w-16 h-16 rounded-full overlay-skeleton animate-pulse"></div>
        <div className="w-full h-4 rounded-full overlay-skeleton animate-pulse"></div>
      </div>
      <div className="mx-auto space-y-3 w-24">
        <div className="mx-auto w-16 h-16 rounded-full overlay-skeleton animate-pulse"></div>
        <div className="w-full h-4 rounded-full overlay-skeleton animate-pulse"></div>
      </div>
    </div>
  )
}

export default SkeletonFreeReview
