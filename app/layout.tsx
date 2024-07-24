import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Questrial as FontSans } from "next/font/google";
import React from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "AMH Developments",
  description:
    "Your destination for exceptional Business Development solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiase", fontSans.variable)}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
