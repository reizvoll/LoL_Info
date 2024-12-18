import { fetchChampionDetail, fetchLatestVersion } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/champion";
import Image from "next/image";

const IMAGE_BASE_URL = "https://ddragon.leagueoflegends.com/cdn";
const SPELL_IMAGE_BASE_URL = `${IMAGE_BASE_URL}/14.24.1/img/spell`;
const PASSIVE_IMAGE_BASE_URL = `${IMAGE_BASE_URL}/14.24.1/img/passive`;
const BACKGROUND_URL =
  "https://ddragon.leagueoflegends.com/cdn/img/champion/splash";

function parseTooltip(tooltip: string): string {
  let cleanTooltip = tooltip.replace(/<\/?[^>]+(>|$)|[^ ]+/g, "");
  return cleanTooltip;
}

interface ChampionDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ChampionDetailPageProps) {
  const champion = await fetchChampionDetail(params.id);
  const version = await fetchLatestVersion();

  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.blurb,
    openGraph: {
      title: `${champion.name} - ${champion.title}`,
      description: champion.blurb,
      images: [
        `${IMAGE_BASE_URL}/${version}/img/champion/${champion.image.full}`,
      ],
    },
  };
}

export default async function ChampionDetailPage({
  params,
}: ChampionDetailPageProps) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src={`${BACKGROUND_URL}/${champion.id}_0.jpg`}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          priority
          className="brightness-50 ]"
        />
      </div>

      {/* 이름, 별칭(?), 스토리 섹션 */}
      <div className="relative px-6 py-10 md:px-12 md:py-20 flex flex-col gap-8 text-white">
        <div className="max-w-[45%]">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {champion.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            {champion.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 hidden sm:block">
            {champion.blurb}
          </p>
        </div>

        {/* 태그 섹션 */}
        <div className="flex gap-4">
        <h3 className="text-2xl font-semibold mb-4"> 역할군 </h3>
          {champion.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-gray-800 bg-opacity-70 rounded-md text-white text-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 패시브 섹션 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">패시브</h3>
          <div className="flex items-center gap-4">
            <Image
              src={`${PASSIVE_IMAGE_BASE_URL}/${champion.passive.image.full}`}
              alt={champion.passive.name}
              width={64}
              height={64}
              className="min-w-[64px] min-h-[64px]"
            />
            <div>
              <strong>{champion.passive.name}</strong>
              <p>{champion.passive.description}</p>
            </div>
          </div>
        </div>

        {/* 스킬 정보 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">스킬 정보</h3>
          {champion.spells.map((spell) => (
            <div key={spell.id} className="mt-6 flex items-center gap-4">
              <Image
                src={`${SPELL_IMAGE_BASE_URL}/${spell.image.full}`}
                alt={spell.name}
                width={64}
                height={64}
                className="min-w-[64px] min-h-[64px]"
              />
              <div>
                <strong>{spell.name}</strong>
                <p>{spell.description}</p>
                <p className="italic">
                  {spell.tooltip
                    ? parseTooltip(spell.tooltip)
                    : "해당 내용에 대한 정보가 없습니다."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 아군을 위한 팁 섹션 */}
        {champion.allytips?.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">아군을 위한 Tip</h3>
            <ul className="list-disc list-inside space-y-2">
              {champion.allytips.map((tip, index) => (
                <li key={index} className="text-gray-300">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 적군을 위한 팁 섹션 */}
        {champion.enemytips?.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">적군을 위한 Tip</h3>
            <ul className="list-disc list-inside space-y-2">
              {champion.enemytips.map((tip, index) => (
                <li key={index} className="text-gray-300">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skins 섹션 */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Skins</h3>
          <div className="flex flex-wrap gap-6">
            {champion.skins.map((skin) => (
              <div key={skin.id} className="text-center">
                <Image
                  src={`${BACKGROUND_URL}/${champion.id}_${skin.num}.jpg`}
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
      </div>
    </div>
  );
}