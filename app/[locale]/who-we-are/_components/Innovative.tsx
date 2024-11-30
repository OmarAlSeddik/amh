import InnovativeBusinessDevelopmentImage from "@/public/who-we-are/innovative-business-development.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Innovative = () => {
  const t = useTranslations("WhoWeAre");

  return (
    <section className="relative text-white">
      <div className="absolute inset-0 z-[-1] bg-black opacity-75" />
      <Image
        placeholder="blur"
        sizes="100vw"
        quality={50}
        src={InnovativeBusinessDevelopmentImage}
        alt="Innovative Business Development"
        className="absolute z-[-2] size-full object-cover lg:block"
      />
      <div className="container flex h-full flex-col gap-8 py-24 md:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <h2 className="h2">{t("innovativeBusinessDevelopment")}</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <h2 className="h2 text-primary">{t("unmatched")}</h2>
            <div>
              <h2 className="h2 text-primary">{t("marketSpecificSolutionsCount")}</h2>
              <p>{t("marketSpecificSolutions")}</p>
            </div>
            <div>
              <h2 className="h2 text-primary">{t("successfulClientEngagementsCount")}</h2>
              <p>{t("successfulClientEngagements")}</p>
            </div>
            <div>
              <h2 className="h2 text-primary">{t("positiveClientFeedbackPercentage")}</h2>
              <p>{t("positiveClientFeedback")}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <p>{t("innovativeDescription")}</p>
        </div>
      </div>
    </section>
  );
};

export default Innovative;
