import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const MobileNav = () => {
  const t = useTranslations("Header");
  const locale = useLocale();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="order-last block text-black lg:hidden"
          aria-label="Navigation Menu"
        >
          <Menu />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden">
        <nav className="flex h-svh flex-col items-center justify-center gap-8 bg-black text-2xl text-white">
          <DialogClose asChild>
            <Link href={`/${locale}/`}>{t("home")}</Link>
          </DialogClose>
          <DialogClose asChild>
            <Link href={`/${locale}/who-we-are`}>{t("whoWeAre")}</Link>
          </DialogClose>
          <DialogClose asChild>
            <Link href={`/${locale}/our-team`}>{t("ourTeam")}</Link>
          </DialogClose>
          <DialogClose asChild>
            <Link href={`/${locale}/what-we-do`}>{t("whatWeDo")}</Link>
          </DialogClose>
          <DialogClose asChild>
            <Link href={`/${locale}/contact-us`}>{t("contactUs")}</Link>
          </DialogClose>
        </nav>
      </DialogContent>
    </Dialog>
  );
};

export default MobileNav;
