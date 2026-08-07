import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import FloatingCartButton from "@/components/cart/FloatingCartButton";

export const metadata: Metadata = {
  title: "MOSAIC Restaurant & Cafe | Lusaka, Zambia",
  description: "Experience authentic Chinese Soups, Tandoori Charcoal Delicacies, Indo-Chinese Specialties, Artisanal Cafe Drinks & Biryanis at MOSAIC Restaurant & Cafe. Located at 4622-2 Beit Road, Addis Ababa Drive, Lusaka.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ 
      "--font-heading": "'Playfair Display', serif", 
      "--font-body": "'Inter', sans-serif" 
    } as React.CSSProperties}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
          <FloatingCartButton />
        </CartProvider>
      </body>
    </html>
  );
}
