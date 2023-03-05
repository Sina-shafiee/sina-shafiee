import Page from '@/components/page/Page';
import { getProjects } from '@/lib/projects';
import { Project } from '@/types/project';

type ProjectsProps = {
  projects: Project[];
};

export const getStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects
    }
  };
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Page title='Projects'>
      {projects.map((project) => {
        return (
          <div key={project._id}>
            <h2>{project.title}</h2>
          </div>
        );
      })}
    </Page>
  );
};

export default Projects;
