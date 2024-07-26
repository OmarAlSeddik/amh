import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import BusinessAnalysisImage from "@/public/what-we-do/business-analysis.webp";
import BusinessConsultingForProfessionalsImage from "@/public/what-we-do/business-consulting-for-professionals.webp";
import BusinessConsultingImage from "@/public/what-we-do/business-consulting.webp";
import BusinessStrategyAndConsultingImage from "@/public/what-we-do/business-strategy-and-consulting.webp";
import ConsultingMethodsImage from "@/public/what-we-do/consulting-methods.webp";
import PrinciplesOfFinanceImage from "@/public/what-we-do/principles-of-finance.webp";
import Image from "next/image";
import Field from "./Field";

const Fields = () => {
  const fields = [
    {
      name: "Training and Development Consultation",
      image: BusinessConsultingImage,
    },
    {
      name: "Business Consulting For Professionals",
      image: BusinessConsultingForProfessionalsImage,
    },
    {
      name: "Business Strategy and Consulting",
      image: BusinessStrategyAndConsultingImage,
    },
    {
      name: "Business Analysis",
      image: BusinessAnalysisImage,
    },
    {
      name: "Principles of Finance",
      image: PrinciplesOfFinanceImage,
    },
    {
      name: "Consulting Methods",
      image: ConsultingMethodsImage,
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-4 bg-[#191919] py-12 text-center text-white">
        <h2 className="h1">Our Fields</h2>
        <h3 className="h3">Unlock Your true Business Potential</h3>
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
                  <Button className="w-40">Learn More</Button>
                </DialogTrigger>
                <DialogContent>
                  <Field name={field.name} image={field.image} />
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
