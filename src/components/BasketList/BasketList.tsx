import { FC } from 'react';

import { BasketItem } from './BasketItem';
import s from './BasketList.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { cartSelector } from '../../store/cart/cartSelector';
import { cartActions } from '../../store/cart/cartSlice';
import { GameCart } from '../../types/Game';

interface Props {}

export const BasketList: FC<Props> = () => {
  const { cart } = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  const handleDelete = (game: GameCart) => {
    dispatch(cartActions.deleteFromCart(game));
  };
  const incrementCart = (game: GameCart) => {
    dispatch(cartActions.addToCart(game));
  };
  const decrementCart = (game: GameCart) => {
    dispatch(cartActions.decrementCart(game));
  };

  return (
    <div className={s.basketList}>
      {cart.map((game) => (
        <BasketItem
          key={game._id}
          decrementCart={() => decrementCart(game)}
          incrementCart={() => incrementCart(game)}
          deleteFromCart={() => handleDelete(game)}
          {...game}
        />
      ))}
    </div>
  );
};
