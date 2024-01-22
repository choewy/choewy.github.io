import 'highlight.js/styles/github.css';

import { FunctionComponent } from 'react';
import Markdown from 'react-markdown';

import { Article } from '@store';

import { ArticleCodeBlock } from './codeblock';
import { useToc } from '../hooks';

export const ArticleContent: FunctionComponent<Article> = (props) => {
  useToc();

  return (
    <article id="article__content">
      <Markdown
        className="content"
        components={{
          code: (props) => <ArticleCodeBlock {...props} />,
        }}
      >
        {props.content}
      </Markdown>
    </article>
  );
};
