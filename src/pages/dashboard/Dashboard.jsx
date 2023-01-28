import { Outlet } from 'react-router';
import styled from 'styled-components';
import SideBar from '../../components/SideBar';

const Dashboard = () => {
  return (
    <Grid>
      <SideBar />
      <Outlet />
    </Grid>
  );
};

export default Dashboard;

const Grid = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: max-content 1fr;
`;
