import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLDivElement> & {
  renderBody?: () => React.ReactElement;
  renderFooter?: () => React.ReactElement;
  renderHeader?: () => React.ReactElement;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { renderBody, renderFooter, renderHeader, ...restProps } = props;

  return (
    <Wrap {...restProps}>
      {renderHeader && <Header>{renderHeader()}</Header>}
      {renderBody && <Body>{renderBody()}</Body>}
      {renderFooter && <Footer>{renderFooter()}</Footer>}
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  border-radius: 6px;
  background-color: ${() => Theme.palettes.material.common.white};
`;
const Header = styled.div``;
const Body = styled.div``;
const Footer = styled.div``;
