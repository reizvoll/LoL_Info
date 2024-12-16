import { Champion } from "@/types/champion";
import { fetchChampionList, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export default async function ChampionsPage() {
  const champions: Champion[] = await fetchChampionList();
  const version = await fetchLatestVersion();
  console.log(champions);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
      {champions.map((champion) => (
        <Link key={champion.id} href={`/champions/${champion.id}`} passHref >
          <div style={{cursor: 'pointer' }}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
              alt={champion.name}
              width={120}
              height={120}
              style={{ borderRadius: '8px' }}
            />
            <h3>{champion.name}</h3>
            <h5>{champion.title}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
}