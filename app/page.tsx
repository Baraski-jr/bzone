import HeaderComponent from "@/components/header/headerComponent";
import LandingHero from "@/components/ui/hero";
import Collections from "@/components/collectionComponent";
import CollectionCategory from "@/components/collectionCategories";
import Promotion from "@/components/promotion";
import FooterComponent from "@/components/ui/footer";
import FreeReview from "@/components/FreeReview";
import React from "react";

export default async function Home () {

  return (
    <section className="relative">
      {/* Temporal remove it later */}
      <HeaderComponent />
      <LandingHero />
      <CollectionCategory />
      <Collections
        id={'0'}
        title="men"
        subTitle="Discover the latest men's shoe collection from our brand"
        bgUrl='/men-shoes-collection.jpg'
        category={'men'}
      />
      <Collections
        id={'1'}
        title="women"
        subTitle="Discover the latest woemen's shoe collection from our brand"
        bgUrl={'/women-shoes-bg_2.jpg'}
        category={"women"}      
      />
      <Collections
        id={'2'}
        title="kid"
        subTitle="Discover the latest kid's shoe collection from our brand"
        bgUrl='/kid-shoes-bg.jpeg' 
        category={"kid"}
      />
      <Promotion />
      <FreeReview />
      <FooterComponent />
    </section>
  );
}
