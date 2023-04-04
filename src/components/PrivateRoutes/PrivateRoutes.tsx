import { FC } from 'react';

import { Navigate, Outlet, useLocation } from 'react-router-dom';

import s from './PrivateRoutes.module.scss';

import { useIsAuth } from '../../hooks';
import { routes } from '../../router/routes';

interface Props {}

export const PrivateRoutes: FC<Props> = () => {
  const isAuth = useIsAuth();
  const { pathname } = useLocation();

  if (pathname === routes.cart || pathname === routes.profile || pathname === routes.order) {
    return isAuth ? <Outlet /> : <Navigate to={routes.login} />;
  }
  if (pathname === routes.login || pathname === routes.register) {
    return !isAuth ? <Outlet /> : <Navigate to={routes.index} />;
  }

  return <></>;
};
