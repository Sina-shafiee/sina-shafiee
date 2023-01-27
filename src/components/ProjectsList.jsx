import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useLoadProjectsQuery } from '../store/project/projectApi';
import ProjectCard from './ProjectCard';
import Skeleton from './Skeleton';
import { Container } from './styled/Container.styled';
import { Flex } from './styled/Flex.styled';
import { AnimatePresence, motion } from 'framer-motion';

const categories = [
  { title: 'all', id: 1 },
  { title: 'popular', id: 2 },
  { title: 'upcoming', id: 3 }
];

const ProjectsList = () => {
  const { data, isError, isLoading, isSuccess } = useLoadProjectsQuery();
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (data?.projects) {
      setProjects(data.projects);
    }
  }, [isSuccess]);

  const checkActive = (cate) => {
    return cate === activeCategory;
  };

  const checkCategoryData = (e) => {
    const category = e.target.value;
    let filteredData = null;
    if (category === 'popular') {
      filteredData = data.projects.filter(
        (p) => p.tags.indexOf('popular') !== -1
      );
      setProjects(filteredData);
    } else if (category === 'upcoming') {
      filteredData = data.projects.filter(
        (p) => p.tags.indexOf('upcoming') !== -1
      );
      setProjects(filteredData);
    } else {
      setProjects(data.projects);
    }
  };

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
      <CategoryWrapper
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { duration: 0.5 },
          default: { ease: 'linear' }
        }}
      >
        {categories.map(({ title, id }) => {
          return (
            <CategoryBtn
              value={title}
              key={id}
              active={checkActive(title)}
              onClick={(e) => {
                checkCategoryData(e);
                setActiveCategory(e.target.value);
              }}
            >
              {title}
            </CategoryBtn>
          );
        })}
      </CategoryWrapper>

      <Wrapper
        as={motion.section}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: 'linear' }
        }}
      >
        <AnimatePresence mode='sync'>
          {projects.length
            ? projects.map((p) => {
                return (
                  <Card
                    key={p._id}
                    as={motion.div}
                    initial={{ scale: 0, y: 20, opacity: 0.5 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0, y: 20, opacity: 0.5 }}
                    transition={{
                      scale: { duration: 0.5 },
                      y: { duration: 0.5 },
                      opacity: { duration: 0.2 },
                      default: { ease: 'linear' }
                    }}
                  >
                    <ProjectCard {...p} />
                  </Card>
                );
              })
            : null}
        </AnimatePresence>
      </Wrapper>
      {!projects.length ? (
        <ErrorEl>
          <p>No Project in this category for now</p>
        </ErrorEl>
      ) : null}
    </Container>
  );
};

export default ProjectsList;

const CategoryWrapper = styled(Flex)`
  gap: 2rem;
`;

const CategoryBtn = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  color: ${({ theme: { colors }, active }) =>
    active ? colors.primary : colors.text};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  margin: 5rem 0;
`;

const Card = styled.article`
  background-color: ${({ theme: { colors } }) => colors.sideBarBg};
  height: 320px;
  flex: 1 0 300px;
  border-radius: 4px;
  overflow: hidden;
  max-width: 450px;
`;

const ErrorEl = styled.div`
  min-height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10rem;
`;

const CardSkeleton = styled(Skeleton)`
  flex: 1;
`;
