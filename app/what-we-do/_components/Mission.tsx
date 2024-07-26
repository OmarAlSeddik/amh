import { Button } from "@/components/ui/button";
import MissionImage from "@/public/what-we-do/our-mission.webp";
import Image from "next/image";
import Link from "next/link";

const Mission = () => {
  return (
    <section className="flex justify-center bg-black text-center text-white">
      <div className="flex flex-1 justify-center p-24">
        <div className="flex max-w-[40rem] flex-col gap-4">
          <h1 className="h1">Our Mission</h1>
          <h2 className="h2">Your Business Development Partner</h2>
          <p>
            At A.M.H., our mission is to empower businesses through strategic
            insights and innovative solutions. We are committed to fostering
            growth, enhancing operational efficiencies, and maximizing
            opportunities for our clients. By delivering exceptional service and
            building enduring partnerships, we strive to be a catalyst for
            sustainable success in every industry we serve.
          </p>
          <Link href="/contact-us">
            <Button className="w-40">Get in Touch</Button>
          </Link>
        </div>
      </div>
      <Image
        src={MissionImage}
        alt="Business Man"
        className="hidden w-1/2 flex-1 object-cover lg:block"
      />
    </section>
  );
};

export default Mission;
