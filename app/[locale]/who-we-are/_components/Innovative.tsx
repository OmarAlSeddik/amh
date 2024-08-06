import { useTranslations } from "next-intl";

const Innovative = () => {
  const t = useTranslations("WhoWeAre");

  return (
    <section className="bg-[url('../public/who-we-are/innovative-business-development.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col gap-8 py-24 md:flex-row">
        <div className="flex flex-1 flex-col gap-8">
          <h2 className="h2">{t("innovativeBusinessDevelopment")}</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <h2 className="h2 text-primary">{t("unmatched")}</h2>
            <div>
              <h2 className="h2 text-primary">
                {t("marketSpecificSolutionsCount")}
              </h2>
              <p>{t("marketSpecificSolutions")}</p>
            </div>
            <div>
              <h2 className="h2 text-primary">
                {t("successfulClientEngagementsCount")}
              </h2>
              <p>{t("successfulClientEngagements")}</p>
            </div>
            <div>
              <h2 className="h2 text-primary">
                {t("positiveClientFeedbackPercentage")}
              </h2>
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
