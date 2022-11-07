import { createGlobalStyle } from 'styled-components';

import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle<ThemeProps>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 1.2rem;
  }
  
  input, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    
    border: none;
    border-radius: 0.5rem;
    
    padding: 1.2rem;
    background-color: ${({ theme }) => theme.border};
  }
`;
