import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { URI } from '~application/presenter/route';
import logo from '~ui/assets/logo.svg';
import { AppBarLazy } from '~ui/design/components';

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
`;
const Copyright = styled.p`
  text-align: center;
  color: ${(prpos) => prpos.theme.palettes.brand.primary[400]};
`;
