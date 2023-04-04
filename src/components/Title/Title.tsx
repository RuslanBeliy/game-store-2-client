import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import s from './Title.module.scss';

interface Props extends React.HTMLAttributes<HTMLHeadingElement>, PropsWithChildren {
  tag?: 'h1' | 'h2' | 'h3';
  size?: '24px' | '32px' | '38px';
  color?: 'white' | 'black';
  textUpper?: boolean;
}

export const Title: FC<Props> = ({
  tag = 'h2',
  size = '32px',
  color = 'white',
  textUpper = false,
  children,
  className,
  ...props
}) => {
  const Tag = tag;

  return (
    <Tag
      className={clsx(
        s.title,
        s[`title-${size}`],
        s[`title-${color}`],
        textUpper && s[`title-ttu`],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
