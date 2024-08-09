import HeaderComponent from "@/components/header/headerComponent";
import LandingHero from "@/components/hero";

export default function Home() {
  return (
    <section className="relative">
      <HeaderComponent />
      <LandingHero />
    </section>
  );
}
