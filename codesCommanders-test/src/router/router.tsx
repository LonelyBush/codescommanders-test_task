import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/layout/layout';
import ErrorBoundary from '../components/error-boundary/error-boundary';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import Post from '../pages/post/post';

const router = createBrowserRouter(
  [
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
          element: <SignIn />,
          errorElement: <ErrorBoundary />,
        },
        {
          path: '/:postId',
          element: <Post />,
          errorElement: <ErrorBoundary />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
    },
  },
);

export default router;
