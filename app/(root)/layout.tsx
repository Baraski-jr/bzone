import FooterComponent from "@/components/ui/footer"
import HeaderComponent from "@/components/header/headerComponent"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="min-h-dvh flex flex-col justify-between">
      <div>
        <HeaderComponent />
        <main>{children}</main>
      </div>
      <FooterComponent />
    </section>
  )
}
