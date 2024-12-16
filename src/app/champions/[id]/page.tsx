import { fetchChampionDetail, fetchLatestVersion } from "@/utils/serverApi";
import { ChampionDetail } from "@/types/Champion";
import Image from "next/image";

const IMAGE_BASE_URL = "https://ddragon.leagueoflegends.com/cdn";
const SPELL_IMAGE_BASE_URL = `${IMAGE_BASE_URL}/14.24.1/img/spell`;
const PASSIVE_IMAGE_BASE_URL = `${IMAGE_BASE_URL}/14.24.1/img/passive`;

// 정규식에 @ 추가!!
function parseTooltip(tooltip: string): string {
  let cleanTooltip = tooltip.replace(/<\/?[^>]+(>|$)|@[^ ]+/g, "");
  cleanTooltip = cleanTooltip.replace(/<\/?[^>]+(>|$)|@[^ ]+/g, "");
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
  const version = await fetchLatestVersion();

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "0 auto" }}>
      <h1>{champion.name}</h1>
      <h2>{champion.title}</h2>
      <Image
        src={`${IMAGE_BASE_URL}/${version}/img/champion/${champion.image.full}`}
        alt={champion.name}
        width={800}
        height={400}
        style={{ borderRadius: "8px" }}
      />
      <p style={{ marginTop: "20px", fontSize: "1.1rem" }}>{champion.blurb}</p>

      <div style={{ marginTop: "30px" }}>
        <h3>Tags</h3>
        <ul style={{ display: "flex", gap: "10px" }}>
          {champion.tags.map((tag) => (
            <li
              key={tag}
              style={{
                backgroundColor: "#333",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "30px" }}>
        <div>
          <h3>패시브</h3>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Image
              src={`${PASSIVE_IMAGE_BASE_URL}/${champion.passive.image.full}`}
              alt={champion.passive.name}
              width={64}
              height={64}
            />
            <div>
              <strong>{champion.passive.name}</strong>
              <p>{champion.passive.description}</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
        <h3>스킬 정보</h3>
        {champion.spells.map((spell) => (
          <div key={spell.id} style={{ marginTop: "20px" }}>
            <h4>{spell.name}</h4>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image
                src={`${SPELL_IMAGE_BASE_URL}/${spell.image.full}`}
                alt={spell.name}
                width={64}
                height={64}
              />
              <div>
                <p>{spell.description}</p>
                <p>
                  <em>
                    {spell.tooltip
                      ? parseTooltip(spell.tooltip)
                      : "해당 내용에 대한 정보가 없습니다."}
                  </em>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Tips for Allies</h3>
        <ul style={{ paddingLeft: "20px" }}>
          {champion.allytips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Tips for Enemies</h3>
        <ul style={{ paddingLeft: "20px" }}>
          {champion.enemytips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}