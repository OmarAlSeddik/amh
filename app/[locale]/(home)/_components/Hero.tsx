import { Button } from "@/components/ui/button";
import HeroImage from "@/public/home/hero.webp";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import SubscriptionForm from "./SubscriptionForm";

const Hero = () => {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <section className="relative w-full text-white">
      <div className="absolute inset-0 z-[-1] bg-black opacity-75" />
      <Image
        priority
        placeholder="blur"
        sizes="100vw"
        quality={50}
        src={HeroImage}
        alt="Business Buildings"
        className="absolute z-[-2] size-full object-cover lg:block"
      />
      <div className="container flex h-full flex-col justify-between gap-64 py-24">
        <div className="flex flex-col gap-4 self-start">
          <h1 className="h1">
            {t("title1")}
            <br />
            {t("title2")}
          </h1>
          <h2 className="h3">{t("subtitle")}</h2>
          <Link href={`/${locale}/what-we-do`}>
            <Button variant="outline" className="w-40 bg-transparent text-white hover:bg-white">
              {t("getStarted")}
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 self-end">
          <h2>{t("subscribe")}</h2>
          <SubscriptionForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
