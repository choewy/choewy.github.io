export class TocContent {
  id: string;
  href: string;
  depth: number;
  text: string;
  parent: TocContent | null = null;
  children: TocContent[] = [];

  constructor(element: Element) {
    const textContent = element.textContent ?? '';

    element.id = textContent.replaceAll('.', '_').replaceAll(' ', '_');

    this.id = element.id;
    this.href = `#${element.id}`;
    this.depth = Number(element.tagName.replace('H', ''));
    this.text = textContent;
  }

  setParent(parent: TocContent) {
    this.parent = parent;
    this.parent.children.push(this);

    return this;
  }

  findParent(depth: number) {
    let parent: TocContent | null = this;

    while (parent) {
      if (parent.depth < depth) {
        break;
      }

      parent = parent.parent;
    }

    return parent;
  }
}
