import { styled } from '@linaria/react';
import * as React from 'react';

import { theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode | undefined;
} & {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { children, ...restProps } = props;

  return <Backdrop {...restProps}>{children}</Backdrop>;
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Backdrop = styled.div`
  color: ${() => theme.palettes.common['white']};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${() => theme.palettes.blueGray[900]};
`;
