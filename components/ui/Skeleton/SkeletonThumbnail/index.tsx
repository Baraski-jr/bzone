const SkeletonThumbnail = () => {
    return ( 
        <div className="md:flex w-full">
        {/* Thumbnails for larger screens */}
        <div className="hidden md:block">
            <div className={`flex md:flex-col gap-3 pr-3`}>
                {/* Card 1 */}
                <div className="w-14 h-14 lg:w-[100px] lg:h-[90px] skeleton"></div>
                {/* Card 1 */}
                <div className="w-14 h-14 lg:w-[100px] lg:h-[90px] skeleton"></div>
            </div>
        </div>
        {/* Main product image */}
        <div className="min-h-96 w-full skeleton"></div>
        {/* Thumbnails for mobile view */}
        <div className="md:hidden pt-5">
            <div className={`flex gap-3 pr-3`}>
                {/* Card 1 */}
                <div className="w-16 h-16 skeleton"></div>
                {/* Card 2 */}
                <div className="w-16 h-16 skeleton"></div>
                {/* Card 3 */}
                <div className="w-16 h-16 skeleton"></div>
            </div>
        </div>
    </div>
     );
}
 
export default SkeletonThumbnail;