import ThemeProvider from './provider';
import context from './context';
import useContext from './hooks/useContext';

const Theme = {
  context,
  Provider: ThemeProvider,
  useContext,
};

export default Theme;
