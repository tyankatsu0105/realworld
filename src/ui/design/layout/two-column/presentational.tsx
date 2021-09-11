import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

type WithLeft = {
  renderLeft: () => React.ReactElement;
  renderMiddle: () => React.ReactElement;
  renderRight?: undefined;
};
type WithRight = {
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
  <Wrap isLeft={props.isLeft} isRight={props.isRight}>
    {props.renderLeft && <div>{props.renderLeft()}</div>}
    <div>{props.renderMiddle()}</div>
    {props.renderRight && <div>{props.renderRight()}</div>}
  </Wrap>
);

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
type WrapProps = {
  isLeft: Props['isLeft'];
  isRight: Props['isRight'];
};
const Wrap = styled.div<WrapProps>`
  display: grid;
  grid-template-columns: ${(props) => {
    if (props.isLeft) return '400px 1fr';
    if (props.isRight) return '1fr 400px';

    return '';
  }};

  column-gap: 10px;
  padding: ${() => Theme.spacer(5)}px ${() => Theme.spacer(25)}px;
`;
