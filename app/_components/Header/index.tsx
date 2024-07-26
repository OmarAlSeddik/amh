import Logo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black px-8 py-4 text-white">
      <Link href="/">
        <Image src={Logo} alt="AMH" className="size-20 rounded-full" priority />
      </Link>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
