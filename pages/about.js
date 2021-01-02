import { getPostBySlug } from '../lib/api';
import { join } from 'path';

import Container from '../components/container';
import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';

import markdownToHtml from '../lib/markdownToHtml';
import PostBody from '../components/post-body';

export default function about({ post }) {
  console.log(post);
  return (
    <>
      <Layout title='About' description='Little self bragging explanation about what I do and what I love most.'>
        <Container>
          <Header />
          <Title
            name='About Saheb'
            p='Little self bragging explanation about what I do and what I love most.'
          />
          <PostBody content={post.content} />
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
