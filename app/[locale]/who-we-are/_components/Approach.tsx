import {
  Database,
  FlipHorizontal2,
  HandHelping,
  PersonStanding,
  Radar,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Approach = () => {
  const t = useTranslations("WhoWeAre");

  return (
    <section>
      <div className="flex flex-col items-center gap-16 pt-24">
        <div className="flex flex-col gap-4">
          <h2 className="h2 text-center">
            {t("businessDevelopmentPrinciples")}
          </h2>
          <h3 className="h3 text-center">{t("settingAboveTheStandard")}</h3>
        </div>
        <div className="grid w-full justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <FlipHorizontal2 className="size-8 text-white" />
            </div>
            <h3 className="h3">{t("strategicAlignment")}</h3>
            <p className="text-sm">{t("strategicAlignmentDesc")}</p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <PersonStanding className="size-8 text-white" />
            </div>
            <h3 className="h3">{t("customerCentricFocus")}</h3>
            <p className="text-sm">{t("customerCentricFocusDesc")}</p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <HandHelping className="size-8 text-white" />
            </div>
            <h3 className="h3">{t("relationshipCultivation")}</h3>
            <p className="text-sm">{t("relationshipCultivationDesc")}</p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <Radar className="size-8 text-white" />
            </div>
            <h3 className="h3">{t("innovationAndAdaptability")}</h3>
            <p className="text-sm">{t("innovationAndAdaptabilityDesc")}</p>
          </div>
          <div className="flex flex-col items-center gap-4 border-y px-4 py-8 sm:border">
            <div className="rounded-full bg-primary p-2">
              <Database className="size-8 text-white" />
            </div>
            <h3 className="h3">{t("dataDrivenDecisionMaking")}</h3>
            <p className="text-sm">{t("dataDrivenDecisionMakingDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
