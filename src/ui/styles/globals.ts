import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    font-family: 'Arimo', sans-serif;
    background-color: ${(props) => props.theme.palettes.brand.primary[50]};
    min-height: 100vh;
    color: ${(props) => props.theme.palettes.brand.text.primary};
  }

  a,
  button {
    cursor: pointer;
  }

  *:focus-visible {
    outline: 2px solid blue;
  }
`;
