const ShippingCard  = ({padding='0', border='0'}: {padding?: string, border?: string,}) => {
    return ( 
        <div className={`border-${border} border-slate-100 py-9 px-${padding} space-y-7`}>
            {/* Progress */}
            <div className="relative w-full py-[.15rem] rounded-full bg-slate-100">
                <div className="absolute -top-[.8px] w-4/5 py-[.2rem] rounded-full bg-[#85BA86] after:absolute after:py-[.5rem] after:px-[.7rem] after:border-[#85BA86] after:border-2 after:bg-white after:right-0 after:-top-[6px] after:cursor-move"></div>
            </div>
            <p className="text-xs text-slate-600">Buy <span className="font-semibold">GMD200.00</span> more to enjoy <span className="font-semibold">Free Shipping</span></p>
        </div>
     );
}
 
export default ShippingCard;