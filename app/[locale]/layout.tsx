import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Questrial as FontSans } from "next/font/google";
import React from "react";
import "../globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: "ar" | "en" };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          "bg-background font-sans antialiase text-pretty",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
