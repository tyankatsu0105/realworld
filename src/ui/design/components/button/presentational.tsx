import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <Button {...restProps}>{children}</Button>;
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Button = styled.button`
  padding: ${() => Theme.spacer(3)}px;
  border-radius: 5px;
  font-weight: bold;
`;
