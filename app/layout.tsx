import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, CookiesConsent, NavBar2 } from "./components";
import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Art Kiss",
  description: "Art Kiss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-amber-100">
        <CartProvider>
          {/* <Navbar /> */}
          <NavBar2 />
          <div>{children}</div>
          <CookiesConsent />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
