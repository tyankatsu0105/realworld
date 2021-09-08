import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

export const GlobalStyle: React.FC = (props) => {
  return <Style>{props.children}</Style>;
};

const Style = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

  font-family: 'Arimo', sans-serif;
  background-color: ${() => Theme.palettes.brand.primary[50]};
  min-height: 100vh;

  color: ${() => Theme.palettes.brand.text.primary};

  a,
  button {
    cursor: pointer;
  }
`;
