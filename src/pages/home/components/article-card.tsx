import { FunctionComponent } from 'react';

import { Article } from '@store';

export const ArticleCard: FunctionComponent<Article> = (article) => {
  return (
    <div className="card">
      <h1>{article.title}</h1>
      <div className="description">
        <div>{article.category}</div>
        <div>{article.datetime}</div>
      </div>
    </div>
  );
};
