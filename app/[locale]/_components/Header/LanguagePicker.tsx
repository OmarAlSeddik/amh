"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguagePicker = () => {
  const locale = useLocale();
  const pathname = usePathname().split("/")[2];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="transition-all hover:text-primary">
        <Globe />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className={locale === "ar" ? "bg-primary focus:bg-primary/90" : ""}
          dir="rtl"
          asChild
        >
          <Link href={`/ar/${pathname ?? ""}`}>عربي</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={locale === "en" ? "bg-primary focus:bg-primary/90" : ""}
          dir="ltr"
          asChild
        >
          <Link href={`/en/${pathname ?? ""}`}>English</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguagePicker;
