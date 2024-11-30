import { Button } from "@/components/ui/button";
import OurVisionImage from "@/public/what-we-do/our-vision.webp";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Vision = () => {
  const t = useTranslations("WhatWeDo");
  const locale = useLocale();

  return (
    <section className="relative flex items-center justify-center py-24 text-white">
      <div className="absolute inset-0 z-[-1] bg-black opacity-75" />
      <Image
        placeholder="blur"
        sizes="100vw"
        quality={50}
        src={OurVisionImage}
        alt="Our Vision"
        className="absolute z-[-2] size-full object-cover lg:block"
      />
      <div className="flex flex-col items-center gap-8 rounded bg-black p-8 text-center">
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
