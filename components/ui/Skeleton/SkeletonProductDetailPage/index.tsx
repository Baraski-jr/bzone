import Gutter from "@/components/Gutter";
import SkeletonProductCart from "@/components/ui/Skeleton/SkeletonProductCart";
import SkeletonProductDetail from "@/components/ui/Skeleton/SkeletonProductDetail";
import SkeletonThumbnail from "@/components/ui/Skeleton/SkeletonThumbnail";

const SkeletonProductDetailPage = () => {
    return ( 
        <section className="pb-10">
            <Gutter />
            <div className='max-w-[300rem] w-[90%] mx-auto'>
                <section className="py-7 space-y-3">
                    <div className="md:hidden h-2 w-10/12 rounded-full pb-3 pl-3 skeleton"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 md:gap-x-10 ">
                        <SkeletonThumbnail />
                        <SkeletonProductDetail />
                    </div>
                </section>
                <div className="space-y-5 py-3">
                    <div className="mx-auto h-2 w-1/4 rounded-full skeleton"></div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-7">
                        <SkeletonProductCart />
                        <SkeletonProductCart />
                        <SkeletonProductCart />
                        <SkeletonProductCart />
                        <SkeletonProductCart />
                        <SkeletonProductCart />
                        <SkeletonProductCart />
                        <SkeletonProductCart />
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default SkeletonProductDetailPage;