import { GameCart } from './Game';

export interface Order {
  _id: string;
  customer: string;
  order: GameCart[];
  createdAt: string;
  updatedAt: string;
}
