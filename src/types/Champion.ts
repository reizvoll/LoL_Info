export interface Champion {
    id: string;
    key: string;
    name: string;
    title: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
  }

  // 챔피온 내용까지 포함시켜서 만들려고 extends 추가
  export interface ChampionDetail extends Champion {
    blurb: string;
    tags: string[];
    partype: string;
    lore: string;
    info: {
      attack: number;
      defense: number;
      magic: number;
      difficulty: number;
    };
    spells: Array<{
      id: string;
      name: string;
      description: string;
      tooltip?: string; // 선택적, 없을 경우 기본 메시지 제공
      leveltip?: {
        label: string[];
        effect: string[];
      };
      maxrank: number;
      cooldown: number[];
      cost: number[];
      range: number[];
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
    }>;
    passive: {
      name: string;
      description: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
    };
    allytips: string[];
    enemytips: string[];
  }