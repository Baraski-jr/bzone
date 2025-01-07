'use client'

import React, { useState, useEffect } from 'react';
import { products as initialProducts } from '@/constants';
import FilterComponent from '../filterComponent';
import ProductCart from '../ui/productCart';
import CustomNav from '../CustomNav';
import { ProductsType } from '@/types';

const ShopCollection = () => {

    const [products, setProducts] = useState<ProductsType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductsType[]>([]);

    useEffect(() => {
        setProducts(initialProducts);
        setFilteredProducts(initialProducts);
    }, []);

    const handleFilter = (category: string) => {
        if (category === 'all') { setFilteredProducts(products); } 
        else {
          const filtered = products.filter(product => product.category === category);
          setFilteredProducts(filtered);
        }
      };

    return (
        <>
          <div className="flex gap-x-4 w-[85%] mx-auto py-8">
              {/* <SideBarFilter /> */}
              <section className="space-y-5 md:space-y-4">
              <FilterComponent onFilter={handleFilter} />
              <CustomNav />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-3 md:gap-x-5 md:gap-y-7">
                      {filteredProducts.map(({ id, title, images, price, inventory, colours, sizes }) => (
                          <ProductCart 
                              key={id}
                              id={id}
                              title={title}
                              images={images}
                              price={price}
                              inventory={inventory}
                              colours={colours} sizes={sizes}                   
                            />
                      ))}
                  </div>
              </section>
          </div>
        </>
    );
};

export default ShopCollection;
