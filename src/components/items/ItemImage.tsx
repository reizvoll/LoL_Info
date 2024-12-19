import Image from "next/image";

const IMAGE_BASE_URL = "https://ddragon.leagueoflegends.com/cdn";

interface ItemImageProps {
  version: string;
  imageFull: string;
  name: string;
}

export default function ItemImage({ version, imageFull, name }: ItemImageProps) {
  return (
    <div className="text-center">
      <Image
        src={`${IMAGE_BASE_URL}/${version}/img/item/${imageFull}`}
        alt={name}
        width={128}
        height={128}
        className="rounded-md mx-auto"
      />
      <h1 className="mt-4 text-2xl font-bold">{name}</h1>
    </div>
  );
}