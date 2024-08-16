import HeaderComponent from "@/components/header/headerComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <section className="">
        <HeaderComponent />
        <main className="main">{children}</main>
      </section>
  );
}
