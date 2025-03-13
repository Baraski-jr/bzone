import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { Analytics } from "@vercel/analytics/next"
// import { ClerkProvider } from "@clerk/nextjs"

import { WixClientContextProvider } from "@/context/wixContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "B-ZONE",
  description: "B-ZONE and amaizing e-commerce site",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <ClerkProvider dynamic>
    <html lang="en">
      <body className={` overflow-x-hidden ${inter.className} `}>
        <WixClientContextProvider>
          {children}
          {/* <Analytics /> */}
        </WixClientContextProvider>
      </body>
    </html>
    // </ClerkProvider>
  )
}
