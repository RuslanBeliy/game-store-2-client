export interface ServerResponseGame {
  countItems: number;
  games: Game[];
}

export interface Game {
  _id: string;
  name: string;
  ageLimit: number;
  rating: number;
  price: number;
  genre: string;
  platform: string[];
  imageUrl: string;
  description: string;
  amount: number;
}

export interface GameCart {
  _id: string;
  name: string;
  price: number;
  platform: string;
  imageUrl: string;
  amount: number;
}
