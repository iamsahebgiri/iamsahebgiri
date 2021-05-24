import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';

import MDXComponents from '@/components/MDXComponents';
import remarkCpLink from '@/lib/remark-cp-link';

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getSubDirectoryFiles(type) {
  const isDirectory = (fileName) => {
    return fs.lstatSync(fileName).isDirectory();
  };

  let allFiles = [];
  try {
    const cpDir = path.join(root, 'data', type);
    const folders = fs
      .readdirSync(cpDir)
      .map((fileName) => {
        return path.join(cpDir, fileName);
      })
      .filter(isDirectory);

    folders.forEach((folder) => {
      const files = fs.readdirSync(folder);
      files.forEach((file) => {
        allFiles.push(path.join(folder, file));
      });
    });
  } catch (err) {
    console.log(err);
  }

  return allFiles;
}

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`);
  const mdPath = path.join(root, 'data', type, `${slug}.md`);
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
        require('remark-emoji'),
        require('remark-prism'),
        require('remark-math'),
        remarkCpLink,
      ],
      rehypePlugins: [require('rehype-katex')],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
}
