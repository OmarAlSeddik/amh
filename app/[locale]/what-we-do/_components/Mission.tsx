import { Button } from "@/components/ui/button";
import MissionImage from "@/public/what-we-do/our-mission.webp";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
  const t = useTranslations("WhatWeDo");
  const locale = useLocale();

  return (
    <section className="flex justify-center bg-black text-center text-white">
      <div className="flex flex-1 justify-center p-24">
        <div className="flex max-w-[40rem] flex-col gap-4">
          <h1 className="h1">{t("missionTitle")}</h1>
          <h2 className="h2">{t("missionSubtitle")}</h2>
          <p>{t("missionDescription")}</p>
          <Link href={`/${locale}/contact-us`}>
            <Button className="w-40">{t("missionAction")}</Button>
          </Link>
        </div>
      </div>
      <Image
        src={MissionImage}
        alt="Business Man"
        className="hidden w-1/2 flex-1 object-cover lg:block"
      />
    </section>
  );
};

export default Mission;
