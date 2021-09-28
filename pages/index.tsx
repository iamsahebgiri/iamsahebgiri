import Hero from 'components/Hero';
import Timeline from 'components/Timeline';
import MainLayout from 'layouts/main';

export default function Index() {
  return (
    <MainLayout frontMatter={{ title: 'Home' }}>
      <Hero />
      <Timeline />
    </MainLayout>
  );
}
