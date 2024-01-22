import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@common';

export const LayoutHeader: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <header id="layout__header">
      <h1 onClick={() => navigate(RouterPath.Home)}>choewy.github.io</h1>
    </header>
  );
};
