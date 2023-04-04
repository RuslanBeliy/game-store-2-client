import { FC } from 'react';

import s from './Select.module.scss';

interface Props {
  items: string[];
  value: string;
  getValue: (val: string) => void;
}

export const SelectPlatform: FC<Props> = ({ items, getValue, value }) => {
  return (
    <select onChange={(e) => getValue(e.target.value)} className={s.select} value={value}>
      {items.map((el, i) => (
        <option key={i} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};
