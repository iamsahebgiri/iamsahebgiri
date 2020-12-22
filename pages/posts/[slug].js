import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import markdownStyles from '../../components/markdown-styles.module.css';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>Home - {CMS_NAME}</title>
      </Head>
      <Container>
        <Header />
        <div className='max-w-prose mx-auto py-8 md:py-16'>
          <div>
            <p className='text-gray-500 font-semibold text-center mb-2'>
              {post.date}
            </p>
            <h1 className='text-4xl font-bold text-center mb-16'>
              {post.title}
            </h1>
          </div>

          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Container>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
