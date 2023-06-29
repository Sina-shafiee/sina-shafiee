import { toNextMetadata } from 'react-datocms/seo';

import { ProjectList } from '@/components/domains/projects';

import { ProjectPageDataQuery } from '@/types/graphql';
import { projectPageQuery } from '@/graphql/queries';
import { performRequest } from '@/lib/datocms';

const getProjectsData = () => {
  return performRequest<ProjectPageDataQuery>({
    query: projectPageQuery
  });
};

export const generateMetadata = async () => {
  const { site, projects } = await getProjectsData();
  return toNextMetadata([...(projects ? projects.seo : []), ...site.favIcon]);
};

const ProjectsPage = () => {
  return (
    <main>
      <ProjectList />
    </main>
  );
};

export default ProjectsPage;
