import AgricalturalBankOfEgyptImage from "@/public/collaborators/agricaltural-bank-of-egypt.webp";
import HamdiShomanImage from "@/public/collaborators/hamdi-shoman.webp";
import IetosImage from "@/public/collaborators/ietos.webp";
import SurUniversityCollegeImage from "@/public/collaborators/sur-university-college.webp";
import UniversityCollegeOfGoizhaImage from "@/public/collaborators/university-college-of-goizha.webp";
import WatanShippingCompanyImage from "@/public/collaborators/watan-shipping-company.webp";

import Image from "next/image";

const Partners = () => {
  return (
    <section>
      <div className="container flex flex-col items-center gap-8 py-24">
        <h2 className="h2">Trusted Collaborations</h2>
        <div className="grid items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex size-48 items-center justify-center">
            <Image
              src={AgricalturalBankOfEgyptImage}
              alt="Agricaltural Bank of Egypt"
            />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image src={HamdiShomanImage} alt="Hamdi Shoman" />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image src={IetosImage} alt="Ietos" className="object-cover" />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image
              src={SurUniversityCollegeImage}
              alt="Sur University College"
            />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image
              src={UniversityCollegeOfGoizhaImage}
              alt="University College of Goizha"
            />
          </div>
          <div className="flex size-48 items-center justify-center">
            <Image
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
