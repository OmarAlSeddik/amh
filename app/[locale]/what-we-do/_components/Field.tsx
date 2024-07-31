import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

const Field = ({
  name,
  image,
  content,
}: {
  name: string;
  image: StaticImageData;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-8 bg-black px-10 py-20 text-white sm:flex-row">
      <Image src={image} alt={name} className="size-64 rounded object-cover" />
      <div className="flex flex-1 flex-col gap-4">
        <h3 className="h3">{name}</h3>
        <p>{content}</p>
        <DialogClose asChild>
          <Button className="mt-auto w-40 bg-white hover:text-white">
            Go Back
          </Button>
        </DialogClose>
      </div>
    </div>
  );
};

export default Field;
