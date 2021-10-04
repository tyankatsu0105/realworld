import * as React from 'react';
import styled from 'styled-components';

import { Link } from '~ui/design/components';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <Wrap>
    <Copyright>
      copyright{' '}
      <Link isExternal color="accent" href="https://tyankatsu.com">
        tyankatsu
      </Link>
    </Copyright>
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
