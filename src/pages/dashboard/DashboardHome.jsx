import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DashboardHome = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <StyledHome>
      Welcome to your dashboard{' '}
      <p style={{ textTransform: 'capitalize' }}> Sina Shafiee</p>
    </StyledHome>
  );
};

export default DashboardHome;

export const StyledHome = styled.section`
  height: 100%;
  display: flex;
  gap: 4px;
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
`;
