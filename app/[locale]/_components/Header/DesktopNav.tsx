import { useTranslations } from "next-intl";
import Link from "next/link";

const DesktopNav = () => {
  const t = useTranslations("Header");

  return (
    <nav className="hidden gap-8 lg:flex">
      <Link href="/" className="transition-all hover:text-primary">
        {t("home")}
      </Link>
      <Link href="/who-we-are" className="transition-all hover:text-primary">
        {t("whoWeAre")}
      </Link>
      <Link href="/our-team" className="transition-all hover:text-primary">
        {t("ourTeam")}
      </Link>
      <Link href="/what-we-do" className="transition-all hover:text-primary">
        {t("whatWeDo")}
      </Link>
      <Link href="/contact-us" className="transition-all hover:text-primary">
        {t("contactUs")}
      </Link>
    </nav>
  );
};

export default DesktopNav;
