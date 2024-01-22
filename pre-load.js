const fs = require('fs');

const MD_IMAGE_REGEXP = /!\[(.*?)\]\((.*?)\.(png|jpeg|jpg|gif|webp|ico|tif|tiff|bmp|svg)\)/g;

const transformImage = (filepath, content) => {
  const images = content.match(MD_IMAGE_REGEXP);

  if (images === null) {
    return content;
  }

  for (const image of images) {
    const bracket = image.indexOf('(');
    const src = content.slice(bracket + 1, image.length - 1);

    if (src.startsWith('.') === false) {
      continue;
    }

    const dirpaths = filepath.split('/');
    const dirpath = dirpaths.slice(0, dirpaths.length - 1);
    const buffer = fs.readFileSync(dirpath.join('/') + src.slice(1));
    const base64Url = `data:image/${filepath.split('.').pop()};base64,${buffer.toString('base64')}`;

    content = contenttext.replace(image, image.replace(src, base64Url));
  }

  return content;
};

const parseMetadata = (key, metadata) => {
  let value = '';

  const i = metadata.findIndex((val) => val.startsWith(key));

  if (i > -1) {
    value = metadata[i].split(':').slice(1).join(':');
  }

  return value;
};

const parseMarkdown = (articles, path) => {
  const filename = path.split('/').pop();

  if (filename.endsWith('.md') === false) {
    return;
  }

  const markdown = fs.readFileSync(path, 'utf-8').toString();

  let content = markdown;
  let title = '';
  let datetime = '';
  let category = '';
  let tags = [];

  const s = markdown.indexOf('---\n');
  const e = markdown.indexOf('\n---');

  if (s > -1 && e > -1) {
    const metadata = markdown.slice(s + 4, e).split('\n');

    title = parseMetadata('title', metadata).trim();
    datetime = parseMetadata('datetime', metadata).trim();
    category = parseMetadata('category', metadata).trim();
    tags = parseMetadata('tags', metadata).trim().split(', ');
    content = markdown.slice(e + 6);
  }

  content = transformImage(path, content);

  const id = articles.length + 1;

  articles.push({ id, filename, title, datetime, category, tags, content });
};

const loadMarkdown = (articles, path) => {
  const stats = fs.statSync(path);

  if (stats.isDirectory()) {
    const paths = fs.readdirSync(path);

    for (const p of paths) {
      loadMarkdown(articles, path + '/' + p);
    }
  }

  parseMarkdown(articles, path);
};

const loads = () => {
  const articles = [];

  loadMarkdown(articles, './__post');

  fs.writeFileSync('./public/articles.json', JSON.stringify(articles, null, 2));
};

loads();

module.exports = loads;
