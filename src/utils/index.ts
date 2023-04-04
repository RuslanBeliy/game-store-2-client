import { GameCart } from '../types/Game';

export const filterRequest = (data: any, numPage?: number) => {
  const params: Record<string, unknown> = {};
  if (data.searchText) params.title = data.searchText;
  if (data.age) params.age = data.age;
  if (data.platform) params.platform = data.platform;
  if (data.genre) params.genre = data.genre;
  if (data.sortBy) params.sortBy = data.sortBy;
  if (data.orderBy) params.orderBy = data.orderBy;
  if (numPage && numPage > 1) params.skip = (numPage - 1) * 8;
  return params;
};

export const registerValidation = ({
  userName,
  email,
  password,
}: {
  userName: string;
  email: string;
  password: string;
}) => {
  const errors = [];

  if (userName.trim().length < 3) {
    errors.push({ name: 'userName', mess: 'Имя должно содержать минимум 3 символа' });
  }
  if (email.trim().length < 3) {
    errors.push({ name: 'email', mess: 'Укажите ваш email' });
  }
  if (password.trim().length < 5) {
    errors.push({ name: 'password', mess: 'Пароль должен содержать минимум 5 символов' });
  }

  return errors;
};
export const loginValidation = ({ email, password }: { email: string; password: string }) => {
  const errors = [];

  if (email.trim().length < 1) {
    errors.push({ name: 'email', mess: 'Укажите ваш email' });
  }
  if (password.trim().length < 1) {
    errors.push({ name: 'password', mess: 'Введите пароль' });
  }

  return errors;
};

export const setTokenLS = (token: string) => {
  localStorage.setItem('token', token);
};
export const getTokenLS = () => {
  const token = localStorage.getItem('token') ?? '';
  return token;
};

export const setCartLS = (games: GameCart[]) => {
  localStorage.setItem('cart', JSON.stringify(games));
};
export const getCartLS = () => {
  const data = localStorage.getItem('cart');
  const games = data ? (JSON.parse(data) as GameCart[]) : [];
  const countGames = calculateCountGames(games);
  const totalPrice = calculateTotalPrice(games);
  return { games, countGames, totalPrice };
};

export const calculateCountGames = (games: GameCart[]) => {
  return games.reduce((acc, game) => (acc += game.amount), 0);
};
export const calculateTotalPrice = (games: GameCart[]) => {
  const x = games.reduce((acc, game) => (acc += game.price * game.amount), 0);
  return +x.toFixed(2);
};

export const formateDate = (date: Date | string | number) => {
  const newDate = new Date(date);
  const formatedDate = `${newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()}.${
    newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1
  }.${newDate.getFullYear()} ${
    newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()
  }:${newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes()}`;

  return formatedDate;
};
