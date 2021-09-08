import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme, Utilities } from '~ui/styles';

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
  color: ${() => Theme.palettes.common['white']};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${() =>
    Utilities.transparentize({
      alpha: 0.5,
      color: Theme.palettes.blueGray[900],
    })};
`;
