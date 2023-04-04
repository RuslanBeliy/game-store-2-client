import clsx from 'clsx';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { GameCard } from './GameCard';
import s from './ListOfGames.module.scss';

import { useAppDispatch, useAppSelector, useIsAuth } from '../../hooks';
import { routes } from '../../router/routes';
import { cartActions } from '../../store/cart/cartSlice';
import { gamesSelector } from '../../store/games/gamesSelector';
import { Game } from '../../types/Game';
import { Skeleton } from '../Skeleton';
import { Title } from '../Title';

interface Props {
  className?: string;
}

export const ListOfGames: FC<Props> = ({ className }) => {
  const { games, errorMessage, isLoading } = useAppSelector(gamesSelector);
  const isAuth = useIsAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleAddToCart = (game: Game, platform: string) => {
    if (!isAuth) {
      navigate(routes.login);
      return;
    }
    dispatch(cartActions.addToCart({ ...game, platform }));
    toast.success(`Игра ${game.name} добавлена в корзину`);
  };

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div className={clsx(s.listOfGames, className)}>
      {isLoading ? (
        [...new Array(8)].map((_, i) => <Skeleton key={i} />)
      ) : games.length ? (
        games.map((game) => (
          <GameCard
            handleAddToCart={(platform) => handleAddToCart(game, platform)}
            key={game._id}
            {...game}
          />
        ))
      ) : (
        <Title className={s.gameNotFound} size='38px'>
          Игра не найдена
        </Title>
      )}
    </div>
  );
};
