import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AhmadEzzAlDeenImage from "@/public/members/ahmad-ezz-al-deen.webp";
import AhmadMuhammadAbuAliImage from "@/public/members/ahmad-muhammad-abu-ali.webp";
import AhmadOthmanImage from "@/public/members/ahmad-othman.webp";
import AhmadRadwanMansiImage from "@/public/members/ahmad-radwan-mansi.webp";
import AmgadBahaAlDeenImage from "@/public/members/amgad-baha-al-deen.webp";
import AmrAlDabImage from "@/public/members/amr-al-dab.webp";
import AtefAlSharifImage from "@/public/members/atef-al-sharif.webp";
import HebaAlNashratyImage from "@/public/members/heba-al-nashraty.webp";
import HosniAlShamiImage from "@/public/members/hosni-al-shami.webp";
import KareemAlMarzoukyImage from "@/public/members/kareem-al-marzouky.webp";
import KhaledQendeelImage from "@/public/members/khaled-qendeel.webp";
import MuhammadShimeesImage from "@/public/members/muhammad-shimees.webp";
import ShaimaaBayoumiImage from "@/public/members/shaimaa-bayoumi.webp";
import TamerKaramImage from "@/public/members/tamer-karam.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Profile from "./Profile";

const OurTeam = () => {
  const t = useTranslations("OurTeam");

  const members = [
    {
      name: "Amr Al Dab",
      image: AmrAlDabImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Atef Al Sharif",
      image: AtefAlSharifImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Ahmad Ezz Al Deen",
      image: AhmadEzzAlDeenImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Ahmad Muhammad Abu Ali",
      image: AhmadMuhammadAbuAliImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Ahmad Othman",
      image: AhmadOthmanImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Ahmad Radwan Mansi",
      image: AhmadRadwanMansiImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Amgad Baha Al Deen",
      image: AmgadBahaAlDeenImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Heba Al Nashraty",
      image: HebaAlNashratyImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Hosni Al Shami",
      image: HosniAlShamiImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Kareem Al marzouky",
      image: KareemAlMarzoukyImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Khaled Qendeel",
      image: KhaledQendeelImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Muhammad Shimees",
      image: MuhammadShimeesImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Shaimaa Bayoumi",
      image: ShaimaaBayoumiImage,
      title: "Professor",
      content: ``,
    },
    {
      name: "Tamer Karam",
      image: TamerKaramImage,
      title: "Professor",
      content: ``,
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="container flex flex-col gap-8 py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <h1 className="h1">{t("title")}</h1>
            <h3 className="h3">{t("subtitle")}</h3>
          </div>
        </div>
        <div className="grid items-center justify-center gap-4 lg:grid-cols-2">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col bg-[#191919] text-white sm:flex-row"
            >
              <div className="flex w-full justify-center p-4 sm:w-auto sm:justify-start sm:p-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="size-48 object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-2 p-4">
                <div>
                  <small>{member.title}</small>
                  <h3 className="text-lg">{member.name}</h3>
                </div>
                <div className="flex flex-col">
                  <small>info@mysite.com</small>
                  <small>123-456-7890</small>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-48 bg-white text-black hover:text-white">
                      View Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <Profile
                      name={member.name}
                      image={member.image}
                      title={member.title}
                      content={member.content}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
