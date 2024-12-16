import { Champion, ChampionDetail } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";

const BASE_URL = 'https://ddragon.leagueoflegends.com/cdn';

export async function fetchLatestVersion() {
    const response = await fetch ("https://ddragon.leagueoflegends.com/api/versions.json");
    if (!response) {
        throw new Error ('오류! 오류! (버전 가져오기 실패!)');
    }
    const versions = await response.json();
    return versions[0];
}

// 챔피언 목록
export const fetchChampionList = async (): Promise<Champion[]> => {
  try {
    const version = await fetchLatestVersion();
    const response = await fetch(`${BASE_URL}/${version}/data/ko_KR/champion.json`);
    if (!response.ok) {
      throw new Error('오류! 오류! (챔피언 목록 로드 실패)');
    }
    const data = await response.json();
    return Object.values(data.data); // 객체 -> 배열로 변환
  } catch (error) {
    console.error('챔피언 목록 로드 문제 발생:', error);
    throw new Error('오류! 오류! (챔피언 목록 로드 실패)');
  }
};

// 특정 챔피언 상세 정보
export const fetchChampionDetail = async (id: string): Promise<ChampionDetail> => {
  try {
    const version = await fetchLatestVersion();
    const response = await fetch(`${BASE_URL}/${version}/data/ko_KR/champion/${id}.json`);
    if (!response.ok) {
      throw new Error(`챔피언 ${id}의 상세 정보 로드 중 문제 발생`);
    }
    const data = await response.json();
    const championDetail = data.data[id] as ChampionDetail;
    return championDetail;
  } catch (error) {
    console.error(`챔피언 ${id}의 상세 정보 로드 중 문제 발생:`, error);
    throw new Error('오류! 오류! (챔피언 상세 정보 로드 실패)');
  }
};

// 아이템 목록 및 상세정보
export const fetchItemList = async () => {
  try {
    const version = await fetchLatestVersion();
    const response = await fetch(`${BASE_URL}/${version}/data/ko_KR/item.json`);
    if (!response.ok) {
      throw new Error('오류! 오류! (아이템 목록 로드 실패)');
    }
    const { data } = await response.json();
    const itemDetail = Object.entries(data)
    return { itemDetail, data }
  } catch (error) {
    console.error('아이템 목록 가져오기 실패!:', error);
    throw new Error('오류! 오류! (아이템 목록 로드 실패)');
  }
};

// 챔피온 로테이션
export const getChampionRotation = async (): Promise<ChampionRotation> => {
    try {
      const response = await fetch('/api/rotation');
      if (!response.ok) {
        throw new Error(`챔피언 로테이션 로드 실패: ${response.statusText}`);
      }
      const data: ChampionRotation = await response.json();
      return data;
    } catch (error) {
      console.error("오류! 오류! (챔피언 로테이션 로드 실패)", error);
      throw error;
    }
  };