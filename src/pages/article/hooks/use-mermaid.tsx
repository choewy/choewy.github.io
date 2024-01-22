import { v4 } from 'uuid';

import { MutableRefObject, useEffect } from 'react';

import mermaid from 'mermaid';

export type UseMermaidArgs = {
  ref: MutableRefObject<HTMLElement | null>;
  language: string;
};

export const useMermaid = ({ ref, language }: UseMermaidArgs) => {
  useEffect(() => {
    if (ref.current == null || ref.current.textContent == null) {
      return;
    }

    if (language !== 'mermaid') {
      return;
    }

    mermaid.render(['mermaid', v4()].join('-'), ref.current.textContent).then(({ svg, bindFunctions }) => {
      const pre = ref.current?.parentElement as HTMLPreElement;

      if (pre == null || pre.firstElementChild?.tagName === 'DIV') {
        return;
      }

      const div = document.createElement('div');
      div.innerHTML = svg;
      pre.className = 'mermaid';
      pre.appendChild(div);

      if (bindFunctions) {
        bindFunctions(div);
      }
    });
  }, [ref.current, language]);
};
