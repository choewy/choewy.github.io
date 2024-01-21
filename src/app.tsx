import { FunctionComponent } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RouterPath } from '@common';
import { Layout } from '@layout';
import { ArticlePage, HomePage, NotFoundPage } from '@pages';

export const App: FunctionComponent = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        [
          {
            element: <Layout />,
            children: [
              {
                path: RouterPath.Home,
                element: <HomePage />,
              },
              {
                path: RouterPath.Article,
                element: <ArticlePage />,
              },
              {
                path: RouterPath.NotFound,
                element: <NotFoundPage />,
              },
            ],
          },
        ],
        { basename: process.env.PUBLIC_URL },
      )}
    />
  );
};
