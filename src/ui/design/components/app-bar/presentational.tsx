import { styled } from '@linaria/react';
import * as React from 'react';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement> & {};

// ------------------------------------
// Component
// ------------------------------------

const Button = styled.button`
  border-radius: 8px;
  background-color: #ccc;
  color: #fff;
`;

const Presentational = (props: Props) => (
  <Button {...props}>Presentational</Button>
);

export const Component = React.memo(Presentational);
