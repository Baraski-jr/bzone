import HeaderComponent from "@/components/header/headerComponent";
import LandingHero from "@/components/hero";
import Collections from "@/components/collection";
import SubHero from "@/components/subHero";
import FeatureProducts from "@/components/featureProducts";
import CollectionCategory from "@/components/collectionCategories";

export default function Home() {
  return (
    <section className="relative">
      <HeaderComponent />
      <LandingHero />
      <CollectionCategory />
      <Collections title="MEN'S SHOE COLLECTION " subTitle="Discover the latest men's shoe collection from our brand" bgUrl="/men-shoes-collection.jpg"/>
      <Collections title="WOMEN'S SHOE COLLECTION " subTitle="Discover the latest women's shoe collection from our brand" bgUrl="/women-shoes-bg_2.jpg" />
      <Collections title="KID'S SHOE COLLECTION " subTitle="Discover the latest kid's shoe collection from our brand" bgUrl="/kid-shoes-bg.jpeg" />
      <SubHero />
      <FeatureProducts />
    </section>
  );
}
