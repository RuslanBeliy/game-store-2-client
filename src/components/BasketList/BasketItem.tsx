import { FC } from 'react';
import { MdClose } from 'react-icons/md';

import s from './BasketList.module.scss';

import { GameCart } from '../../types/Game';
import { Title } from '../Title';

interface Props extends GameCart {
  deleteFromCart: () => void;
  incrementCart: () => void;
  decrementCart: () => void;
}

export const BasketItem: FC<Props> = ({
  amount,
  imageUrl,
  name,
  platform,
  price,
  deleteFromCart,
  incrementCart,
  decrementCart,
}) => {
  return (
    <div className={s.basketItem}>
      <MdClose onClick={deleteFromCart} className={s.removeIcon} />
      <div className={s.img}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={s.content}>
        <div className={s.left}>
          <Title size='24px'>{name}</Title>
          <div>Платформа: {platform}</div>
        </div>
        <div className={s.control}>
          <div className={s.controlPrice}>
            <button disabled={amount === 1} onClick={decrementCart}>
              -
            </button>
            <span>{amount}</span>
            <button onClick={incrementCart}>+</button>
          </div>
          <div className={s.price}>
            {price}${amount > 1 && ` / ${(price * amount).toFixed(2)}$`}
          </div>
        </div>
      </div>
    </div>
  );
};
