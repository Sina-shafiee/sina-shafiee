import { Project, SingleProjectType, StrippedProject } from '@/types/project';

/**
 * @description Ignore unnecessary data
 */
const stripProjects = (projects: Project[]): StrippedProject[] => {
  return projects.map((project: Project) => ({
    id: project._id,
    title: project.title,
    img: project.image.img_url
  }));
};

/**
 * @description fetch all projects data
 */
export const getProjects = async (): Promise<StrippedProject[]> => {
  const response = await fetch(
    'https://portfolio-backend-ten-iota.vercel.app/api/projects'
  );
  const data: { projects: Project[] } = await response.json();

  return stripProjects(data.projects);
};

/**
 * @description fetch all projects data and return only ids
 */
export const getProjectIds = async (): Promise<string[]> => {
  const projects = await getProjects();

  return projects.map(({ id }) => id);
};

export const getSingleProject = async (
  id: string | string[]
): Promise<SingleProjectType> => {
  const response = await fetch(
    `https://portfolio-backend-ten-iota.vercel.app/api/projects/${id}`
  );

  if (!response.ok) throw new Error('Errorrr');
  const data: { project: SingleProjectType } = await response.json();

  return data.project;
};
