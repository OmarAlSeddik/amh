import { Button } from "@/components/ui/button";
import Logo from "@/public/logo.webp";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="bg-black text-white">
      <div className="container flex flex-col justify-between gap-4 py-12 sm:flex-row sm:items-center">
        <div className="flex flex-col items-center gap-2">
          <Image
            placeholder="blur"
            sizes="100vw"
            quality={50}
            placeholder="blur"
            src={Logo}
            alt="AMH"
            className="size-28 rounded-full sm:size-36"
          />
          <p className="h3">{t("message")}</p>
          <Link href={`/${locale}/contact-us`}>
            <Button variant="outline" className="w-40 bg-transparent text-white hover:bg-white">
              {t("contactUs")}
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-xl">{t("contact")}</span>
            <span>+201003020521</span>
            <span>a.m.hbusinessdev@gmail.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl">{t("address1")}</span>
            <span>{t("address2")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
