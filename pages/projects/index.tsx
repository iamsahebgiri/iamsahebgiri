import Layout from 'components/Layout';
import Project from 'components/Project';
import Title from 'components/Title';
import projectsData from 'data/projectsData.json';
import { Box } from '@chakra-ui/react';

const ProjectsPage = () => {
  return (
    <Layout title="Projects" description="Throughout the years I've worked on many different projects and here are few of them.">
      <Title name="Projects" p="Throughout the years I've worked on many different projects and here are few of them." />
      <Box
        maxW="container.lg"
        display="grid"
        margin="0 auto"
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gridGap="6"
      >
        {projectsData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Box>
    </Layout>
  );
};

export default ProjectsPage;
