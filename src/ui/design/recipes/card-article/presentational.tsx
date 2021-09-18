import { styled } from '@linaria/react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Button, Card, Icon } from '~ui/design/components';
import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <Card
    renderBody={() => <Body />}
    renderFooter={() => <Footer />}
    renderHeader={() => <Header />}
  />
);

export const Component = React.memo(Presentational);

// ------------------------------------
// Header
// ------------------------------------

const Header = () => (
  <HeaderWrap>
    <HeaderAuthor to="/hogehoge">
      <HeaderStyledAvatar
        src="https://avatars.githubusercontent.com/u/28397593"
        variant="circle"
      />
      <div>
        <p>Tyankatsu</p>
        <HeaderPostDate>September 18, 2021</HeaderPostDate>
      </div>
    </HeaderAuthor>
    <div>
      <Button>
        <HeaderFavoriteIcon variant="heart" />
        <p>10</p>
      </Button>
    </div>
  </HeaderWrap>
);

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderAuthor = styled(Link)`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;
const HeaderStyledAvatar = styled(Avatar)`
  margin-right: ${() => Theme.spacer(2)}px;
`;
const HeaderPostDate = styled.p`
  font-size: 14px;
  color: ${() => Theme.palettes.material.gray[500]};
`;
const HeaderFavoriteIcon = styled(Icon)`
  width: 20px;
  height: 20px;
`;

// ------------------------------------
// Body
// ------------------------------------

const Body = () => <div>aaaaaa</div>;

// ------------------------------------
// Footer
// ------------------------------------

const Footer = () => <div>aaaaaa</div>;

// ------------------------------------
// styles
// ------------------------------------
