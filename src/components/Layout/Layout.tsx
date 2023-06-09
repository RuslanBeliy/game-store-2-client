import { FC, useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import s from './Layout.module.scss';

import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '../../hooks';
import { authMe } from '../../store/auth/authSlice';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Spinner } from '../Spinner';

interface Props {}

export const Layout: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const [firstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await dispatch(authMe());
      setFirstLoading(false);
    })();
  }, []);
  return (
    <>
      {firstLoading ? (
        <Spinner />
      ) : (
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
