import { MutableRefObject, useEffect } from 'react';
import { Element } from 'react-markdown/lib';

import { extractMarkdownCodeMetadata } from '@common';

export type UseCodeBlockArgs = {
  ref: MutableRefObject<HTMLElement | null>;
  node?: Element;
  code?: string;
};

export const useCodeBlock = ({ ref, node, code }: UseCodeBlockArgs) => {
  useEffect(() => {
    const parent = ref.current?.parentElement as HTMLPreElement;

    if (parent == null) {
      return;
    }

    const metadata = extractMarkdownCodeMetadata(node);

    if (metadata.title === null && metadata.filename === null) {
      return;
    }

    const text = document.createElement('div');
    text.className = 'text';
    text.innerText = metadata.title ?? metadata.filename ?? '';

    const copy = document.createElement('div');
    copy.className = 'copy';
    copy.innerText = 'copy';
    copy.onclick = () => navigator.clipboard.writeText(code ?? '');

    const info = document.createElement('div');
    info.className = 'info';
    info.append(text, copy);

    const codeblock = document.createElement('div');
    codeblock.className = 'codeblock';
    codeblock.append(info, parent.cloneNode(true));

    parent.replaceWith(codeblock);
  }, [ref, node, code]);
};
