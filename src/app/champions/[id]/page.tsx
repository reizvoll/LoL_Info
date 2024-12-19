import { fetchChampionDetail, fetchLatestVersion } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/champion";
import { champParseTooltip } from "@/utils/cleanTooltip";
import ChampHead from "@/components/champion/ChampHead";
import ChampTags from "@/components/champion/ChampTags";
import ChampPassive from "@/components/champion/ChampPassive";
import ChampSpells from "@/components/champion/ChampSpells";
import ChampTips from "@/components/champion/ChampTips";
import ChampSkins from "@/components/champion/Champskins";
import Image from "next/image";

const BASE_URL = "https://ddragon.leagueoflegends.com/cdn";
const SPELL_IMAGE_BASE_URL = `${BASE_URL}/14.24.1/img/spell`;
const PASSIVE_IMAGE_BASE_URL = `${BASE_URL}/14.24.1/img/passive`;
const BACKGROUND_URL =
  `${BASE_URL}/img/champion/splash`;

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
        `${BASE_URL}/${version}/img/champion/${champion.image.full}`,
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
      {/* 배경 이미지 */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src={`${BACKGROUND_URL}/${champion.id}_0.jpg`}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
      </div>

      {/* 헤더 */}
      <ChampHead name={champion.name} title={champion.title} blurb={champion.blurb} />

      <div className="relative px-6 py-8 md:px-12 md:py-10 space-y-10">
        {/* 역할군 */}
        <ChampTags tags={champion.tags} />

        {/* 패시브 */}
        <ChampPassive
          image={`${PASSIVE_IMAGE_BASE_URL}/${champion.passive.image.full}`}
          name={champion.passive.name}
          description={champParseTooltip(champion.passive.description)}
        />

        {/* 스킬 정보 */}
        <ChampSpells
          spells={champion.spells.map((spell) => ({
            id: spell.id,
            name: spell.name,
            description: champParseTooltip(spell.description),
            image: `${SPELL_IMAGE_BASE_URL}/${spell.image.full}`,
          }))}
        />

        {/* 팁 섹션 */}
        <ChampTips tips={champion.allytips} title="아군을 위한 Tip" />
        <ChampTips tips={champion.enemytips} title="적군을 위한 Tip" />

        {/* 스킨 섹션 */}
        <ChampSkins skins={champion.skins} championId={champion.id} />
      </div>
    </div>
  );
}