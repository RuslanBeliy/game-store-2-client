import { FC, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

import s from './ListOfGames.module.scss';

import { Game } from '../../types/Game';
import { SelectPlatform } from '../Select';

interface Props extends Game {
  handleAddToCart: (val: string) => void;
}

export const GameCard: FC<Props> = ({
  name,
  imageUrl,
  price,
  genre,
  rating,
  description,
  handleAddToCart,
  platform,
}) => {
  const [platformValue, setPlatformValue] = useState(platform[0]);
  return (
    <div className={s.gameCard}>
      <div className={s.img}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={s.content}>
        <div className={s.genre}>{genre}</div>
        <div className={s.title}>{name}</div>
        <div className={s.ratingPrice}>
          <div className={s.rating}>{rating}/5</div>
          <div className={s.price}>{price}$</div>
        </div>
      </div>

      <div className={s.back}>
        {description}
        <div onClick={() => handleAddToCart(platformValue)} className={s.addGame}>
          <IoMdAddCircleOutline />
        </div>
        <SelectPlatform
          items={platform}
          getValue={(val) => setPlatformValue(val)}
          value={platformValue}
        />
      </div>
    </div>
  );
};
