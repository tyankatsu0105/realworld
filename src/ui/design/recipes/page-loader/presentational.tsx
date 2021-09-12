import { styled } from '@linaria/react';
import * as React from 'react';

import { Icon } from '~ui/design/components';
import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <Wrap>
    <StyledIcon variant="bars" />
  </Wrap>
);

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const StyledIcon = styled(Icon)`
  color: ${() => Theme.palettes.brand.accent.A700};
  width: 100px;
`;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${() => Theme.palettes.brand.primary[50]};
`;
