import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Avatar, Card, Icon } from '~ui/design/components';

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
    <BodyArticleLink to="/about/article">
      <BodyArticleTitle>Clean architecture best practice</BodyArticleTitle>
    </BodyArticleLink>
  </BodyWrap>
);

// ------------------------------------
// styles
// ------------------------------------

const BodyWrap = styled.div`
  padding: ${(props) => props.theme.spacer(2)}px;
`;
const BodyArticleLink = styled(Link)`
  display: block;
`;
const BodyArticleTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

// ------------------------------------
// Footer
// ------------------------------------

const Footer = () => (
  <FooterWrap>
    <FooterTagList>
      <FooterTagListItem to="tags/hoge">#hoge</FooterTagListItem>
      <FooterTagListItem to="tags/fuga">#fuga</FooterTagListItem>
      <FooterTagListItem to="tags/foo">#foo</FooterTagListItem>
      <FooterTagListItem to="tags/bar">#bar</FooterTagListItem>
      <FooterTagListItem to="tags/lorem">
        #Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit placeat
        fugiat accusamus? Debitis praesentium odit commodi temporibus iure unde
        nisi excepturi mollitia laboriosam labore quisquam, tempora laudantium
        cumque ratione blanditiis.
      </FooterTagListItem>
    </FooterTagList>

    <FooterIconList>
      <FooterIconListItem>
        <FooterIconListItemInner>
          <Icon size="20px" variant="heart" />
          <FooterIconListItemText>10 favorites</FooterIconListItemText>
        </FooterIconListItemInner>
      </FooterIconListItem>
      <FooterIconListItem>
        <FooterIconListItemLink to="/article#comments">
          <FooterIconListItemInner>
            <Icon size="20px" variant="comment" />
            <FooterIconListItemText>3 comments</FooterIconListItemText>
          </FooterIconListItemInner>
        </FooterIconListItemLink>
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
const FooterTagListItem = styled(Link)`
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
const FooterIconListItemLink = styled(Link)`
  display: block;
`;
const FooterIconListItemInner = styled.div`
  display: flex;
  align-items: center;
`;
const FooterIconListItemText = styled.span`
  margin-left: ${(props) => props.theme.spacer(1)}px;
`;
