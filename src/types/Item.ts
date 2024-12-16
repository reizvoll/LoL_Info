export interface Item {
  id: string;
  name: string;
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

export interface ItemDetail extends Item {
  description: string;
  colloq?: string;
  plaintext?: string;
  into?: string[];
  from?: string[];
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags?: string[];
  maps: Record<string, boolean>;
  stats?: {
    [statName: string]: number;
  };
  effect?: {
    [effectName: string]: string;
  };
  depth?: number;
}