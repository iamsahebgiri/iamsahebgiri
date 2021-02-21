import { useEffect } from 'react';

import { Container } from "@chakra-ui/react"
import Layout from '../components/layout';
import Head from 'next/head';

import Header from '../components/header';
import { getFeaturedPosts } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import Intro from '../components/intro';
import Blog from '../components/blog';
import Tools from '../components/tools';
import Footer from '../components/footer';

export default function Index({ allPosts }) {
  return (
    <>
      <Layout title='Home'>
        <Header />
        <Container py={12}>
          <Intro />
          {/* <Tools /> */}
          <Footer />
        </Container>
        {/* <Blog blogs={allPosts} /> */}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allFeaturedPosts = getFeaturedPosts([
    'type',
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts: allFeaturedPosts },
  };
}
