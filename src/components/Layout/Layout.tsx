import { FC, useEffect } from 'react';

import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import s from './Layout.module.scss';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { firstLoadingSelector } from '../../store/auth/authSelector';
import { authMe } from '../../store/auth/authSlice';
import { Footer } from '../Footer';
import { Header } from '../Header';

interface Props {}

export const Layout: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const firstLoading = useAppSelector(firstLoadingSelector);

  useEffect(() => {
    dispatch(authMe());
  }, []);
  return (
    <>
      {!firstLoading && (
        <div className={s.layout}>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
          <ToastContainer position='bottom-right' />
        </div>
      )}
    </>
  );
};
