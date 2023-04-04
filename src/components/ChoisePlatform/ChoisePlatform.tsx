import clsx from 'clsx';
import { FC } from 'react';

import s from './ChoisePlatform.module.scss';

import { platformList } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterSelector } from '../../store/filter/filterSelector';
import { filterActions } from '../../store/filter/filterSlice';

interface Props {}

export const ChoisePlatform: FC<Props> = () => {
  const { platform } = useAppSelector(filterSelector);
  const dispatch = useAppDispatch();
  return (
    <div className={s.choisePlatform}>
      {platformList.map((el, i) => (
        <button
          onClick={() => dispatch(filterActions.setPlatform(el.sort))}
          className={clsx(platform === el.sort && s.active)}
          key={i}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};
