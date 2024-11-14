import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.tsx';
import setupStore from './lib/redux/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
