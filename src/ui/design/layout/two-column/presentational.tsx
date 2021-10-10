import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

type WithLeft = {
  renderFooter?: () => React.ReactElement;
  renderHeader?: () => React.ReactElement;
  renderLeft: () => React.ReactElement;
  renderMiddle: () => React.ReactElement;
  renderRight?: undefined;
};
type WithRight = {
  renderFooter?: () => React.ReactElement;
  renderHeader?: () => React.ReactElement;
  renderLeft?: undefined;
  renderMiddle: () => React.ReactElement;
  renderRight: () => React.ReactElement;
};

type BaseProps = {
  isLeft: boolean;
  isRight: boolean;
};

type Props = BaseProps & (WithLeft | WithRight);

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => (
  <Wrap>
    {props.renderHeader && props.renderHeader()}

    <Contents isLeft={props.isLeft} isRight={props.isRight}>
      {props.renderLeft && props.renderLeft()}
      <div>{props.renderMiddle()}</div>
      {props.renderRight && props.renderRight()}
    </Contents>

    {props.renderFooter && props.renderFooter()}
  </Wrap>
);

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`;

type ContentsProps = {
  isLeft: Props['isLeft'];
  isRight: Props['isRight'];
};
const Contents = styled.div<ContentsProps>`
  display: grid;
  grid-template-columns: ${(props) => {
    if (props.isLeft) return '400px 1fr';
    if (props.isRight) return '1fr 400px';

    return '';
  }};

  column-gap: ${(props) => props.theme.spacer(6)}px;
  padding: ${(props) => props.theme.spacer(3)}px
    ${(props) => props.theme.spacer(25)}px;
`;
