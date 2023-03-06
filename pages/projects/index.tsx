import CardList from '@/components/Card/CardList';
import Page from '@/components/page/Page';
import { getProjects } from '@/lib/projects';

import { StrippedProject } from '@/types/project';
import { GetStaticProps } from 'next';

type ProjectsProps = {
  projects: StrippedProject[];
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects
    },
    revalidate: 300
  };
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Page title='Projects'>
      <CardList data={projects} />
    </Page>
  );
};

export default Projects;
