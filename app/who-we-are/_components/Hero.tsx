import { Separator } from "@/components/ui/separator";
import HeroImage from "@/public/who-we-are/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center bg-[#191919] text-white">
      <div className="flex flex-1 justify-center p-24">
        <div className="flex max-w-[40rem] flex-col gap-4">
          <h1 className="h1">Empowering Business Development Excellence</h1>
          <Separator />
          <p>
            at A.M.H. involves leveraging strategic insights and fostering
            innovation to propel growth and success. Through tailored
            strategies, market expertise, and proactive solutions, we empower
            businesses to navigate challenges, seize opportunities, and achieve
            sustainable expansion. At A.M.H., we are dedicated to providing the
            tools and support necessary to elevate your business development
            efforts and drive impactful results in today&apos;s dynamic market
          </p>
        </div>
      </div>
      <Image
        src={HeroImage}
        alt="Business Man"
        className="hidden w-1/2 flex-1 object-cover lg:block"
      />
    </section>
  );
};

export default Hero;
