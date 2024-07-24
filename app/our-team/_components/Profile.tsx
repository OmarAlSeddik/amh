import Image, { StaticImageData } from "next/image";

const Profile = ({ name, image }: { name: string; image: StaticImageData }) => {
  return (
    <div className="flex flex-col gap-8 bg-black px-10 py-20 text-white sm:flex-row">
      <Image src={image} alt={name} className="size-64 rounded object-cover" />
      <div className="flex flex-1 flex-col gap-4">
        <h3 className="h3">{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          sapiente suscipit et cum iusto itaque praesentium obcaecati, minima
          quis quaerat minus neque facere autem magnam at expedita ea ex beatae?
        </p>
      </div>
    </div>
  );
};

export default Profile;
