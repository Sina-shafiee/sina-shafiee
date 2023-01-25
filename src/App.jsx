import { Route, Routes } from 'react-router';

// styled component theme provider global styles and theme checker
import Theme from './Theme';
import { GlobalStyles } from './styles/Globals';
import checkTheme from './utils/checkTheme';

// pages components
import { AboutUs, Contact, Home, Projects, Project, NotFound } from './pages';
// app styles state hook
import useAppContext from './hooks/use-appContext';
// header component

import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/Login';
import DashboardHome from './pages/dashboard/DashboardHome';
import ProtectedRoute from './pages/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardProjects from './pages/dashboard/DashboardProjects';
import DashboardProfile from './pages/dashboard/DashboardProfile';

const App = () => {
  const { state } = useAppContext();
  const colors = checkTheme(state);

  return (
    <Theme colors={colors}>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='projects' element={<Projects />} />
        <Route path='project/:id' element={<Project />} />
        <Route element={<ProtectedRoute />}>
          <Route path='dashboard' element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path='profile' element={<DashboardProfile />} />
            <Route path='projects' element={<DashboardProjects />} />
          </Route>
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        theme={state.theme}
      />
    </Theme>
  );
};

export default App;
