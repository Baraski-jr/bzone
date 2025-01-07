const PromotionSkeleton = () => {
    return ( 
        <div  className="block py-5 md:mt-10 w-full">
            <div className="h-full py-5 md:py-20 px-5 w-full mx-auto flex items-center skeleton">
            <div className="mr-auto w-1/2 py-4 space-y-5">
                <div className="w-3/4 md:w-2/5 h-4 rounded-full overlay-skeleton"></div>
                <div className="w-full md:w-3/4 h-4 rounded-full overlay-skeleton"></div>
                <div className="h-8 md:h-12 w-3/5 md:w-2/6 overlay-skeleton"></div>
            </div>
            </div>
        </div>     
      );
}
 
export default PromotionSkeleton;