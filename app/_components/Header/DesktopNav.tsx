import Link from "next/link";

const DesktopNav = () => {
  return (
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
      <Link href="/contact-us" className="transition-all hover:text-primary">
        Contact Us
      </Link>
    </nav>
  );
};

export default DesktopNav;
