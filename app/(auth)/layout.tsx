export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <section className="">
            {children}
        </section>
  );
}
