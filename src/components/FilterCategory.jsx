import { useEffect } from 'react';
import styled from 'styled-components';
import { Flex } from './styled/Flex.styled';

const categories = [
  { title: 'all', id: 1 },
  { title: 'popular', id: 2 },
  { title: 'upcoming', id: 3 }
];

const FilterCategory = ({
  projects,
  setFiltered,
  activeCategory,
  setActiveCategory
}) => {
  useEffect(() => {
    if (activeCategory === 'all') {
      setFiltered(projects);
      return;
    }
    const filteredData = projects.filter((p) =>
      p.tags.includes(activeCategory)
    );
    setFiltered(filteredData);
  }, [activeCategory]);

  return (
    <CategoryWrapper>
      {categories.map(({ title, id }) => {
        return (
          <CategoryBtn
            value={title}
            active={activeCategory === title ? true : false}
            key={id}
            onClick={(e) => {
              setActiveCategory(e.target.value);
            }}
          >
            {title}
          </CategoryBtn>
        );
      })}
    </CategoryWrapper>
  );
};

export default FilterCategory;

const CategoryWrapper = styled(Flex)`
  gap: 2rem;
  margin-top: 4rem;
`;

const CategoryBtn = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  color: ${({ theme: { colors }, active }) =>
    active ? colors.primary : colors.text};
`;
