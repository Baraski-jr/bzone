'use client';

import React from 'react';
import Image from 'next/image';
import { CollectionProps } from '@/types';
import Link from 'next/link';
import Crousel from '../crousel';
import { products } from '@/constants';

const Collection: React.FC<CollectionProps> = ({ title, subTitle, bgUrl, id }) => {

  return (
    <section className="mt-6 md:mt-10 flex items-center">
      {/* Header */}
      <div className="w-[95%] mx-auto">
        <header className="text-center space-y-2 py-5 px-2">
          <h1 className="font-bold text-slate-700 text-xl md:text-2xl">{title}</h1>
          <p className="text-slate-500 text-sm md:text-base">{subTitle}</p>
        </header>
        <div className="sm:flex lg:gap-4 gap-2 gap-y-3 md:gap-y-0 md:space-x-4">
          {/* Nav link on the collection */}
          <Link href={`/collection/${title.replace(/ /g, '-')}`} className="block relative w-full h-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="absolute flex items-center justify-center py-5 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-700">
              <button className="inline-block rounded-full text-white font-semibold text-base border-2 px-5 md:px-4 py-2 uppercase bg-green-500 bg-opacity-25 hover:bg-white hover:text-green-600 hover:translate-x-2 hover:-rotate-2 active:rotate-3 origin-center hover:scale-105 hover:drop-shadow-2xl transition-all duration-500">
                SHOP NOW
              </button>
            </div>
            <Image width={400} height={50} className="w-full h-96 object-cover object-center" src={bgUrl} alt={title} />
          </Link>

          <div className="overflow-hidden sm:w-full h-fit gap-5 md:gap-0 relative">
            <div className="md:hidden">
              <Crousel products={products} slidePerView={2} navigation={true} />
            </div>
            <div className="hidden md:block">
              <Crousel products={products} slidePerView={3} navigation={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;