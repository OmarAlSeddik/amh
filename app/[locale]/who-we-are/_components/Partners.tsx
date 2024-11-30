import AgricalturalBankOfEgyptImage from "@/public/collaborators/agricaltural-bank-of-egypt.webp";
import HamdiShomanImage from "@/public/collaborators/hamdi-shoman.webp";
import IetosImage from "@/public/collaborators/ietos.webp";
import SurUniversityCollegeImage from "@/public/collaborators/sur-university-college.webp";
import UniversityCollegeOfGoizhaImage from "@/public/collaborators/university-college-of-goizha.webp";
import WatanShippingCompanyImage from "@/public/collaborators/watan-shipping-company.webp";
import { useTranslations } from "next-intl";

import Image from "next/image";

const Partners = () => {
  const t = useTranslations("WhoWeAre");

  return (
    <section>
      <div className="container flex flex-col items-center gap-8 py-24">
        <h2 className="h2">{t("trustedCollaborations")}</h2>
        <div className="grid items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex size-48 items-center justify-center">
            <Image
              placeholder="blur"
              sizes="100vw"
              quality={50}
              placeholder="blur"
              src={AgricalturalBankOfEgyptImage}
              alt="Agricaltural Bank of Egypt"
            />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image
              placeholder="blur"
              sizes="100vw"
              quality={50}
              placeholder="blur"
              src={HamdiShomanImage}
              alt="Hamdi Shoman"
            />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image
              placeholder="blur"
              sizes="100vw"
              quality={50}
              placeholder="blur"
              src={IetosImage}
              alt="Ietos"
              className="object-cover"
            />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image
              placeholder="blur"
              sizes="100vw"
              quality={50}
              placeholder="blur"
              src={SurUniversityCollegeImage}
              alt="Sur University College"
            />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image
              placeholder="blur"
              sizes="100vw"
              quality={50}
              placeholder="blur"
              src={UniversityCollegeOfGoizhaImage}
              alt="University College of Goizha"
            />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image
              placeholder="blur"
              sizes="100vw"
              quality={50}
              placeholder="blur"
              src={WatanShippingCompanyImage}
              alt="Watan Shipping Company"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
