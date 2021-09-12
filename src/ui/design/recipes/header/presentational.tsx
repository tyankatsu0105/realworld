import { styled } from '@linaria/react';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { URI } from '~application/presenter/route';
import logo from '~ui/assets/logo.svg';
import { AppBarLazy } from '~ui/design/components';
import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <React.Suspense fallback={<div>loading AppBar...</div>}>
    <StyledAppBar>
      <LayoutBox>
        <div>
          <NavLink to={URI.home}>
            <Logo alt="" src={logo} />
            <p>A place to share your knowledge.</p>
          </NavLink>
        </div>

        <nav>
          <HeaderNavItem exact activeClassName="active" to={URI.home}>
            Home
          </HeaderNavItem>
          <HeaderNavItem exact activeClassName="active" to={URI.login}>
            Sign in
          </HeaderNavItem>
          <HeaderNavItem exact activeClassName="active" to={URI.register}>
            Sign up
          </HeaderNavItem>
        </nav>
      </LayoutBox>
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
const LayoutBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNavItem = styled(NavLink)`
  & + & {
    margin-left: ${() => Theme.spacer(3)}px;
  }

  &.active {
    color: ${() => Theme.palettes.brand.accent.A700};
  }
`;
