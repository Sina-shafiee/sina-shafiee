import { GetStaticPaths, GetStaticProps } from 'next';

import Page from '@/components/Layout/MainLayout';
import { getProjectIds, getSingleProject } from '@/lib/projects';

import { SingleProjectType } from '@/types/project';
import ProjectLayout from '@/components/Layout/ProjectLayout';
import ProjectBio from '@/components/ProjectBio/ProjectBio';

export type SingleProjectProps = {
  projectDetail: SingleProjectType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projectIds = await getProjectIds();

  const paths = projectIds.map((id) => ({
    params: { id }
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const projectDetail = await getSingleProject(params?.id!);

    return {
      props: {
        projectDetail: JSON.parse(JSON.stringify(projectDetail))
      },
      revalidate: 300
    };
  } catch (error) {
    return { notFound: true };
  }
};

const SingleProject = ({ projectDetail }: SingleProjectProps) => {
  return (
    <ProjectLayout title={projectDetail?.title ?? 'not found'}>
      <ProjectBio
        title={projectDetail.title}
        description={projectDetail.desc}
        image={projectDetail.image.img_url}
        preview={projectDetail.links.website}
      />
    </ProjectLayout>
  );
};

export default SingleProject;
