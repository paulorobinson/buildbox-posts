import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

import { colors } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <>
        <GlobalStyles />
        <h1>hello</h1>
      </>
    </ThemeProvider>
  );
};

export default App;
