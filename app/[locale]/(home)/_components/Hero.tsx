import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("Home");

  return (
    <section className="bg-[url('../public/home/hero.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col justify-between gap-64 py-24">
        <div className="flex flex-col gap-4 self-start">
          <h1 className="h1">
            {t("title1")}
            <br />
            {t("title2")}
          </h1>
          <h3 className="h3">{t("subtitle")}</h3>
          <Link href="/what-we-do">
            <Button
              variant="outline"
              className="w-40 bg-transparent text-white hover:bg-white"
            >
              {t("getStarted")}
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 self-end">
          <h2>{t("subscribe")}</h2>
          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-xs">
              {t("enterEmail")}
            </Label>
            <div className="flex">
              <Input
                placeholder={t("enterEmail")}
                className="border-primary bg-transparent text-white placeholder:text-white"
                id="email"
              />
              <Button>{t("subscribeButton")}</Button>
            </div>
            <span className="text-xs">{t("thankYou")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
