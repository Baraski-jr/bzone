import FooterComponent from "@/components/ui/footer"
import HeaderComponent from "@/components/header/headerComponent"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-dvh flex flex-col justify-between bg-gray-50">
      <div>
        <HeaderComponent />
        <main>{children}</main>
      </div>
      {/* <FooterComponent /> */}
    </main>
  )
}
