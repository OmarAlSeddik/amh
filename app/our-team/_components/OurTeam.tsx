import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AhmadEzzAlDeenImage from "@/public/members/ahmad-ezz-al-deen.jpg";
import AhmadMuhammadAbuAliImage from "@/public/members/ahmad-muhammad-abu-ali.jpg";
import AhmadOthmanImage from "@/public/members/ahmad-othman.jpg";
import AhmadRadwanMansiImage from "@/public/members/ahmad-radwan-mansi.jpg";
import AmgadBahaAlDeenImage from "@/public/members/amgad-baha-al-deen.jpg";
import AmrAlDabImage from "@/public/members/amr-al-dab.jpg";
import AtefAlSharifImage from "@/public/members/atef-al-sharif.jpg";
import HebaAlNashratyImage from "@/public/members/heba-al-nashraty.jpg";
import HosniAlShamiImage from "@/public/members/hosni-al-shami.jpg";
import KareemAlMarzoukyImage from "@/public/members/kareem-al-marzouky.jpg";
import KhaledQendeelImage from "@/public/members/khaled-qendeel.jpg";
import MuhammadShimeesImage from "@/public/members/muhammad-shimees.jpg";
import ShaimaaBayoumiImage from "@/public/members/shaimaa-bayoumi.jpg";
import TamerKaramImage from "@/public/members/tamer-karam.jpg";
import Image from "next/image";
import Profile from "./Profile";

const OurTeam = () => {
  const members = [
    { name: "Ahmad Ezz Al Deen", image: AhmadEzzAlDeenImage },
    { name: "Ahmad Muhammad Abu Ali", image: AhmadMuhammadAbuAliImage },
    { name: "Ahmad Othman", image: AhmadOthmanImage },
    { name: "Ahmad Radwan Mansi", image: AhmadRadwanMansiImage },
    { name: "Amgad Baha Al Deen", image: AmgadBahaAlDeenImage },
    { name: "Amr Al Dab", image: AmrAlDabImage },
    { name: "Atef Al Sharif", image: AtefAlSharifImage },
    { name: "Heba Al Nashraty", image: HebaAlNashratyImage },
    { name: "Hosni Al Shami", image: HosniAlShamiImage },
    { name: "Kareem Al marzouky", image: KareemAlMarzoukyImage },
    { name: "Khaled Qendeel", image: KhaledQendeelImage },
    { name: "Muhammad Shimees", image: MuhammadShimeesImage },
    { name: "Shaimaa Bayoumi", image: ShaimaaBayoumiImage },
    { name: "Tamer Karam", image: TamerKaramImage },
  ];

  return (
    <section className="bg-black text-white">
      <div className="container flex flex-col gap-8 py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <h1 className="h1">Team</h1>
            <h3 className="h3">Dedication. Expertise. Passion.</h3>
          </div>
          <p>
            This is your Team section. It&apos;s a great place to introduce your
            team and talk about what makes it special, such as your culture or
            work philosophy. Don&apos;t be afraid to illustrate personality and
            character to help users connect with your team.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {members.map((member) => (
            <div key={member.name} className="flex bg-[#191919] text-white">
              <Image
                src={member.image}
                alt={member.name}
                className="size-48 object-cover"
              />
              <div className="flex flex-1 flex-col justify-between p-4">
                <small>Role</small>
                <h3 className="text-lg">{member.name}</h3>
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
                    <Profile name={member.name} image={member.image} />
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
