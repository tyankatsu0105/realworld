import * as React from 'react';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Component>;

// ------------------------------------
// Component
// ------------------------------------

const ButtonAccent = (props: Props) => {
  return <Component {...props} />;
};

export default ButtonAccent;
