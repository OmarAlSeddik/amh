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
  const partners = [
    {
      image: AgricalturalBankOfEgyptImage,
      alt: "Agricaltural Bank of Egypt",
    },
    {
      image: HamdiShomanImage,
      alt: "Hamdi Shoman",
    },
    {
      image: IetosImage,
      alt: "Ietos",
    },
    {
      image: SurUniversityCollegeImage,
      alt: "Sur University College",
    },
    {
      image: UniversityCollegeOfGoizhaImage,
      alt: "University College of Goizha",
    },
    {
      image: WatanShippingCompanyImage,
      alt: "Watan Shipping Company",
    },
  ];

  return (
    <section>
      <div className="container flex flex-col items-center gap-8 py-24">
        <h2 className="h2">{t("trustedCollaborations")}</h2>
        <div className="grid items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          {partners.map((partner, index) => (
            <div key={index} className="flex size-48 items-center justify-center">
              <Image
                sizes="100vw"
                quality={50}
                placeholder="blur"
                src={partner.image}
                alt={partner.alt}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
