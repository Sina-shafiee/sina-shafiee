import { Project } from '@/types/project';

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(
    'https://portfolio-backend-ten-iota.vercel.app/api/projects'
  );
  const data = await response.json();

  return data.projects;
};
