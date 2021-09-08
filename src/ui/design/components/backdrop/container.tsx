import * as React from 'react';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement> & {};

// ------------------------------------
// Component
// ------------------------------------

const Backdrop: React.FC<Props> = (props) => {
  return <Component {...props} />;
};

export default Backdrop;
