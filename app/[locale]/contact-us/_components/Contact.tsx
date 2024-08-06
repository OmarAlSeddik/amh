import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="bg-black text-white">
      <div className="container flex flex-col gap-8 py-24 sm:items-center">
        <h2 className="h2">{t("contactUs")}</h2>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:gap-16">
          <div className="flex flex-col">
            <h3 className="h3 mb-2">{t("addressTitle")}</h3>
            <span className="text-sm">{t("addressLine1")}</span>
            <span className="text-sm">{t("addressLine2")}</span>
          </div>
          <div className="flex flex-col">
            <h3 className="h3 mb-2">{t("contactTitle")}</h3>
            <span className="text-sm">{t("phoneNumber1")}</span>
            <span className="text-sm">{t("email")}</span>
          </div>
          <div className="flex flex-col">
            <h3 className="h3 mb-2">{t("openingHoursTitle")}</h3>
            <span className="text-sm">{t("openingDays")}</span>
            <span className="text-sm">{t("openingHours")}</span>
          </div>
        </div>
        <div className="h-64 w-[32rem] max-w-full rounded bg-gray-500"></div>
      </div>
    </section>
  );
};

export default Contact;
