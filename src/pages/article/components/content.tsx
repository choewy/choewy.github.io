import 'highlight.js/styles/github.css';

import { FunctionComponent } from 'react';
import Markdown from 'react-markdown';

import { Article } from '@store';

import { ArticleCodeBlock } from './codeblock';

export const ArticleContent: FunctionComponent<Article> = (props) => {
  return (
    <article id="article__content">
      <div className="content light">
        <Markdown
          components={{
            code: (props) => <ArticleCodeBlock {...props} />,
          }}
        >
          {props.content}
        </Markdown>
      </div>
    </article>
  );
};
