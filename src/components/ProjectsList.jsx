import React from 'react';
import styled from 'styled-components';
import { useLoadProjectsQuery } from '../store/project/projectApi';
import ProjectCard from './ProjectCard';
import Skeleton from './Skeleton';
import { Container } from './styled/Container.styled';

const ProjectsList = () => {
  const { data, isError, isLoading, isSuccess } = useLoadProjectsQuery();

  if (isLoading) {
    return (
      <Container>
        <Wrapper>
          <CardSkeleton minW={'300px'} h={'300px'} times={6} />
        </Wrapper>
      </Container>
    );
  }

  if (isError) {
    return (
      <ErrorEl>
        <p>Sorry! failed to load Project data from server</p>
      </ErrorEl>
    );
  }

  return (
    <Container>
      <Wrapper>
        {data.projects
          ? data.projects.map((p) => {
              return <ProjectCard key={p._id} {...p} />;
            })
          : null}
      </Wrapper>
    </Container>
  );
};

export default ProjectsList;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 0;
`;

const ErrorEl = styled.div`
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`;

const CardSkeleton = styled(Skeleton)`
  flex: 1;
`;
