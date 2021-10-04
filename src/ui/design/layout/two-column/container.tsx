import * as React from 'react';

import { Component } from './presentational';

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

type Props = WithLeft | WithRight;

// ------------------------------------
// Component
// ------------------------------------

const TwoColumn = (props: Props) => {
  const isLeft = React.useMemo(() => (props?.renderLeft ? true : false), [
    props,
  ]);
  const isRight = React.useMemo(() => (props?.renderRight ? true : false), [
    props,
  ]);

  return <Component {...props} isLeft={isLeft} isRight={isRight} />;
};

export default TwoColumn;
