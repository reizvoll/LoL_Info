"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/serverApi";
import { ChampionRotation } from "@/types/championRotation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Champion } from "@/types/champion";

const fetchChampionImages = async (
  championIds: number[],
  version: string
): Promise<Champion[]> => {
  try {
    const championsResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );
    if (!championsResponse.ok) {
      throw new Error("오류! 오류! (챔피언 데이터 로드 실패)");
    }

    // fetch -> 모든 이미지 불러옴!! (받아온 데이터 기반으로다가 매게변수에서 받아온 챔피온 id랑 같은 녀석만)
    // 퉤! 하고 뱉어내게 리턴에 find 사용해서 짤것 ㅇㅅㅇ.리턴값에 ㅇㅅㅇ!!
    const { data } = await championsResponse.json();
    const champions = championIds
      .map((id) => {
        const championKey = Object.keys(data).find(
          (key) => data[key].key === id.toString()
        );
        return championKey ? data[championKey] : undefined;
      })
      .filter(
        (champion): champion is Champion =>
          !!champion && champion.id && champion.name && champion.image
      );

    return champions;
  } catch (error) {
    console.error("챔피언 이미지 로드 문제 발생:", error);
    throw new Error("오류! 오류! (챔피언 이미지 로드 실패)");
  }
};

// 탄스택 이거 isfetching 써줘야 할듯?
const PageComponents = () => {
  const [version, setVersion] = useState<string>("");

  const {
    data: rotationData,
    isPending,
    isError,
  } = useQuery<ChampionRotation>({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  const [freeChampions, setFreeChampions] = useState<Champion[]>([]);
  const [newPlayerChampions, setNewPlayerChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchVersion = async () => {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      const versions = await response.json();
      setVersion(versions[0]);
    };
    fetchVersion();
  }, []);

  useEffect(() => {
    if (rotationData && version) {
      const fetchImages = async () => {
        const freeChampions = await fetchChampionImages(
          rotationData.freeChampionIds,
          version
        );
        const newPlayerChampions = await fetchChampionImages(
          rotationData.freeChampionIdsForNewPlayers,
          version
        );
        setFreeChampions(freeChampions);
        setNewPlayerChampions(newPlayerChampions);
      };
      fetchImages();
    }
  }, [rotationData, version]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div> 오류! 오류! (데이터 로드 중 오류 발생) </div>;

  return (
    <div>
      <h2>이번 주 로테이션 챔피언</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
        }}
      >
        {freeChampions.map((champion) => (
          <div key={champion.id}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={120}
              height={120}
              style={{ borderRadius: "8px" }}
            />
            <p>{champion.name}</p>
          </div>
        ))}
      </div>

      <h2> For 뉴비 (최대 Lv: {rotationData?.maxNewPlayerLevel})</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
        }}
      >
        {newPlayerChampions.map((champion) => (
          <div key={champion.id}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={120}
              height={120}
              style={{ borderRadius: "8px" }}
            />
            <p>{champion.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageComponents;