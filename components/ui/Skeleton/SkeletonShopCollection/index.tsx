import SkeletonProductCart from "../SkeletonProductCart"

const SkeletonShopCollection = ({ err = false }: { err?: boolean }) => {
  return (
    <div className="w-[85%] mx-auto py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-7">
        {err ? (
          <>
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
          </>
        ) : (
          <>
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
            <SkeletonProductCart />
          </>
        )}
      </div>
    </div>
  )
}

export default SkeletonShopCollection
