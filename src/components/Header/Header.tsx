import { FC } from 'react';

import s from './Header.module.scss';
import { NavList } from './NavList';
import { NavListModile } from './NavListModile';

import { Logo } from '..';

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <header className={s.header}>
      <Logo />
      {window.screen.width > 576 ? <NavList /> : <NavListModile />}
    </header>
  );
};
