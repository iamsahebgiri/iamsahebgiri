import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { Box } from '@chakra-ui/react';

const ArticleIndexPage = ({ mdxSource }) => {
  return (
    <Layout
      title="CP Algorithms"
      description="The wonderful resource of many algorithms and data structures especially for competitive programming."
    >
      <Title
        name="CP Algorithms"
        p="The wonderful resource of many algorithms and data structures especially for competitive programming."
      />
      <Box as="main">
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Box>
    </Layout>
  );
};

export default ArticleIndexPage;

export async function getStaticProps() {
  const toc = await getFileBySlug('cp', 'index');
  return {
    props: toc,
  };
}
