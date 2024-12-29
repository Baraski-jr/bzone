import FooterComponent from "@/components/ui/footer";
import HeaderComponent from "@/components/header/headerComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <section>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </section>
  ); 
}
 