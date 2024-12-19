import Image from "next/image";

interface ChampSpellsProps {
  spells: {
    id: string;
    name: string;
    description: string;
    image: string;
  }[];
}

export default function ChampSpells({ spells }: ChampSpellsProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">스킬 정보</h3>
      {spells.map((spell) => (
        <div key={spell.id} className="mt-6 flex items-center gap-4">
          <Image
            src={spell.image}
            alt={spell.name}
            width={64}
            height={64}
            className="min-w-[64px] min-h-[64px]"
          />
          <div>
            <strong>{spell.name}</strong>
            <p>{spell.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}