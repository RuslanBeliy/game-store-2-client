import clsx from 'clsx';
import { FC, useState } from 'react';

import s from './Filter.module.scss';

import { ages, genres, sortBy } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { filterActions } from '../../store/filter/filterSlice';
import { Button } from '../Button';
import { Select } from '../Select';

interface Props {
  className?: string;
}

export const Filter: FC<Props> = ({ className }) => {
  const [filter, setFilter] = useState({
    age: '',
    genre: '',
    sortBy: '',
  });
  const dispatch = useAppDispatch();

  const setFilters = () => {
    const res = filter.sortBy.includes('+')
      ? { sortBy: filter.sortBy.replace('+', ''), orderBy: 'asc' }
      : { sortBy: filter.sortBy, orderBy: filter.sortBy ? 'desc' : '' };
    dispatch(filterActions.setFilters({ ...filter, ...res }));
  };
  const setDefaultFilters = () => {
    dispatch(filterActions.setDefaultFilters());
    setFilter({
      age: '',
      genre: '',
      sortBy: '',
    });
  };

  return (
    <div className={clsx(s.filter, className)}>
      <div className={s.filterItem}>
        Жанр:
        <Select
          getValue={(val) => setFilter((prev) => ({ ...prev, genre: val }))}
          items={genres}
          value={filter.genre}
        />
      </div>
      <div className={s.filterItem}>
        Сортировать по:
        <Select
          getValue={(val) => setFilter((prev) => ({ ...prev, sortBy: val }))}
          items={sortBy}
          value={filter.sortBy}
        />
      </div>
      <div className={s.filterItem}>
        Возраст:
        <Select
          getValue={(val) => setFilter((prev) => ({ ...prev, age: val }))}
          items={ages}
          value={filter.age}
        />
      </div>

      <div className={s.btns}>
        <Button onClick={setFilters}>Применить</Button>
        <Button onClick={setDefaultFilters} size='sm' variant='outline'>
          Сбросить
        </Button>
      </div>
    </div>
  );
};
