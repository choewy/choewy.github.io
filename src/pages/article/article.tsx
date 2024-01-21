import './article-github-light.css';
import './article-github-dark.css';
import './article.css';

import { FunctionComponent } from 'react';

import { articleStore } from '@store';
import { ArticleContent } from './components';

export const ArticlePage: FunctionComponent = () => {
  const article = articleStore.useFetchArticle();

  if (article === null) {
    return <></>;
  }

  return <ArticleContent {...article} />;
};
