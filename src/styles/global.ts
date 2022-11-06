import { createGlobalStyle } from 'styled-components';

import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle<ThemeProps>`

  * {
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
