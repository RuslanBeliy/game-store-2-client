import { routes } from '../router/routes';

export const navList = [
  { name: 'Магазин', to: routes.index },
  { name: 'О нас', to: routes.about },
];

export interface Sort {
  name: string;
  sort: string;
}
export const platformList: Sort[] = [
  { name: 'Все игры', sort: '' },
  { name: 'PC', sort: 'pc' },
  { name: 'Playstation', sort: 'playstation' },
  { name: 'Xbox', sort: 'xbox' },
];

export const ages: Sort[] = [
  { name: 'Все возраста', sort: '' },
  { name: '3+', sort: '3' },
  { name: '6+', sort: '6' },
  { name: '12+', sort: '12' },
  { name: '16+', sort: '16' },
  { name: '18+', sort: '18' },
];
export const genres: Sort[] = [
  { name: 'Все жанры', sort: '' },
  { name: 'Shooter', sort: 'Shooter' },
  { name: 'Sandbox', sort: 'Sandbox' },
  { name: 'RPG', sort: 'RPG' },
  { name: 'Simulator', sort: 'Simulator' },
  { name: 'Action-adventure', sort: 'Action-adventure' },
];
export const sortBy: Sort[] = [
  { name: 'Выбрать', sort: '' },
  { name: 'цене(возрастанию)', sort: '+price' },
  { name: 'цене(убыванию)', sort: 'price' },
  { name: 'рейтингу(возрастанию)', sort: '+rating' },
  { name: 'рейтингу(убыванию)', sort: 'rating' },
];
