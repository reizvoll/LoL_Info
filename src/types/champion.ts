// 이미지 타입
interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

// 스킨 타입
interface Skin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

// 스펠 타입
interface Spell {
  id: string;
  name: string;
  description: string;
  tooltip?: string; // 요놈에서 문제다.
  image: Image;
}

// 패시브 타입
interface Passive {
  name: string;
  description: string;
  image: Image;
}

// 챔피언 기본 정보 타입
export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
}

// 확장된 챔피언 세부 정보 타입
export interface ChampionDetail extends Champion {
  blurb: string;
  tags: string[];
  skins: Skin[];
  spells: Spell[];
  passive: Passive;
  allytips: string[];
  enemytips: string[];
}