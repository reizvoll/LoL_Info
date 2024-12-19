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
    gold: {
      base: number;
      sell: number;
    };
  }