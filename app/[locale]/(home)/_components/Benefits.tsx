import {
  Award,
  ChartCandlestick,
  HandHelping,
  HeartHandshake,
  Network,
  ShieldCheck,
  SquareKanban,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Benefits = () => {
  const t = useTranslations("Home");

  return (
    <section>
      <div className="grid md:grid-cols-2">
        <div className="flex justify-center border p-16">
          <h2 className="h2">
            {t("benefitsTitle1")}
            <br />
            <span className="text-primary">{t("benefitsTitle2")}</span>{" "}
            {t("benefitsTitle3")}
            <br />
            {t("benefitsTitle4")}
          </h2>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <ShieldCheck className="size-8" />
          </div>
          <h3 className="h3">{t("provenExpertise")}</h3>
          <p>{t("provenExpertiseDesc")}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <SquareKanban className="size-8" />
          </div>
          <h3 className="h3">{t("tailoredStrategies")}</h3>
          <p>{t("tailoredStrategiesDesc")}</p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <Network className="size-8" />
          </div>
          <h3 className="h3">{t("networkPartnerships")}</h3>
          <p>{t("networkPartnershipsDesc")}</p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <ChartCandlestick className="size-8" />
          </div>
          <h3 className="h3">{t("marketInsights")}</h3>
          <p>{t("marketInsightsDesc")}</p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <HandHelping className="size-8" />
          </div>
          <h3 className="h3">{t("focusedSupport")}</h3>
          <p>{t("focusedSupportDesc")}</p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <Award className="size-8" />
          </div>
          <h3 className="h3">{t("resultsOriented")}</h3>
          <p>{t("resultsOrientedDesc")}</p>
        </div>
        <div className="flex flex-col items-center gap-4 border p-16">
          <div className="rounded-full bg-primary p-2 text-white">
            <HeartHandshake className="size-8" />
          </div>
          <h3 className="h3">{t("professionalGuidance")}</h3>
          <p>{t("professionalGuidanceDesc")}</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
