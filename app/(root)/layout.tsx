import FooterComponent from "@/components/ui/footer";
import HeaderComponent from "@/components/header/headerComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <section className="relative">
        <HeaderComponent colour={'#000'} logoUrl={"/icons/logo-mobile.png"} />
        <main>{children}</main>
        <FooterComponent />
      </section>
  ); 
}
