import { FunctionComponent } from 'react';

import { Article } from '@store';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';

export const ArticleItem: FunctionComponent<Article> = (article) => {
  const navigate = useNavigate();
  const datetime = DateTime.fromFormat(article.datetime, 'yyyy-MM-dd HH:mm:ss').toFormat('yyyy년 MM월 dd일 HH시 mm분');

  return (
    <div className="item">
      <h1 onClick={() => navigate(`/${article.id}`)}>{article.title}</h1>
      <p>{article.content.replaceAll('#', '').slice(0, 300)}</p>
      <div className="metadata">{[article.category, datetime].join(' | ')}</div>
    </div>
  );
};
