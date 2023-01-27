import { useReducer } from 'react';
import { CLOSE_NAVBAR, OPEN_NAVBAR, TOGGLE_THEME } from './app-actions';
import appContext from './app-context';
import themeReducer from './app-reducer';

const initialState = {
  theme: 'light',
  isNavOpen: false
};

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    switch (state.theme) {
      case 'dark':
        dispatch({ type: TOGGLE_THEME, payload: 'light' });
        break;

      case 'light':
        dispatch({ type: TOGGLE_THEME, payload: 'dark' });
        break;

      default:
        console.error('we have an error from toggleTheme function');
    }
  };

  const openNav = () => {
    dispatch({ type: OPEN_NAVBAR });
  };
  const closeNav = () => {
    dispatch({ type: CLOSE_NAVBAR });
  };

  return (
    <appContext.Provider value={{ state, toggleTheme, openNav, closeNav }}>
      {children}
    </appContext.Provider>
  );
};

export default AppState;
