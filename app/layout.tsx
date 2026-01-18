import type { Metadata } from "next";
// 1. ZMIANA: Importujemy Inter zamiast Geist
import { Inter } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 2. KONFIGURACJA INTER
// Inter jest "Variable Font", więc ma w sobie wszystkie grubości (100-900)
const inter = Inter({
  subsets: ["latin"],
  // Ważne: ta nazwa zmiennej musi pasować do tej w global.css!
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MASYW COLLECTION",
  description: "Monolithic forms. Concrete & Steel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. ZMIANA: Wstrzykujemy zmienną inter.variable do body */}
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
