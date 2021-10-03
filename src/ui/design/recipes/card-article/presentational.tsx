import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import styled from 'styled-components';

import { Avatar, Button, Card, Icon, Link } from '~ui/design/components';

// ------------------------------------
// Props
// ------------------------------------

/**
 * TODO: move entity
 */
type Props = {
  article: {
    commentCount: number;
    favoriteCount: number;
    postedDate: string;
    slug: string;
    tags: string[];
    title: string;
  };
  author: {
    avatarSrc: string;
    name: string;
  };
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => (
  <StyledCard
    renderBody={() => (
      <Body
        articleSlug={props.article.slug}
        articleTitle={props.article.title}
      />
    )}
    renderFooter={() => (
      <Footer
        articleSlug={props.article.slug}
        commentCount={props.article.commentCount}
        favoriteCount={props.article.favoriteCount}
        tags={props.article.tags}
      />
    )}
    renderHeader={() => (
      <Header
        authorName={props.author.name}
        avatarSrc={props.author.avatarSrc}
        postedDate={props.article.postedDate}
      />
    )}
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
type HeaderProps = {
  authorName: Props['author']['name'];
  avatarSrc: Props['author']['avatarSrc'];
  postedDate: Props['article']['postedDate'];
};
const Header = (props: HeaderProps) => (
  <HeaderWrap>
    <HeaderAuthor to={`/profile/${props.authorName}`}>
      <HeaderStyledAvatar src={props.avatarSrc} variant="circle" />
      <div>
        <p>{props.authorName}</p>
        <HeaderPostDate>{props.postedDate}</HeaderPostDate>
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

const HeaderAuthor = styled(ReactRouterDOM.Link)`
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
type BodyProps = {
  articleSlug: Props['article']['slug'];
  articleTitle: Props['article']['title'];
};
const Body = (props: BodyProps) => (
  <BodyWrap>
    <Link
      as={BodyArticleLink}
      color="accent"
      to={`/article/${props.articleSlug}`}
    >
      {props.articleTitle}
    </Link>
  </BodyWrap>
);

// ------------------------------------
// styles
// ------------------------------------

const BodyWrap = styled.div`
  padding: ${(props) => props.theme.spacer(2)}px;
`;
const BodyArticleLink = styled(ReactRouterDOM.Link)`
  font-size: 30px;
  font-weight: bold;
`;

// ------------------------------------
// Footer
// ------------------------------------
type FooterProps = {
  articleSlug: Props['article']['slug'];
  commentCount: Props['article']['commentCount'];
  favoriteCount: Props['article']['favoriteCount'];
  tags: Props['article']['tags'];
};
const Footer = (props: FooterProps) => (
  <FooterWrap>
    <FooterTagList>
      {props.tags.map((tag) => (
        <Link
          key={tag}
          as={FooterTagListItem}
          color="primary"
          to={`tags/${tag}`}
        >
          #{tag}
        </Link>
      ))}
    </FooterTagList>

    <FooterIconList>
      <FooterIconListItem>
        <FooterIconListItemInner>
          <Icon size="20px" variant="heart" />
          <FooterIconListItemText>
            {props.favoriteCount} favorites
          </FooterIconListItemText>
        </FooterIconListItemInner>
      </FooterIconListItem>
      <FooterIconListItem>
        <Button
          as={FooterIconListItemLink}
          color="primary"
          to={`/article/${props.articleSlug}#comments`}
          variant="text"
        >
          <FooterIconListItemInner>
            <Icon size="20px" variant="comment" />
            <FooterIconListItemText>
              {props.favoriteCount} comments
            </FooterIconListItemText>
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
