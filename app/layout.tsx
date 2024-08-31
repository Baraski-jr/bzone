import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomApolloProvider from '../components/Graphql/ApolloProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oshoes",
  description: "O.shoes and amaizing e-commerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomApolloProvider>
          {children}
        </CustomApolloProvider>
      </body>
    </html>
  );
}
