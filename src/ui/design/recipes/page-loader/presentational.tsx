import * as React from 'react';
import styled from 'styled-components';

import { Icon } from '~ui/design/components';

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
  color: ${(props) => props.theme.palettes.brand.accent.A700};
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

  background-color: ${(props) => props.theme.palettes.brand.primary[50]};
`;
