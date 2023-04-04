import clsx from 'clsx';
import { FC } from 'react';

import s from './Button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'main' | 'outline' | 'red';
  size?: 'sm' | 'md';
}

export const Button: FC<Props> = ({
  children,
  variant = 'main',
  size = 'md',
  className,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(s.button, s[`button-${variant}`], s[`button-${size}`], className)}
      {...props}
    >
      {children}
    </button>
  );
};
