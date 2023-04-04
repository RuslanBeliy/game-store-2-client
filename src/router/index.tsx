import { createBrowserRouter } from 'react-router-dom';

import { routes } from './routes';

import { Layout, PrivateRoutes } from '../components';
import {
  AboutPage,
  CartPage,
  ErrorPage,
  HomePage,
  LoginPage,
  OrderPage,
  ProfilePage,
  RegisterPage,
} from '../pages';

export const router = createBrowserRouter([
  {
    path: routes.index,
    element: <Layout />,
    errorElement: <ErrorPage message='Страница не существует' notFound />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: routes.about,
        element: <AboutPage />,
      },

      {
        element: <PrivateRoutes />,
        children: [
          {
            path: routes.login,
            element: <LoginPage />,
          },
          {
            path: routes.register,
            element: <RegisterPage />,
          },
          {
            path: routes.profile,
            element: <ProfilePage />,
          },
          {
            path: routes.order,
            element: <OrderPage />,
          },
          {
            path: routes.cart,
            element: <CartPage />,
          },
        ],
      },
    ],
  },
]);
