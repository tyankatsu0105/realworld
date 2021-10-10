import * as React from 'react';
import styled from 'styled-components';

import logo from '~ui/assets/logo.svg';
// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => (
  <Wrap>
    <Left>
      <div>
        <Logo alt="" src={logo} />
        <LogoType>A place to share your knowledge.</LogoType>
      </div>
    </Left>
    <Right>right</Right>
  </Wrap>
);

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 50% 50%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.theme.color.transparentize({
      alpha: 0.2,
      color: props.theme.palettes.brand.accent.A700,
    })};
`;

const Logo = styled.img`
  width: 200px;
`;
const LogoType = styled.p`
  font-size: 24px;
`;

const Right = styled.div``;
