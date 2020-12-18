import Head from 'next/head';

import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

import Container from '../components/container';
import Layout from '../components/layout';
import Header from '../components/header';
import Blog from '../components/blog';
import Footer from '../components/footer';

export default function blog({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog - {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
        </Container>
        <Blog blogs={allPosts} />
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'type',
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
