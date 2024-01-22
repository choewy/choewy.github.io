import './layout.css';

import { FunctionComponent } from 'react';

import { articleStore, settingStore } from '@store';

import { LayoutHelmet, LayoutHeader, LayoutSidebar, LayoutPageOutlet, LayoutFooter } from './components';

export const Layout: FunctionComponent = () => {
  const { theme } = settingStore.useValue();

  articleStore.useFetchArticles();

  return (
    <div id="layout" className={theme}>
      <LayoutHelmet />
      <LayoutHeader />
      <LayoutSidebar />
      <LayoutPageOutlet />
      <LayoutFooter />
    </div>
  );
};
