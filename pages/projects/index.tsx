import CardList from '@/components/Card/CardList';
import MainLayout from '@/components/Layout/MainLayout';
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
    <MainLayout title='Projects'>
      <CardList data={projects} />
    </MainLayout>
  );
};

export default Projects;
