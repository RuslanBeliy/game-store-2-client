import clsx from 'clsx';
import { FC } from 'react';

import { Link } from 'react-router-dom';

import s from './Button.module.scss';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'main' | 'outline';
  to: string;
  size?: 'sm' | 'md';
}

export const ButtonLink: FC<Props> = ({
  children,
  to,
  variant = 'main',
  size = 'md',
  className,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={clsx(s.button, s[`button-${variant}`], s[`button-${size}`], className)}
      {...props}
    >
      {children}
    </Link>
  );
};
