import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("Home");

  return (
    <section className="bg-[url('../public/home/about.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
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
          <Link href="/what-we-do">
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
