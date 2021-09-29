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
  <StyledCard
    renderBody={() => <Body />}
    renderFooter={() => <Footer />}
    renderHeader={() => <Header />}
  />
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

const Header = () => (
  <HeaderWrap>
    <HeaderAuthor to="/about/tyankatsu">
      <HeaderStyledAvatar
        src="https://avatars.githubusercontent.com/u/28397593"
        variant="circle"
      />
      <div>
        <p>Tyankatsu</p>
        <HeaderPostDate>September 18, 2021</HeaderPostDate>
      </div>
    </HeaderAuthor>
  </HeaderWrap>
);

// ------------------------------------
// styles
// ------------------------------------

const HeaderWrap = styled.div`
  padding: ${(props) => props.theme.spacer(2)}px;
`;

const HeaderAuthor = styled(Link)`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;
const HeaderStyledAvatar = styled(Avatar)`
  margin-right: ${(props) => props.theme.spacer(2)}px;
`;
const HeaderPostDate = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.palettes.material.gray[500]};
`;

// ------------------------------------
// Body
// ------------------------------------

const Body = () => (
  <BodyWrap>
    <Link as={BodyArticleLink} color="accent" to="/about/article">
      Clean architecture best practice
    </Link>
  </BodyWrap>
);

// ------------------------------------
// styles
// ------------------------------------

const BodyWrap = styled.div`
  padding: ${(props) => props.theme.spacer(2)}px;
`;
const BodyArticleLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
`;

// ------------------------------------
// Footer
// ------------------------------------

const Footer = () => (
  <FooterWrap>
    <FooterTagList>
      <Link as={FooterTagListItem} color="primary" to="tags/hoge">
        #hoge
      </Link>
      <Link as={FooterTagListItem} color="primary" to="tags/fuga">
        #fuga
      </Link>
      <Link as={FooterTagListItem} color="primary" to="tags/foo">
        #foo
      </Link>
      <Link as={FooterTagListItem} color="primary" to="tags/bar">
        #bar
      </Link>
      <Link as={FooterTagListItem} color="primary" to="tags/lorem">
        #Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
        fugiat accusamus? Debitis praesentium odit commodi temporibus iure unde
        nisi excepturi mollitia laboriosam labore quisquam, tempora laudantium
        cumque ratione blanditiis.
      </Link>
    </FooterTagList>

    <FooterIconList>
      <FooterIconListItem>
        <FooterIconListItemInner>
          <Icon size="20px" variant="heart" />
          <FooterIconListItemText>10 favorites</FooterIconListItemText>
        </FooterIconListItemInner>
      </FooterIconListItem>
      <FooterIconListItem>
        <Button
          as={FooterIconListItemLink}
          color="primary"
          to="/comment"
          variant="text"
        >
          <FooterIconListItemInner>
            <Icon size="20px" variant="comment" />
            <FooterIconListItemText>3 comments</FooterIconListItemText>
          </FooterIconListItemInner>
        </Button>
      </FooterIconListItem>
    </FooterIconList>
  </FooterWrap>
);

// ------------------------------------
// styles
// ------------------------------------

const FooterWrap = styled.div`
  padding: ${(props) => props.theme.spacer(2)}px;
`;
const FooterTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const FooterTagListItem = styled(ReactRouterDOM.Link)`
  margin-right: ${(props) => props.theme.spacer(3)}px;
  margin-bottom: ${(props) => props.theme.spacer(3)}px;
`;
const FooterIconList = styled.ul`
  margin-top: ${(props) => props.theme.spacer(1)}px;
  display: flex;
  flex-wrap: wrap;
`;
const FooterIconListItem = styled.li`
  margin-right: ${(props) => props.theme.spacer(3)}px;
  margin-bottom: ${(props) => props.theme.spacer(3)}px;
`;
const FooterIconListItemLink = styled(ReactRouterDOM.Link)`
  display: block;
  padding: 0;
`;
const FooterIconListItemInner = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const FooterIconListItemText = styled.span`
  margin-left: ${(props) => props.theme.spacer(1)}px;
`;
