import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/layout/layout';
import ErrorBoundary from '../components/error-boundary/error-boundary';
import Main from '../pages/main/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Main />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/sign-in',
        element: <div>Sign in</div>,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default router;
