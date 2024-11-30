import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

const Profile = ({
  name,
  image,
  title,
  content,
}: {
  name: string;
  image: StaticImageData;
  title: string;
  content: string;
}) => {
  const t = useTranslations("OurTeam");

  return (
    <div className="flex flex-col gap-8 bg-black px-10 py-20 text-white sm:flex-row">
      <Image
        placeholder="blur"
        sizes="100vw"
        quality={50}
        placeholder="blur"
        src={image}
        alt={name}
        className="size-64 rounded object-cover"
      />
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p>{title}</p>
          <h3 className="h3">{name}</h3>
        </div>
        <p>{content}</p>
        <DialogClose asChild>
          <Button className="mt-auto w-40 bg-white hover:text-white">{t("goBack")}</Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default Profile;
