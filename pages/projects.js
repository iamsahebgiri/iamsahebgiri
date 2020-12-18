import Head from 'next/head';

import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

import Container from '../components/container';
import Projects from '../components/projects';
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';

export default function projects({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects - {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Projects />
        </Container>
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
