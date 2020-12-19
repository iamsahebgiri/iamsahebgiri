import Head from 'next/head';

import { getAllProjects } from '../lib/api';
import { CMS_NAME } from '../lib/constants';

import Container from '../components/container';
import Projects from '../components/projects';
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';

export default function projects({ allProjects }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects - {CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
        </Container>
        <Projects allProjects={allProjects} />
        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'name',
    'description',
    'coverImage',
    'type',
    'dateStarted',
    'techStack',
    'githubLink',
    'hostedLink',
  ]);

  return {
    props: { allProjects },
  };
}
