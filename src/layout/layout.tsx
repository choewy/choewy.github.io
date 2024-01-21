import './layout.css';

import { FunctionComponent } from 'react';

import { articleStore } from '@store';

import { LayoutHelmet, LayoutHeader, LayoutSidebar, LayoutPageOutlet, LayoutFooter } from './components';

export const Layout: FunctionComponent = () => {
  articleStore.useFetchArticles();

  return (
    <>
      <LayoutHelmet />
      <LayoutHeader />
      <LayoutSidebar />
      <LayoutPageOutlet />
      <LayoutFooter />
    </>
  );
};
