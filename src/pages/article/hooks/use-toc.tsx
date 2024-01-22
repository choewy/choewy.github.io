import { useEffect } from 'react';
import { TocContent } from './classes';

export const useToc = () => {
  const extractElements = (elements: Element[], element: Element) => {
    const tagName = element.tagName ?? '';
    const depth = Number(tagName.replace('H', ''));

    if (Number.isNaN(depth) === false) {
      elements.push(element);
    }

    for (const children of element.children) {
      extractElements(elements, children);
    }

    return elements;
  };

  const createContents = (elements: Element[]) => {
    const contents: TocContent[] = [];

    let content: TocContent | null = null;

    while (elements.length > 0) {
      const element = elements.shift();

      if (element == null) {
        break;
      }

      const current = new TocContent(element);

      if (content === null) {
        content = current;
        contents.push(content);

        continue;
      }

      if (content.depth < current.depth) {
        content = current.setParent(content);

        continue;
      }

      if (content.depth === current.depth) {
        if (content.parent) {
          content = current.setParent(content.parent);

          continue;
        }
      }

      if (content.depth > current.depth) {
        const parent = content.findParent(current.depth);

        if (parent) {
          content = content.setParent(parent);

          continue;
        }
      }

      content = current;
      contents.push(content);
    }

    return contents;
  };

  const createContentItems = (items: HTMLLIElement[], content: TocContent) => {
    const anchor = document.createElement('a');

    anchor.innerText = content.text;
    anchor.href = content.href;

    const li = document.createElement('li');

    li.appendChild(anchor);
    li.style.paddingLeft = `${10 * content.depth}px`;

    items.push(li);

    for (const child of content.children) {
      createContentItems(items, child);
    }

    return items;
  };

  const createContentList = (contents: TocContent[]) => {
    const ul = document.createElement('ul');
    ul.className = 'toc';

    while (contents.length > 0) {
      const content = contents.shift();

      if (content == null) {
        break;
      }

      ul.append(...createContentItems([], content));
    }

    return ul;
  };

  useEffect(() => {
    const article = document.querySelector('#article__content .content');

    if (article == null) {
      return;
    }

    const elements = extractElements([], article);
    const contents = createContents(elements);

    const title = document.createElement('h1');
    title.innerText = '목차';
    article.prepend(title, createContentList(contents));
  }, []);
};
