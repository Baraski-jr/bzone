'use client';

import React from 'react';
import Image from 'next/image';
import { CollectionProps } from '@/types';
import Link from 'next/link';
import Crousel from '../crousel';
import { products } from '@/constants';
import CollectionBanner from '../ui/CollectionBanner';

const Collection: React.FC<CollectionProps> = ({ title, subTitle, bgUrl, category }) => {
  const filteredProducts = products.filter((product) => ( product.category === category ))

  return (
    <section className="mt-6 md:mt-10 flex items-center">
      {/* Header */}
      <div className="w-[95%] mx-auto">
        <header className="text-center space-y-2 py-5 px-2">
          <h1 className="font-bold text-slate-700 text-xl md:text-2xl">{title}</h1>
          <p className="text-slate-500 text-sm md:text-base">{subTitle}</p>
        </header>
        <div className="sm:flex lg:gap-4 gap-2 gap-y-3 md:gap-y-0 md:space-x-4">

          <CollectionBanner url={`/products/${title.replace(/ /g, '-')}`} bgUrl={bgUrl} />

          <div className="overflow-hidden sm:w-full h-fit gap-5 md:gap-0 relative">
            <div className="md:hidden">
              <Crousel products={filteredProducts} slidePerView={2} navigation={true} />
            </div>
            <div className="hidden md:block lg:hidden">
              <Crousel products={filteredProducts} slidePerView={3} navigation={true} />
            </div>
            <div className="hidden lg:block">
              <Crousel products={filteredProducts} slidePerView={4} navigation={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;