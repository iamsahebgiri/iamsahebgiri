const fs = require('fs');
const args = process.argv.slice(2);

(() => {
  if (args.length != 1) {
    console.error('error: missing argument');
    console.error('usage: npm run post <title>');
    return;
  }

  console.log('Started writing...');

  const title = args[0];
  const slug = sluggify(title);
  const path = `./data/overthoughts/${slug}.mdx`;
  const imagePath = `/assets/overthoughts/${slug}`;
  const content = `---
title: '${title}'
summary: 'Summary'
publishedAt: '${new Date().toISOString().slice(0, 10)}'
image: '${imagePath}/cover.jpg'
---
`;

  try {
    fs.appendFileSync(path, content);
    console.log('Markdown file created.');
  } catch (err) {
    console.error(err);
  }

  try {
    fs.mkdirSync(`./public/${imagePath}`);
  } catch (err) {
    console.error(err);
  }

  console.log('Finished!');

  function sluggify(title) {
    // Remove leading/trailing whitespaces and convert to lowercase
    let slug = title.trim().toLowerCase();

    // Replace special characters with dashes
    slug = slug.replace(/[^\w\s-]/g, '');

    // Replace spaces with dashes
    slug = slug.replace(/\s+/g, '-');

    // Remove consecutive dashes
    slug = slug.replace(/--+/g, '-');

    // Return the sluggified title
    return slug;
  }
})();
