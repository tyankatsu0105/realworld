import * as React from 'react';
import styled from 'styled-components';

import { availableTypes } from './facade';
// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type: typeof availableTypes[keyof typeof availableTypes];
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  return <Input {...props} />;
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Input = styled.input`
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.palettes.brand.accent.A700};
  padding: ${(props) => props.theme.spacer(2)}px;
`;
