import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DashboardHome = () => {
  const { data: user } = useSelector((state) => state.user.user);

  return (
    <StyledHome>
      <p>Welcome to your Dashboard {user?.name}</p>
      <Link to='/dashboard/add-project'>Add project</Link>
    </StyledHome>
  );
};

export default DashboardHome;

export const StyledHome = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  overflow-x: hidden;

  p {
    min-width: 220px;
  }
`;
