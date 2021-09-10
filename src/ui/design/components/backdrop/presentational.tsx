import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement> & {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <Backdrop {...restProps}>{children}</Backdrop>;
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Backdrop = styled.div`
  color: ${() => Theme.palettes.material.common['white']};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${() =>
    Theme.color.transparentize({
      alpha: 0.5,
      color: Theme.palettes.material.blueGray[900],
    })};
`;
