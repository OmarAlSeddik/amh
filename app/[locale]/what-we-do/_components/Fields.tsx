import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import LogoImage from "@/public/logo.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Field from "./Field";

const Fields = () => {
  const t = useTranslations("WhatWeDo");

  const fields = [
    {
      name: t("trainingAndDevelopment"),
      image: LogoImage,
      content: (
        <>
          <ul className="list-disc">
            <li>{t("trainingAndDevelopmentContent1")}</li>
            <li>{t("trainingAndDevelopmentContent2")}</li>
            <li>{t("trainingAndDevelopmentContent3")}</li>
            <li>{t("trainingAndDevelopmentContent4")}</li>
          </ul>
          <p>{t("educationAndDevelopmentServices")}</p>
          <ul className="list-disc">
            <li>{t("competencyGapAnalysis")}</li>
            <li>{t("trainingCurricula")}</li>
            <li>{t("experientialLearning")}</li>
            <li>{t("practicalWorkshops")}</li>
            <li>{t("administrativeSkills")}</li>
          </ul>
        </>
      ),
    },
    {
      name: t("strategicConsultation"),
      image: LogoImage,
      content: (
        <>
          <ul className="list-disc">
            <li>{t("strategicConsultationContent1")}</li>
            <li>{t("strategicConsultationContent2")}</li>
            <li>{t("strategicConsultationContent3")}</li>
            <li>{t("strategicConsultationContent4")}</li>
            <li>{t("strategicConsultationContent5")}</li>
          </ul>
        </>
      ),
    },
    {
      name: t("operationsResearch"),
      image: LogoImage,
      content: (
        <>
          <p>{t("operationsResearchContent1")}</p>
          <ul className="list-disc">
            <li>{t("operationsResearchContent2")}</li>
            <li>{t("operationsResearchContent3")}</li>
            <li>{t("operationsResearchContent4")}</li>
            <li>{t("operationsResearchContent5")}</li>
            <li>{t("operationsResearchContent6")}</li>
          </ul>
        </>
      ),
    },
    {
      name: t("corporateFinance"),
      image: LogoImage,
      content: (
        <>
          <p>{t("corporateFinanceContent1")}</p>
          <ul className="list-disc">
            <li>{t("corporateFinanceContent2")}</li>
            <li>{t("corporateFinanceContent3")}</li>
            <li>{t("corporateFinanceContent4")}</li>
            <li>{t("corporateFinanceContent5")}</li>
            <li>{t("corporateFinanceContent6")}</li>
            <li>{t("corporateFinanceContent7")}</li>
            <li>{t("corporateFinanceContent8")}</li>
            <li>{t("corporateFinanceContent9")}</li>
          </ul>
        </>
      ),
    },
    {
      name: t("supplyChain"),
      image: LogoImage,
      content: (
        <>
          <p>{t("supplyChainContent1")}</p>
          <p>{t("supplyChainContent2")}</p>
          <p>{t("supplyChainContent3")}</p>
          <ul className="list-disc">
            <li>{t("supplyChainContent4")}</li>
            <li>{t("supplyChainContent5")}</li>
            <li>{t("supplyChainContent6")}</li>
            <li>{t("supplyChainContent7")}</li>
          </ul>
        </>
      ),
    },
    {
      name: t("corporateGovernance"),
      image: LogoImage,
      content: (
        <>
          <p>{t("corporateGovernanceContent1")}</p>
          <p>{t("corporateGovernanceContent2")}</p>
          <p>{t("corporateGovernanceContent3")}</p>
          <ul className="list-disc">
            <li>{t("corporateGovernanceContent4")}</li>
            <li>{t("corporateGovernanceContent5")}</li>
            <li>{t("corporateGovernanceContent6")}</li>
            <li>{t("corporateGovernanceContent7")}</li>
            <li>{t("corporateGovernanceContent8")}</li>
            <li>{t("corporateGovernanceContent9")}</li>
          </ul>
          <p>{t("governanceConsulting")}</p>
          <ul className="list-disc">
            <li>{t("governanceConsulting1")}</li>
            <li>{t("governanceConsulting2")}</li>
            <li>{t("governanceConsulting3")}</li>
            <li>{t("governanceConsulting4")}</li>
            <li>{t("governanceConsulting5")}</li>
            <li>{t("governanceConsulting6")}</li>
          </ul>
          <p>{t("hrConsulting")}</p>
          <ul className="list-disc">
            <li>{t("hrConsulting1")}</li>
            <li>{t("hrConsulting2")}</li>
            <li>{t("hrConsulting3")}</li>
            <li>{t("hrConsulting4")}</li>
            <li>{t("hrConsulting5")}</li>
            <li>{t("hrConsulting6")}</li>
            <li>{t("hrConsulting7")}</li>
            <li>{t("hrConsulting8")}</li>
          </ul>
        </>
      ),
    },
    {
      name: t("humanResources"),
      image: LogoImage,
      content: (
        <>
          <p>{t("humanResourcesContent1")}</p>
          <p>{t("humanResourcesContent2")}</p>
          <p>{t("humanResourcesContent3")}</p>
          <ul className="list-disc">
            <li>{t("humanResourcesContent4")}</li>
            <li>{t("humanResourcesContent5")}</li>
            <li>{t("humanResourcesContent6")}</li>
            <li>{t("humanResourcesContent7")}</li>
            <li>{t("humanResourcesContent8")}</li>
            <li>{t("humanResourcesContent9")}</li>
            <li>{t("humanResourcesContent10")}</li>
            <li>{t("humanResourcesContent11")}</li>
          </ul>
        </>
      ),
    },
    {
      name: t("digitalTransformation"),
      image: LogoImage,
      content: (
        <>
          <ul className="list-disc">
            <li>{t("digitalTransformationContent1")}</li>
            <li>{t("digitalTransformationContent2")}</li>
            <ul className="list-disc">
              <li>{t("digitalTransformationContent3")}</li>
              <li>{t("digitalTransformationContent4")}</li>
              <li>{t("digitalTransformationContent5")}</li>
              <li>{t("digitalTransformationContent6")}</li>
            </ul>
            <li>{t("digitalTransformationContent7")}</li>
            <ul className="list-disc">
              <li>{t("digitalTransformationContent8")}</li>
              <li>{t("digitalTransformationContent9")}</li>
              <li>{t("digitalTransformationContent10")}</li>
              <li>{t("digitalTransformationContent11")}</li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      name: t("salesAndMarketing"),
      image: LogoImage,
      content: (
        <>
          <ul className="list-disc">
            <li>{t("salesAndMarketingContent1")}</li>
            <li>{t("salesAndMarketingContent2")}</li>
            <li>{t("salesAndMarketingContent3")}</li>
            <ul className="list-disc">
              <li>{t("salesAndMarketingContent4")}</li>
              <li>{t("salesAndMarketingContent5")}</li>
              <li>{t("salesAndMarketingContent6")}</li>
              <li>{t("salesAndMarketingContent7")}</li>
              <li>{t("salesAndMarketingContent8")}</li>
              <li>{t("salesAndMarketingContent9")}</li>
              <li>{t("salesAndMarketingContent10")}</li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      name: t("safetyAndHealth"),
      image: LogoImage,
      content: (
        <>
          <p>{t("safetyAndHealthContent1")}</p>
          <p>{t("safetyAndHealthContent2")}</p>
          <ul className="list-disc">
            <li>{t("safetyAndHealthContent3")}</li>
            <li>{t("safetyAndHealthContent4")}</li>
            <li>{t("safetyAndHealthContent5")}</li>
            <li>{t("safetyAndHealthContent6")}</li>
            <li>{t("safetyAndHealthContent7")}</li>
            <li>{t("safetyAndHealthContent8")}</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-4 bg-[#191919] py-12 text-center text-white">
        <h2 className="h1">{t("ourFieldsTitle")}</h2>
        <h3 className="h3">{t("unlockPotential")}</h3>
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col border">
            <Image
              src={field.image}
              alt={field.name}
              className="h-[30rem] w-full object-cover"
            />
            <div className="flex flex-col gap-4 p-8">
              <h3 className="h3">{field.name}</h3>
              <Separator />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-40">{t("learnMore")}</Button>
                </DialogTrigger>
                <DialogContent>
                  <Field
                    name={field.name}
                    image={field.image}
                    content={field.content}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fields;
