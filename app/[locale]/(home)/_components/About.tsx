import { Button } from "@/components/ui/button";
import AboutImage from "@/public/home/about.webp";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <section className="relative text-white">
      <div className="absolute inset-0 z-[-1] bg-black opacity-75" />
      <Image
        placeholder="blur"
        sizes="100vw"
        quality={50}
        src={AboutImage}
        alt="About"
        className="absolute z-[-2] size-full object-cover lg:block"
      />
      <div className="container flex h-full flex-col gap-64 py-24">
        <div className="flex flex-col gap-4 self-start">
          <h2 className="h2">
            {t("aboutTitle1")}
            <br />
            {t("aboutTitle2")}
          </h2>
          <h3 className="h3">{t("aboutSubtitle")}</h3>
        </div>
        <div className="flex flex-col gap-8 self-end">
          <p>{t("aboutDescription")}</p>
          <Link href={`/${locale}/what-we-do`}>
            <Button
              variant="outline"
              className="w-40 self-end bg-transparent text-white hover:bg-white"
            >
              {t("discoverMore")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
