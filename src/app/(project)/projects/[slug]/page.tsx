import { projectSlugsQuery, singleProjectQuery } from '@/graphql/queries';
import { performRequest } from '@/lib/datocms';
import {
  ProjectsSlugsQuery,
  ResponsiveImage,
  SingleProjectQuery
} from '@/types/graphql';
import { Image as DatoImage } from 'react-datocms';
import { toNextMetadata } from 'react-datocms/seo';
import { StructuredText } from '@/components/ui/StructuredText';

import AvatarIcon from '@/assets/icons/avatar.svg';

export const generateStaticParams = async () => {
  const { projects } = await performRequest<ProjectsSlugsQuery>({
    query: projectSlugsQuery
  });

  return projects.map(({ slug }) => slug);
};

const getProjectData = (slug: string) => {
  return performRequest<SingleProjectQuery>({
    query: singleProjectQuery,
    variables: { slug: slug }
  });
};

export const generateMetadata = async ({
  params
}: {
  params: { slug: string };
}) => {
  const { site, project } = await getProjectData(params.slug);
  return toNextMetadata([...(project ? project.seo : []), ...site.favIcon]);
};

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getProjectData(params.slug);

  if (!data) {
    throw new Error('Project page - Fetch Failed!');
  }

  const { project } = data;

  return (
    <main className='pt-24'>
      <section className='flex items-center gap-4'>
        <AvatarIcon className='w-[120px] h-[120px]' />
        <section className='flex flex-col gap-1 largeTablet:gap-2'>
          <h2 className='text-[2rem] smallTablet:text-[3rem] font-medium capitalize'>
            {project?.title}
          </h2>
          <a
            target='_blank'
            referrerPolicy='no-referrer'
            href={project?.previewUrl}
            className='underline text-lg smallTablet:ml-1'
          >
            {project?.previewUrl}
          </a>
        </section>
      </section>
      <section className='project-structured-text'>
        <StructuredText data={project?.description} />
      </section>
      <section className='flex flex-col gap-4 mt-8'>
        {project?.images.map(({ responsiveImage }) => {
          return (
            <DatoImage
              key={responsiveImage?.title}
              data={responsiveImage as ResponsiveImage}
            />
          );
        })}
      </section>
    </main>
  );
};

export default ProjectPage;
