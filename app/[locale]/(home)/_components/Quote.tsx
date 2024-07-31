import { useTranslations } from "next-intl";

const Quote = () => {
  const t = useTranslations("Home");

  return (
    <section className="bg-[url('../public/home/quote.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.75)]">
      <div className="container flex h-full flex-col items-center justify-between py-24">
        <p className="max-w-[25ch] text-2xl !leading-loose md:text-4xl">
          {t("quote")}
        </p>
      </div>
    </section>
  );
};

export default Quote;
