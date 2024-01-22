import { MutableRefObject, useCallback, useEffect } from 'react';
import { Element } from 'react-markdown/lib';

import { extractMarkdownCodeMetadata } from '@common';
import { v4 } from 'uuid';

export type UseCodeBlockArgs = {
  ref: MutableRefObject<HTMLElement | null>;
  buttons: MutableRefObject<HTMLDivElement[]>;
  node?: Element;
  code?: string;
};

export const useCodeBlock = ({ ref, buttons, node, code }: UseCodeBlockArgs) => {
  const onClickCopy = useCallback(
    (id: string) => {
      navigator.clipboard.writeText(code ?? '');

      for (const button of buttons.current) {
        button.innerText = button.id === id ? 'copied' : 'copy';
      }
    },
    [code, buttons],
  );

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
    copy.id = ['copy', v4()].join('-');
    copy.className = 'copy';
    copy.innerText = 'copy';
    copy.onclick = () => onClickCopy(copy.id);

    buttons.current.push(copy);

    const info = document.createElement('div');
    info.className = 'info';
    info.append(text, copy);

    const codeblock = document.createElement('div');
    codeblock.className = 'codeblock';
    codeblock.append(info, parent.cloneNode(true));

    parent.replaceWith(codeblock);
  }, [ref, buttons, node, code, onClickCopy]);
};
