import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MessageFormImage from "@/public/contact/message-form.webp";
import { Separator } from "@radix-ui/react-separator";
import { useTranslations } from "next-intl";
import Image from "next/image";

const MessageForm = () => {
  const t = useTranslations("Contact");

  return (
    <section className="flex justify-center bg-[#191919] text-white">
      <div className="flex flex-1 justify-center py-24">
        <div className="flex max-w-[40rem] flex-col gap-4">
          <h1 className="h1">{t("getInTouch")}</h1>
          <Separator className="h-px bg-white" />
          <p>{t("yourQuestionsAnswered")}</p>
          <div className="flex">
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="first-name">{t("firstName")}</Label>
              <Input id="first-name" className="bg-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="last-name">{t("lastName")}</Label>
              <Input id="last-name" className="bg-transparent" />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="email-address">{t("emailAddress")}</Label>
              <Input id="email-address" className="bg-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Label htmlFor="phone-number">{t("phoneNumber2")}</Label>
              <Input id="phone-number" className="bg-transparent" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">{t("leaveUsAMessage")}</Label>
            <Textarea className="bg-transparent" id="message" />
          </div>
          <div className="flex flex-col gap-2">
            <Button className="w-32">{t("sendMessage")}</Button>
            <small>{t("messageReceived")}</small>
          </div>
        </div>
      </div>
      <Image
        src={MessageFormImage}
        alt="Message Form"
        className="hidden w-1/2 flex-1 object-cover lg:block"
      />
    </section>
  );
};

export default MessageForm;
