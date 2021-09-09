import { styled } from '@linaria/react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { URI } from '~application/presenter/route';
import logo from '~ui/assets/logo.svg';
import { AppBarLazy } from '~ui/design/components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => (
  <React.Suspense fallback={<div>loading AppBar...</div>}>
    <StyledAppBar>
      <div>
        <Link to={URI.home}>
          <Logo alt="" src={logo} />
        </Link>
      </div>
    </StyledAppBar>
  </React.Suspense>
);

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const StyledAppBar = styled(AppBarLazy)`
  position: sticky;
  top: 0;
  left: 0;
`;
const Logo = styled.img`
  width: 70px;
`;
