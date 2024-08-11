import HeaderComponent from "@/components/header/headerComponent";
import LandingHero from "@/components/hero";
import Collections from "@/components/collection";
import SubHero from "@/components/subHero";
import FeatureProducts from "@/components/featureProducts";

export default function Home() {
  return (
    <section className="relative">
      <HeaderComponent />
      <LandingHero />
      <Collections title="MEN'S SHOE COLLECTION " subTitle="Discover the latest men's shoe collection from our brand" bgUrl="/men-shoes-collection.jpg"/>
      <Collections title="WOMEN'S SHOE COLLECTION " subTitle="Discover the latest women's shoe collection from our brand" bgUrl="/women-shoes-bg_2.jpg" />
      <SubHero />
      <FeatureProducts />
    </section>
  );
}
