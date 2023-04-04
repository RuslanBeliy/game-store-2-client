import { FC } from 'react';
import { SiEpicgames } from 'react-icons/si';
import { Link } from 'react-router-dom';

import s from './Logo.module.scss';

import { routes } from '../../router/routes';

interface Props {}

export const Logo: FC<Props> = () => {
  return (
    <Link to={routes.index} className={s.logo}>
      <SiEpicgames />
    </Link>
  );
};
