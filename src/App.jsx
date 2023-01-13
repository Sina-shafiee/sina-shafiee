import { Route, Routes } from 'react-router';

// styled component theme provider global styles and theme checker
import Theme from './Theme';
import { GlobalStyles } from './styles/Globals';
import checkTheme from './utils/checkTheme';

// pages components
import { About, Contact, Home, Projects, Project, NotFound } from './pages';
// app styles state hook
import useAppContext from './hooks/use-appContext';
// header component
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const { state } = useAppContext();
  const colors = checkTheme(state);

  return (
    <Theme colors={colors}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Theme>
  );
};

export default App;
