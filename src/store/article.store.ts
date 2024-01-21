import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { plainToInstance } from 'class-transformer';

import { RouterPath } from '@common';

import { RecoilStore } from './claases';

export interface ArticleStoreProps {
  loading: boolean;
  articles: Article[];
  article: Article | null;
}

export class Article {
  id!: number;
  filename!: string;
  title!: string;
  datetime!: string;
  category!: string;
  tags!: string[];
  content!: string;
}

export class ArticleStore extends RecoilStore<ArticleStoreProps> {
  private readonly ARTICLES = '/articles.json';

  constructor() {
    super({
      loading: true,
      articles: [],
      article: null,
    });
  }

  useFetchArticles() {
    const [{ articles }, setStore] = this.useState();

    useEffect(() => {
      fetch(this.ARTICLES)
        .then((res) => res.json())
        .catch(() => [])
        .then((res) => plainToInstance(Article, res as object[]))
        .then((articles) => setStore((prev) => ({ ...prev, articles, loading: false })));
    }, [setStore]);

    return articles;
  }

  useFetchArticle() {
    const params = useParams<{ id?: string }>();
    const navigate = useNavigate();

    const [{ loading, article, articles }, setStore] = this.useState();

    useEffect(() => {
      if (loading) {
        return;
      }

      if (params.id == null || /\d+/.exec(params.id) == null) {
        return navigate(RouterPath.NotFound, { replace: true });
      }

      const id = Number(params.id);
      const article = articles[id - 1] ?? null;

      if (article === null) {
        return navigate(RouterPath.NotFound, { replace: true });
      }

      setStore((prev) => ({ ...prev, article }));
    }, [loading, params.id, articles]);

    return article;
  }
}

export const articleStore = new ArticleStore();
