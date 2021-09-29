import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import styled from 'styled-components';

import { Avatar, Button, Card, Icon, Link } from '~ui/design/components';

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
      as={ReactRouterDOM.Link}
      color="primary"
      to="tags/hoge"
      variant="text"
    >
      #hoge
    </Button>
    <Button
      as={ReactRouterDOM.Link}
      color="primary"
      to="tags/fuga"
      variant="text"
    >
      #fuga
    </Button>
    <Button
      as={ReactRouterDOM.Link}
      color="primary"
      to="tags/foo"
      variant="text"
    >
      #foo
    </Button>
    <Button
      as={ReactRouterDOM.Link}
      color="primary"
      to="tags/bar"
      variant="text"
    >
      #bar
    </Button>
    <Button
      as={ReactRouterDOM.Link}
      color="primary"
      to="tags/lorem"
      variant="text"
    >
      #Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
      fugiat accusamus? Debitis praesentium odit commodi temporibus iure unde
      nisi excepturi mollitia laboriosam labore quisquam, tempora laudantium
      cumque ratione blanditiis.
    </Button>
    <Button
      as={ReactRouterDOM.Link}
      color="primary"
      to="tags/piyo"
      variant="text"
    >
      #piyo
    </Button>
    <Button
      as={ReactRouterDOM.Link}
      color="primary"
      to="tags/cat"
      variant="text"
    >
      #cat
    </Button>
    <Button
      as={ReactRouterDOM.Link}
      color="primary"
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
