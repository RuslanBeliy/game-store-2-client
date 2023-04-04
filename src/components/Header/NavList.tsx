import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';

import { BiUserCircle } from 'react-icons/bi';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import s from './Header.module.scss';

import { navList } from '../../constants';
import { useAppDispatch, useAppSelector, useIsAuth } from '../../hooks';
import { routes } from '../../router/routes';
import { authSelector } from '../../store/auth/authSelector';
import { authActions } from '../../store/auth/authSlice';
import { cartSelector } from '../../store/cart/cartSelector';
import { setCartLS, setTokenLS } from '../../utils';
import { Button } from '../Button';

interface Props {

}

export const NavList: FC<Props> = () => {
  const isAuth = useIsAuth();
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const dispatch = useAppDispatch();
  const { countGames, cart } = useAppSelector(cartSelector);
  const { user } = useAppSelector(authSelector);
  const isFirstRender = useRef(true);

  const handleLogout = () => {
    dispatch(authActions.logout());
    setTokenLS('');
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setCartLS(cart);
  }, [cart]);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className={s.navList}>
      {navList.map((el, i) => (
        <Link className={clsx(s.navLink, activeLink === el.to && s.active)} to={el.to} key={el.to}>
          {el.name}
        </Link>
      ))}
      {isAuth ? (
        <>
          <Link
            to={routes.order}
            className={clsx(s.navLink, activeLink === routes.order && s.active)}
          >
            Мои заказы
          </Link>

          <Link
            to={routes.cart}
            className={clsx(s.cart, s.navLink, activeLink === routes.cart && s.active)}
          >
            <RiShoppingCart2Fill />
            <span>{countGames}</span>
          </Link>

          <Link to={routes.profile}>
            <div className={s.avatar}>
              {user?.avatarUrl ? (
                <img src={user?.avatarUrl} alt={user?.userName} />
              ) : (
                <BiUserCircle />
              )}
            </div>
          </Link>

          <Button onClick={handleLogout}>Выйти</Button>
        </>
      ) : (
        <>
          <Link
            className={clsx(s.navLink, activeLink === routes.login && s.active)}
            to={routes.login}
          >
            Вход
          </Link>
          <Link
            className={clsx(s.navLink, activeLink === routes.register && s.active)}
            to={routes.register}
          >
            Регистрация
          </Link>
        </>
      )}
    </nav>
  );
};
