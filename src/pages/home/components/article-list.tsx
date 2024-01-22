import { articleStore } from '@store';
import { Fragment, FunctionComponent } from 'react';
import { ArticleItem } from './article-item';

export const ArticleList: FunctionComponent = () => {
  const { articles } = articleStore.useValue();

  const count = articles.length;

  return (
    <div id="home__article__list">
      {articles.map((article, i) => (
        <Fragment key={['article__item', article.id].join('-')}>
          <ArticleItem {...article} />
          {count > i + 1 && <hr />}
        </Fragment>
      ))}
    </div>
  );
};
