import * as React from 'react';

import { Component } from './presentational';

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

type Props = WithLeft | WithRight;

// ------------------------------------
// Component
// ------------------------------------

const TwoColumn = (props: Props) => {
  const isLeft = React.useMemo(() => 'renderLeft' in props, [props]);
  const isRight = React.useMemo(() => 'renderRight' in props, [props]);

  return <Component {...props} isLeft={isLeft} isRight={isRight} />;
};

export default TwoColumn;
