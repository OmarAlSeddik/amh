import ServicesImage from "@/public/home/services.webp";
import {
  BadgePoundSterling,
  Building2,
  NotebookText,
  SquareKanban,
  Store,
  Unlink,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Services = () => {
  const t = useTranslations("Home");

  const services = [
    { content: t("corporateGovernance"), icon: Building2 },
    { content: t("operationsResearch"), icon: NotebookText },
    { content: t("strategicConsultation"), icon: SquareKanban },
    { content: t("corporateFinance"), icon: BadgePoundSterling },
    { content: t("salesMarketing"), icon: Store },
    { content: t("supplyChain"), icon: Unlink },
  ];

  return (
    <section className="relative text-white">
      <div className="absolute inset-0 z-[-1] bg-black opacity-75" />
      <Image
        placeholder="blur"
        sizes="100vw"
        quality={50}
        src={ServicesImage}
        alt="Business Buildings"
        className="absolute z-[-2] size-full object-cover lg:block"
      />
      <div className="container flex h-full flex-col items-center gap-4 py-24">
        <h2 className="h2">{t("servicesTitle")}</h2>
        <p className="text-center">{t("servicesDescription")}</p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex w-56 flex-col items-center justify-between gap-4 bg-[#191919] p-8 text-center text-white"
            >
              <p>{service.content}</p>
              <div className="rounded-full bg-primary p-2">
                <service.icon className="size-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
