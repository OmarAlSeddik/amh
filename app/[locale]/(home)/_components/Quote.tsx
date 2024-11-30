import QuoteImage from "@/public/home/quote.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Quote = () => {
  const t = useTranslations("Home");

  return (
    <section className="relative text-white">
      <div className="absolute inset-0 z-[-1] bg-black opacity-75" />
      <Image
        placeholder="blur"
        sizes="100vw"
        quality={50}
        src={QuoteImage}
        alt="About"
        className="absolute z-[-2] size-full object-cover lg:block"
      />
      <div className="container flex h-full flex-col items-center justify-between py-24">
        <p className="max-w-[25ch] text-2xl !leading-loose md:text-4xl">{t("quote")}</p>
      </div>
    </section>
  );
};

export default Quote;
