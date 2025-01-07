const SkeletonProductCart = () => {
    return ( 
        <div className="space-y-[15px] w-full ">
            {/* Image */}
            <div className="w-full h-[242px] skeleton"></div>
            {/* Name */}
            <div className="w-3/4 h-4 rounded-full skeleton"></div>
            {/* Price */}
            <div className="w-10 h-4 rounded-full skeleton"></div>
            {/* Add Button */}
            <div className="full h-12 w-full skeleton"></div>
        </div>
     );
}
 
export default SkeletonProductCart;