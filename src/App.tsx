import { ThemeProvider } from 'styled-components';
import CreatePost from './components/CreatePost';
import Header from './components/Header';
import { GlobalStyles } from './styles/global';

import { theme } from './styles/theme';

import { Container } from './styles';
import Feed from './components/Feed';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <CreatePost />
          <Feed />
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
