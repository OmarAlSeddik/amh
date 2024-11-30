import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

const Field = ({
  name,
  image,
  content,
}: {
  name: string;
  image: StaticImageData;
  content: ReactElement;
}) => {
  const t = useTranslations("WhatWeDo");

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
        <h3 className="h3">{name}</h3>
        <div className="flex flex-col gap-4">{content}</div>
        <DialogClose asChild>
          <Button className="mt-auto w-40 bg-white hover:text-white">{t("goBack")}</Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default Field;
