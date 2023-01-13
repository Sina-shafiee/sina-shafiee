import { useContext } from 'react';
import appContext from '../context/app-context';

const useAppContext = () => {
  const state = useContext(appContext);

  return state;
};

export default useAppContext;
