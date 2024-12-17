import { Champion } from "@/types/champion";
import { fetchChampionList, fetchLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

export default async function ChampionsPage() {
  const champions: Champion[] = await fetchChampionList();
  const version = await fetchLatestVersion();

  return (
    <div
      style={{
        padding: "50px 15px",
        boxSizing: "border-box",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "70px",
          fontSize: "2rem",
          fontWeight: "Bold",
          color: "#fff",
        }}
      >
        챔피언 리스트
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 163px)", // 카드의 너비 고정
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {champions.map((champion) => (
          <Link key={champion.id} href={`/champions/${champion.id}`} passHref>
            <div
              className="hover-scale" // 공용 호버 클래스 추가
              style={{
                cursor: "pointer",
                textAlign: "center",
                background: "#333",
                borderRadius: "8px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                height: "220px",
              }}
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.id}.png`}
                alt={champion.name}
                width={120}
                height={120}
                style={{ borderRadius: "8px" }}
              />
              <h3 style={{ margin: "8px 0 4px" }}>{champion.name}</h3>
              <h5 style={{ color: "gray", margin: 0 }}>{champion.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}