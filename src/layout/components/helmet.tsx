import { FunctionComponent } from 'react';

import { Helmet } from 'react-helmet-async';

export const LayoutHelmet: FunctionComponent = () => {
  return (
    <Helmet>
      <title>Tech Blog</title>
    </Helmet>
  );
};
