import { FC } from 'react';

import s from './Select.module.scss';

import { Sort } from '../../constants';

interface Props {
  items: Sort[];
  value: string;
  getValue: (val: string) => void;
}

export const Select: FC<Props> = ({ items, getValue, value }) => {
  return (
    <select onChange={(e) => getValue(e.target.value)} className={s.select} value={value}>
      {items.map((el, i) => (
        <option key={i} value={el.sort}>
          {el.name}
        </option>
      ))}
    </select>
  );
};
