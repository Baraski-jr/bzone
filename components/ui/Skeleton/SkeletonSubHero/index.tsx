const SkeletonSubHero = () => {
  return (
    <section className=" animate-pulse h-[13dvh] md:h-40 w-full flex flex-col items-center justify-center">
      <div className="space-y-3 w-1/2">
        <div className="mx-auto w-1/4 h-4 rounded-full overlay- animate-pulse"></div>
        <div className="mx-auto w-3/6 h-4 rounded-full overlay- animate-pulse"></div>
      </div>
    </section>
  )
}

export default SkeletonSubHero
