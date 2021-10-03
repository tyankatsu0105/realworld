import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import styled from 'styled-components';

import { Button, Card } from '~ui/design/components';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <StyledCard renderBody={() => <Body />} renderHeader={() => <Header />} />
);

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const StyledCard = styled(Card)`
  & + & {
    margin-top: ${(props) => props.theme.spacer(7)}px;
  }
`;

// ------------------------------------
// Header
// ------------------------------------

const Header = () => <HeaderWrap>Tag List</HeaderWrap>;

// ------------------------------------
// styles
// ------------------------------------

const HeaderWrap = styled.p`
  padding: ${(props) => props.theme.spacer(2)}px;
  font-weight: bold;
  font-size: 20px;
`;

// ------------------------------------
// Body
// ------------------------------------

const Body = () => (
  <BodyWrap>
    <Button
      color="primary"
      component={ReactRouterDOM.Link}
      to="tags/hoge"
      variant="text"
    >
      #hoge
    </Button>
    <Button
      color="primary"
      component={ReactRouterDOM.Link}
      to="tags/fuga"
      variant="text"
    >
      #fuga
    </Button>
    <Button
      color="primary"
      component={ReactRouterDOM.Link}
      to="tags/foo"
      variant="text"
    >
      #foo
    </Button>
    <Button
      color="primary"
      component={ReactRouterDOM.Link}
      to="tags/bar"
      variant="text"
    >
      #bar
    </Button>
    <Button
      color="primary"
      component={ReactRouterDOM.Link}
      to="tags/lorem"
      variant="text"
    >
      #Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
      fugiat accusamus? Debitis praesentium odit commodi temporibus iure unde
      nisi excepturi mollitia laboriosam labore quisquam, tempora laudantium
      cumque ratione blanditiis.
    </Button>
    <Button
      color="primary"
      component={ReactRouterDOM.Link}
      to="tags/piyo"
      variant="text"
    >
      #piyo
    </Button>
    <Button
      color="primary"
      component={ReactRouterDOM.Link}
      to="tags/cat"
      variant="text"
    >
      #cat
    </Button>
    <Button
      color="primary"
      component={ReactRouterDOM.Link}
      to="tags/dog"
      variant="text"
    >
      #dog
    </Button>
  </BodyWrap>
);

// ------------------------------------
// styles
// ------------------------------------

const BodyWrap = styled.div`
  padding: ${(props) => props.theme.spacer(2)}px;

  display: flex;
  flex-direction: column;
`;
