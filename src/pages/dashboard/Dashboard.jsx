import { Outlet } from 'react-router';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import { Container } from '../../components/styled/Container.styled';

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
  /* gap: 1rem; */
  grid-template-columns: max-content 1fr;
`;
