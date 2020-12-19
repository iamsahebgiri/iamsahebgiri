import React from 'react';
import Container from './container';
import Project from './project';
import SegmentedButtons from './segmented-buttons';

import Title from './title';

export default function projects({ allProjects }) {
  const [value, setValue] = React.useState(0);
  const tabs = ['All', 'Android', 'Frontend', 'Fullstack'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className='bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800'>
        <Title
          name='Projects'
          p='Best way to learn something is to build real world useful projects for people.'
        />
        <SegmentedButtons
          handleChange={handleChange}
          tabs={tabs}
          value={value}
        />
      </div>
      <div className='bg-gray-100 dark:bg-gray-800 py-8'>
        <Container>
          <div className='mx-auto md:mt py-6 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            {tabs[value] === 'All' &&
              allProjects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            {tabs[value] === 'Android' &&
              allProjects
                .filter((project) => project.type === 'android')
                .map((project, index) => (
                  <Project key={index} project={project} />
                ))}
            {tabs[value] === 'Frontend' &&
              allProjects
                .filter((project) => project.type === 'frontend')
                .map((project, index) => (
                  <Project key={index} project={project} />
                ))}
            {tabs[value] === 'Fullstack' &&
              allProjects
                .filter((project) => project.type === 'fullstack')
                .map((project, index) => (
                  <Project key={index} project={project} />
                ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
