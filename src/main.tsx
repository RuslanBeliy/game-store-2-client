import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import { Spinner } from './components';
import { router } from './router';

import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>
);
