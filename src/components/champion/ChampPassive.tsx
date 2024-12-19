import Image from "next/image";

interface ChampPassiveProps {
  image: string;
  name: string;
  description: string;
}

export default function ChampPassive({ image, name, description }: ChampPassiveProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">패시브</h3>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="min-w-[64px] min-h-[64px]"
        />
        <div>
          <strong>{name}</strong>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}