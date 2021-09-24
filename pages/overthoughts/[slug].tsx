import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getFileBySlug } from 'lib/mdx';
import components from 'components/MDXComponents';
import Blog from 'layouts/blog';

export default function PostPage({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Blog frontMatter={frontMatter}>
      <Component components={components} />
    </Blog>
  );
}

export async function getStaticPaths() {
  const overthoughts = await getFiles('overthoughts');

  return {
    paths: overthoughts.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const overthought = await getFileBySlug('overthoughts', params.slug);

  return { props: overthought };
}
