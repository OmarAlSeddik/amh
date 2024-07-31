import {
  BadgePoundSterling,
  Building2,
  NotebookText,
  SquareKanban,
  Store,
  Unlink,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("Home");

  return (
    <section className="bg-[url('../public/home/services.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col items-center gap-4 py-24">
        <h2 className="h2">{t("servicesTitle")}</h2>
        <p className="text-center">{t("servicesDescription")}</p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>{t("corporateGovernance")}</p>
            <div className="rounded-full bg-primary p-2">
              <Building2 className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>{t("operationsResearch")}</p>
            <div className="rounded-full bg-primary p-2">
              <NotebookText className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>{t("strategicConsultation")}</p>
            <div className="rounded-full bg-primary p-2">
              <SquareKanban className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>{t("corporateFinance")}</p>
            <div className="rounded-full bg-primary p-2">
              <BadgePoundSterling className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>{t("salesMarketing")}</p>
            <div className="rounded-full bg-primary p-2">
              <Store className="size-8" />
            </div>
          </div>
          <div className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white">
            <p>{t("supplyChain")}</p>
            <div className="rounded-full bg-primary p-2">
              <Unlink className="size-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
