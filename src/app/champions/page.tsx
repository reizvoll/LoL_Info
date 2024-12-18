import { Champion } from "@/types/champion";
import { fetchChampionList, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export default async function ChampionsPage() {
  const champions: Champion[] = await fetchChampionList();
  const version = await fetchLatestVersion();

  return (
    <div className="px-4 py-12 w-full mx-auto">
      <h1 className="text-center mb-16 text-2xl font-bold text-white">
        챔피언 리스트
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_163px)] justify-center gap-8">
        {champions.map((champion) => (
          <Link key={champion.id} href={`/champions/${champion.id}`} passHref>
            <div className="cursor-pointer text-center bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-between h-[220px] transition-transform transform hover:scale-105">
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
                alt={champion.name}
                width={120}
                height={120}
                className="rounded-md"
              />
              <h3 className="mt-2 mb-1 text-white">{champion.name}</h3>
              <h5 className="text-gray-400 m-0">{champion.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}