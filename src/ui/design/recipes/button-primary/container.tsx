import * as React from 'react';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Component>;

// ------------------------------------
// Component
// ------------------------------------

const ButtonPrimary = (props: Props) => {
  return <Component {...props} />;
};

export default ButtonPrimary;
