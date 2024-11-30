import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";
import "../globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const QuestrialRegular = localFont({ src: "../fonts/Questrial-Regular.ttf" });

export const metadata = {
  title: "AMH",
  description: "AMH for Business Development",
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
        className={cn("bg-background antialiase text-pretty", QuestrialRegular.className)}
        dir={locale === "ar" ? "rtl" : "ltr"}
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
