import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, CookiesConsent} from "./components";
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
      <body className="bg-gradient-to-tl from-amber-900 to-amber-500">
        <CartProvider>
          <Navbar />
          <div>{children}</div>
          <CookiesConsent/>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
