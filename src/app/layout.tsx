import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name - Product Manager Portfolio",
  description: "Product Manager with a background in software development and a passion for creating user-centric products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
