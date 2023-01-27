import { darkTheme, lightTheme } from '../Theme';

export default (state) => {
  switch (state.theme) {
    case 'dark':
      return { ...darkTheme };

    case 'light':
      return { ...lightTheme };

    default:
      console.error('Error from checkTheme function');
  }
};
