import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
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

export async function generateMetaData({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
