import 'highlight.js/styles/github.css';

import { FunctionComponent, useRef } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Article } from '@store';

import { ArticleCodeBlock } from './codeblock';
import { useToc } from '../hooks';

export const ArticleContent: FunctionComponent<Article> = (props) => {
  const copyButtons = useRef<HTMLDivElement[]>([]);

  useToc();

  return (
    <article id="article__content">
      <Markdown
        className="content"
        remarkPlugins={[remarkGfm]}
        components={{
          code: (props) => <ArticleCodeBlock {...props} buttons={copyButtons} />,
        }}
      >
        {props.content}
      </Markdown>
    </article>
  );
};
