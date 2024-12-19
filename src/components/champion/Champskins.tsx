import Image from "next/image";

interface ChampSkinsProps {
  skins: {
    id: string;
    num: number;
    name: string;
  }[];
  championId: string;
}

export default function ChampSkins({ skins, championId }: ChampSkinsProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Skins</h3>
      <div className="flex flex-wrap gap-6">
        {skins.map((skin) => (
          <div key={skin.id} className="text-center">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${skin.num}.jpg`}
              alt={skin.name}
              width={200}
              height={450}
              className="rounded-md"
            />
            <p>{skin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}