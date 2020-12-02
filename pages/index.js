import { useEffect } from 'react';

import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';

import Header from '../components/header';
import { getAllPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Intro from '../components/intro';

export default function Index({ allPosts }) {
  useEffect(() => {
    console.log(allPosts);
  }, []);
  return (
    <>
      <Layout>
        <Head>
          <title>Home - {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <Intro />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
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
