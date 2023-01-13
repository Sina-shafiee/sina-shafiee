import { CLOSE_NAVBAR, OPEN_NAVBAR, TOGGLE_THEME } from './app-actions';

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: action.payload
      };

    case OPEN_NAVBAR:
      return {
        ...state,
        isNavOpen: true
      };

    case CLOSE_NAVBAR:
      return {
        ...state,
        isNavOpen: false
      };

    default:
      return state;
  }
};

export default themeReducer;
