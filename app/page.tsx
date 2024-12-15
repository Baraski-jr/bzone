import HeaderComponent from "@/components/header/headerComponent";
import LandingHero from "@/components/ui/hero";
import Collections from "@/components/collectionComponent";
import CollectionCategory from "@/components/collectionCategories";
import Promotion from "@/components/promotion";
import FooterComponent from "@/components/ui/footer";
import Gutter from "@/components/Gutter";

export default async function Home () {

  return (
    <section className="relative">
      {/* Temporal remove it later */}
      <HeaderComponent colour={"white"} logoUrl={"/icons/logo.png"} />
      <Gutter />
      <LandingHero />
      <CollectionCategory />
      <Collections
        id={'0'}
        title="Men's Shoes"
        subTitle="Discover the latest men's shoe collection from our brand"
        bgUrl='/men-shoes-collection.jpg'
      />
      <Collections
        id={'1'}
        title="Women's Shoes"
        subTitle="Discover the latest woemen's shoe collection from our brand"
        bgUrl='/women-shoes-bg_2.jpg'
      />
      <Collections
        id={'2'}
        title="Kid's Shoes"
        subTitle="Discover the latest kid's shoe collection from our brand"
        bgUrl='/kid-shoes-bg.jpeg'
      />

      {/* {
        categories.slice(1, 4).map((category: { id: string; name: string; image: string; }) => (
          <Collections
            key={category.id}
            id={category.id}
            title={category.name}
            subTitle="Discover the latest men's shoe collection from our brand"
            bgUrl={category.image} />
        ))
      } */}
      <Promotion />
      <FooterComponent />
    </section>
  );
}
