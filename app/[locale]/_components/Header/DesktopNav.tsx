import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const DesktopNav = () => {
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <nav className="hidden gap-8 lg:flex">
      <Link href={`/${locale}/`} className="transition-all hover:text-primary">
        {t("home")}
      </Link>
      <Link
        href={`/${locale}/who-we-are`}
        className="transition-all hover:text-primary"
      >
        {t("whoWeAre")}
      </Link>
      <Link
        href={`/${locale}/our-team`}
        className="transition-all hover:text-primary"
      >
        {t("ourTeam")}
      </Link>
      <Link
        href={`/${locale}/what-we-do`}
        className="transition-all hover:text-primary"
      >
        {t("whatWeDo")}
      </Link>
      <Link
        href={`/${locale}/contact-us`}
        className="transition-all hover:text-primary"
      >
        {t("contactUs")}
      </Link>
    </nav>
  );
};

export default DesktopNav;
