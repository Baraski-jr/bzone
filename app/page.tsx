import HeaderComponent from "@/components/header/headerComponent";
import LandingHero from "@/components/hero";
import Collections from "@/components/collection";
import FeatureProducts from "@/components/featureProducts";
import CollectionCategory from "@/components/collectionCategories";
import Promotion from "@/components/promotion";
import FooterComponent from "@/components/ui/footer";

import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'

const GET_DATA = gql`
  query {
    categories {
      id
      name
      image
    }
  }
`;

export default async function Home () {
  const { data } = await client.query({ query: GET_DATA });
  const categories = data.categories

  return (
    <section className="relative">
      <HeaderComponent colour={"white"} logoUrl={"/icons/logo.png"} />
      <LandingHero />
      <CollectionCategory />
      {
        categories.slice(0, 3).map((category: { id: string; name: string; image: string; }) => (
          <Collections key={category.id} id={category.id} title={category.name} subTitle="Discover the latest men's shoe collection from our brand" bgUrl={ category.image } />
        ))
      }
      <Promotion />
      <FeatureProducts />
      <FooterComponent />
    </section>
  );
}
