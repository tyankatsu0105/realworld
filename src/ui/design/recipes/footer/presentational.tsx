import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <Wrap>
    <Copyright>copyright</Copyright>
  </Wrap>
);

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
const Wrap = styled.footer`
  background-color: ${(prpos) => prpos.theme.palettes.material.common.white};
  padding: ${(props) => props.theme.spacer(7)}px;

  position: sticky;
  bottom: 0;
  left: 0;
`;
const Copyright = styled.p`
  text-align: center;
  color: ${(prpos) => prpos.theme.palettes.brand.primary[400]};
`;
