import { Element } from 'react-markdown/lib';

export const extractMarkdownCodeMetadata = (node?: Partial<Element>) => {
  let title = null;
  let filename = null;

  const metadata = (node?.data as { meta: string })?.['meta'] ?? '';

  if (metadata.indexOf('title=') > -1) {
    const match = /title=(?:"([^"]+)"|([^ ]+))/.exec(metadata);

    title = (match?.[1] ?? match?.[2] ?? '').replaceAll('"', '');
  }

  if (metadata.indexOf('filename=') > -1) {
    const match = /filename=(?:"([^"]+)"|([^ ]+))/.exec(metadata);

    filename = (match?.[1] ?? match?.[2] ?? '').replaceAll('"', '');
  }

  return { title, filename };
};
