import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container flex flex-col justify-between gap-4 py-12 sm:flex-row sm:items-center">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={Logo}
            alt="AMH"
            className="size-28 rounded-full sm:size-36"
          />
          <p className="h3">Join the Success!</p>
          <Link href="/contact-us">
            <Button
              variant="outline"
              className="w-40 bg-transparent text-white hover:bg-white"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-xl">Info</span>
            <span>+201003020521</span>
            <span>a.m.hbusinessdev@gmail.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl">Address</span>
            <span>29 Block 3, First Sector ,Zahraa Al Maadi, Cairo</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
