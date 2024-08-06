import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Vision = () => {
  const t = useTranslations("WhatWeDo");
  const locale = useLocale();

  return (
    <section className="flex items-center justify-center bg-[url('../public/what-we-do/our-vision.webp')] bg-cover bg-center py-24 text-white shadow-[inset_0_9999px_rgba(0,0,0,0)]">
      <div className="flex flex-col items-center gap-8 bg-black p-8 text-center">
        <h2 className="h2">{t("visionTitle")}</h2>
        <p>{t("visionDescription")}1</p>
        <Link href={`/${locale}/`}>
          <Button className="w-40">{t("visionAction")}</Button>
        </Link>
      </div>
    </section>
  );
};

export default Vision;
