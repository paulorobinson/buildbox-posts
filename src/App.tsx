import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { GlobalStyles } from './styles/global';

import { colors } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
};

export default App;
