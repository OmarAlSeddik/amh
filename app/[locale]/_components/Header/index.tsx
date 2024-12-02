import Logo from "@/public/logo.webp";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import LanguagePicker from "./LanguagePicker";
import MobileNav from "./MobileNav";

const Header = () => {
  const locale = useLocale();

  return (
    <header className="relative z-50 flex items-center justify-between bg-black px-8 py-4 text-white">
      <Link href={`/${locale}/`}>
        <Image
          sizes="100vw"
          quality={50}
          placeholder="blur"
          src={Logo}
          alt="AMH"
          className="w-16 rounded object-cover sm:w-20"
          priority
        />
      </Link>
      <DesktopNav />
      <LanguagePicker />
      <MobileNav />
    </header>
  );
};

export default Header;
