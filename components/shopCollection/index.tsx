import React from 'react';
import { products } from '@/constants';
import FilterComponent from '../filterComponent/topFilter';
import ProductCart from '../ui/productCart';
// import SideBarFilter from '../filterComponent/sideBarFilter';
import CustomNav from '../CustomNav';

const ShopCollection = () => {
    return (
        <>
            <div className="flex gap-x-4 w-[85%] mx-auto py-8">
                {/* <SideBarFilter /> */}
                <section className="space-y-2 md:space-y-4">
                    <FilterComponent />
                    <CustomNav />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-7">
                        {products.map(({ id, title, images, price, inventory, colours, sizes }) => (
                            <ProductCart 
                                key={id}
                                id={id}
                                title={title}
                                images={images}
                                price={price}
                                inventory={inventory}
                                colours={colours} sizes={sizes}                    />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default ShopCollection;
