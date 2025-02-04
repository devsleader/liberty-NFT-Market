'use client';
import { useState, useEffect } from "react";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after components mount
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Preloader isLoading={isLoading} />
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <nav><Header /></nav>
          <main>{children}</main>
          <footer><Footer /></footer>
        </div>
      </body>
    </html>
  );
}