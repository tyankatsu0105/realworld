import { styled } from '@linaria/react';
import * as React from 'react';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Button = styled.button`
  border-radius: 8px;
  background-color: #ccc;
  color: #fff;
`;

const Component = (props: Props) => <Button>Presentational</Button>;

export const Presentational = React.memo(Component);
