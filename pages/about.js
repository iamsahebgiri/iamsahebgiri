import Head from 'next/head';

import { CMS_NAME } from '../lib/constants';
import { getPostBySlug } from '../lib/api';
import { join } from 'path';

import Container from '../components/container';
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';

import markdownToHtml from '../lib/markdownToHtml';
import markdownStyles from '../components/markdown-styles.module.css';

export default function about({ post }) {
  console.log(post);
  return (
    <>
      <Layout>
        <Head>
          <title>About - {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Title
            name='About Saheb'
            p='Little self bragging explanation about what I do and what I love most.'
          />
          <div className='max-w-prose mx-auto py-8 md:py-16'>
            <div
              className={markdownStyles['markdown']}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </Container>
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const aboutDirectory = join(process.cwd(), '_about');
  const post = getPostBySlug(
    'about-saheb',
    ['title', 'content'],
    aboutDirectory,
  );
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
