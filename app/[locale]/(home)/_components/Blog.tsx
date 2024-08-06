import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Blog = () => {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <section>
      <div className="container flex flex-wrap items-center justify-between gap-4 py-24">
        <div className="flex flex-col gap-4">
          <h2 className="h2">{t("blogTitle")}</h2>
          <p>{t("blogContent")}</p>
        </div>
        <div>
          <Link href={`/${locale}/what-we-do`}>
            <Button
              variant="outline"
              className="w-40 border-black bg-transparent hover:border-primary hover:bg-primary hover:text-white"
            >
              {t("blogAction")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
