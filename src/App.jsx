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
import { Header, Footer } from './components';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/dashboard/Login';
import AddProject from './pages/dashboard/AddProject';
import DashboardHome from './pages/dashboard/DashboardHome';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  const { state } = useAppContext();
  const colors = checkTheme(state);

  return (
    <Theme colors={colors}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='projects' element={<Projects />} />
        <Route path='project/:id' element={<Project />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<DashboardHome />} />
            <Route path='add-project' element={<AddProject />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Theme>
  );
};

export default App;
