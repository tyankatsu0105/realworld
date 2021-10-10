import * as React from 'react';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Component>;

// ------------------------------------
// Component
// ------------------------------------

const Input = (props: Props): JSX.Element => {
  return <Component {...props} />;
};

export default Input;
