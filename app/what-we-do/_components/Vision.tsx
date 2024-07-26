import { Button } from "@/components/ui/button";
import Link from "next/link";

const Vision = () => {
  return (
    <section className="flex items-center justify-center bg-[url('../public/what-we-do/our-vision.webp')] bg-cover bg-center py-24 text-white shadow-[inset_0_9999px_rgba(0,0,0,0)]">
      <div className="flex flex-col items-center gap-8 bg-black p-8 text-center">
        <h2 className="h2">Our Vision</h2>
        <p>
          Our vision at A.M.H. is to lead the way in transformative business
          development. We aim to be recognized globally for our commitment to
          excellence, integrity, and customer satisfaction. Through continuous
          innovation and a collaborative approach, we aspire to set new
          standards in driving organizational growth and achieving unparalleled
          results for our clients.
        </p>
        <Link href="/">
          <Button className="w-40">Discover More</Button>
        </Link>
      </div>
    </section>
  );
};

export default Vision;
