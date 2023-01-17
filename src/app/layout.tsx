import { Footer } from "../app/components/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
