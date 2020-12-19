import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');
const projectsDirectory = join(process.cwd(), '_projects');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getPostBySlug(slug, fields = [], dir = postsDirectory) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, postsDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}

export function getFeaturedPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, postsDirectory))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
    .filter((post) => post.type == 'featured');
  return posts;
}

export function getAllProjects(fields = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getPostBySlug(slug, fields, projectsDirectory))
    // sort projects by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return projects;
}
