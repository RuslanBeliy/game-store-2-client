import clsx from 'clsx';
import { FC } from 'react';
import { FiSearch } from 'react-icons/fi';

import s from './Input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'main' | 'search';
  errorMessage?: string;
}

export const Input: FC<Props> = ({ className, variant = 'main', errorMessage, ...props }) => {
  return (
    <div className={clsx(s.input, s[`input-${variant}`], className)}>
      {variant === 'search' && <FiSearch />}
      <input {...props} />
      {errorMessage && <span className={s.error}>{errorMessage}</span>}
    </div>
  );
};
