import { FC, useEffect, useState } from 'react';

import s from './Header.module.scss';
import { NavList } from './NavList';
import { NavListModile } from './NavListModile';

import { Logo } from '..';

interface Props {}

export const Header: FC<Props> = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <header className={s.header}>
      <Logo />
      {windowSize > 576 ? <NavList /> : <NavListModile />}
    </header>
  );
};
