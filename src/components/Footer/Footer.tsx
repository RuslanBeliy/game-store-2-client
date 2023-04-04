import { FC } from 'react';

import s from './Footer.module.scss';

interface Props {}

export const Footer: FC<Props> = () => {
  return <div className={s.footer}>developed by Ruslan Beliy</div>;
};
