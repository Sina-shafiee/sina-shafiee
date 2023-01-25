import React from 'react';
import { useLoadProjectsQuery } from '../store/project/projectApi';
import Skeleton from './Skeleton';

const ProjectsList = () => {
  const { data, isError, isLoading, isSuccess } = useLoadProjectsQuery();

  if (isLoading) {
    return <Skeleton times={3} />;
  }
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <Skeleton w={'300px'} h={'300px'} times={4} />
    </div>
  );
};

export default ProjectsList;
