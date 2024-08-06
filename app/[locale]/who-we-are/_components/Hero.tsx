import { Separator } from "@/components/ui/separator";
import HeroImage from "@/public/who-we-are/hero.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("WhoWeAre");

  return (
    <section className="flex justify-center bg-[#191919] text-white">
      <div className="flex flex-1 justify-center p-12 sm:p-24">
        <div className="flex max-w-[40rem] flex-col gap-4">
          <h1 className="h1">{t("heroTitle")}</h1>
          <Separator />
          <p>{t("heroDescription")}</p>
        </div>
      </div>
      <Image
        src={HeroImage}
        alt="Business Man"
        className="hidden w-1/2 flex-1 object-cover lg:block"
      />
    </section>
  );
};

export default Hero;
