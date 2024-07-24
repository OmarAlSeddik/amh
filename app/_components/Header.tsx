import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black px-8 py-4 text-white">
      <Link href="/">
        <Image src={Logo} alt="AMH" className="size-20 rounded-full" />
      </Link>
      <nav className="hidden gap-8 lg:flex">
        <Link href="/" className="transition-all hover:text-primary">
          Home
        </Link>
        <Link href="/who-we-are" className="transition-all hover:text-primary">
          Who We Are
        </Link>
        <Link href="/our-team" className="transition-all hover:text-primary">
          Our Team
        </Link>
        <Link href="/what-we-do" className="transition-all hover:text-primary">
          What We Do
        </Link>
        <Link href="/contact" className="transition-all hover:text-primary">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
