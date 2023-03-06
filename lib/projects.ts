import { Project, StrippedProject } from '@/types/project';

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
