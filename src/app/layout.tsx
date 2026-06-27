import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOSAIC Restaurant & Cafe | Lusaka, Zambia",
  description: "Experience premium dining at MOSAIC Restaurant & Cafe. Located at 4622-2 Beit Road, Addis Ababa Drive, Lusaka.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
