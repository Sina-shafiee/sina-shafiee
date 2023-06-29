import { ProjectCard } from '@/components/ui/card';

import { ProjectsQuery, ResponsiveImage } from '@/types/graphql';
import { projectsQuery } from '@/graphql/queries';
import { performRequest } from '@/lib/datocms';

const ProjectList = async () => {
  const data = await performRequest<ProjectsQuery>({
    query: projectsQuery
  });

  if (!data) {
    throw new Error('Project list - Fetch Failed !');
  }

  const { projects } = data;

  return (
    <section className='project-list-wrapper'>
      {projects.map(({ slug, title, featuredImage }) => {
        return (
          <ProjectCard
            key={slug}
            title={title}
            slug={slug}
            image={featuredImage!.responsiveImage as ResponsiveImage}
          />
        );
      })}
    </section>
  );
};

export default ProjectList;
