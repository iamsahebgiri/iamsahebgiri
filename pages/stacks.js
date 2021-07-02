import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Stacks from '@/components/Stacks';

export default function StacksPage() {
  return (
    <Layout title="My Stacks">
      <Title
        name="Stacks"
        p="My favorite tools, software and frameworks I use every now and then."
      />
      <Stacks />
    </Layout>
  );
}
