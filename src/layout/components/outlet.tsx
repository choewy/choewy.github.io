import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutPageOutlet: FunctionComponent = () => {
  return (
    <main id="layout__outlet">
      <Outlet />
    </main>
  );
};
