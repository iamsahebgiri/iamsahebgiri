import Hero from 'components/Hero';
import Timeline from 'components/Timeline';
import Layout from 'components/Layout';

export default function Index() {
  return (
    <Layout title="Home">
      <Hero />
      <Timeline />
    </Layout>
  );
}
