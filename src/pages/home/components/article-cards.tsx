import { Fragment, FunctionComponent } from 'react';

import { articleStore } from '@store';

import { ArticleCard } from './article-card';

export const ArticleCards: FunctionComponent = () => {
  const { articles } = articleStore.useValue();

  return (
    <div id="home__article__cards">
      {articles.map((article, i) => (
        <Fragment key={['article', article.id].join('-')}>
          <ArticleCard {...article} />
        </Fragment>
      ))}
    </div>
  );
};
