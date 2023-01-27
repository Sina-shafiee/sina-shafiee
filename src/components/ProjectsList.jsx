import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useLoadProjectsQuery } from '../store/project/projectApi';
import ProjectCard from './ProjectCard';
import Skeleton from './Skeleton';
import { Container } from './styled/Container.styled';
import { motion, AnimatePresence } from 'framer-motion';
import FilterCategory from './FilterCategory';

const ProjectsList = () => {
  const { data, isError, isLoading } = useLoadProjectsQuery();
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (data && data.projects) {
      setFiltered(data.projects);
    }
  }, [data]);

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
      <FilterCategory
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setFiltered={setFiltered}
        projects={data.projects}
      />

      <Wrapper as={motion.div} layout>
        <AnimatePresence>
          {filtered.length ? (
            filtered.map((p, index) => (
              <ProjectCard index={index} key={p._id} {...p} />
            ))
          ) : (
            <ErrorEl>
              <p>No Project in this category available</p>
            </ErrorEl>
          )}
        </AnimatePresence>
      </Wrapper>
    </Container>
  );
};

export default ProjectsList;

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  flex-wrap: wrap;
  align-items: center;
  margin: 5rem 0;
`;

const ErrorEl = styled.div`
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  grid-column: 1/4;
`;

const CardSkeleton = styled(Skeleton)`
  flex: 1;
`;
