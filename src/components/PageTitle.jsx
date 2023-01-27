import styled from 'styled-components';
import Bg from '../assets/images/title-bg.svg';
import { AiOutlineLine } from 'react-icons/ai';

const PageTitle = ({ title }) => {
  return (
    <StyledWrapper>
      {' '}
      <h1>{title}</h1>
    </StyledWrapper>
  );
};

export default PageTitle;

const StyledWrapper = styled.section`
  width: 100%;
  margin-top: 1rem;
  min-height: 200px;
  background-size: cover;
  background-position: center;
  background-image: url(${Bg});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 1rem;
  h1 {
    text-transform: uppercase;
    font-weight: 700;
  }
  svg {
    font-size: 3rem;
  }
`;
