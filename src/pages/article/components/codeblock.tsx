import hljs from 'highlight.js';
import markdown from 'highlight.js/lib/languages/markdown';
import bash from 'highlight.js/lib/languages/bash';
import shell from 'highlight.js/lib/languages/shell';
import temp from 'highlight.js/lib/languages/x86asm';

import { ClassAttributes, FunctionComponent, HTMLAttributes, useRef } from 'react';
import { ExtraProps } from 'react-markdown';

import { useCodeBlock, useMermaid } from '../hooks';

hljs.registerLanguage('mermaid', markdown);
hljs.registerLanguage('zsh', bash);
hljs.registerLanguage('log', temp);
hljs.registerLanguage('conf', shell);

export const ArticleCodeBlock: FunctionComponent<
  ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
> = ({ node, children, ...props }) => {
  const ref = useRef<HTMLElement | null>(null);
  const match = /language-(\w+)/.exec(props.className ?? '');
  const language = (match ?? ['', 'text'])[1];
  const result = hljs.highlight(String(children), { language });
  const code = result.code;

  useCodeBlock({ ref, node, code });
  useMermaid({ ref, language });

  return <code ref={ref} dangerouslySetInnerHTML={{ __html: result.value }} />;
};
