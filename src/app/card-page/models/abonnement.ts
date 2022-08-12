export interface IAbonnementGridPrice {
  price: number;
  promotionalPrice: number;
}

export interface IAbonnementGrid {
  title: "Plus" | "Pro";
  channelsSd: number;
  channelsHd: number;
  progressPercentage: number;
  prices: IAbonnementGridPrice;
}

export interface IAbonnement {
  cardTitle: string;
  cardDescription: string;
  internetSpeed: string;
  speedPercent: number;
  grids: IAbonnementGrid[];
  dark?: boolean;
}