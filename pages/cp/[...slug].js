import { MDXRemote } from 'next-mdx-remote';
import Layout from '@/components/Layout';
import { Box } from '@chakra-ui/react';
import { getFileBySlug, getSubDirectoryFiles } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';

const ArticlePage = ({ mdxSource }) => {
  return (
    <Layout>
      <Box as="main" py={[8, 12, 16]}>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Box>
    </Layout>
  );
};

export default ArticlePage;

export async function getStaticProps({ params }) {
  const article = await getFileBySlug('cp', params.slug.join('/'));

  return { props: article, revalidate: 3600 };
}

export async function getStaticPaths() {
  const articles = await getSubDirectoryFiles('cp');
  const articlePaths = articles.map((article) => {
    const [topic, fileName] = article.split('/').slice(-2);

    return {
      params: {
        slug: [topic, fileName.replace(/\.mdx?/, '')],
      },
    };
  });

  return {
    paths: articlePaths,
    fallback: 'blocking',
  };
}
