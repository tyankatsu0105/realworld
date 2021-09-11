import * as React from 'react';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {};

// ------------------------------------
// Component
// ------------------------------------

const Button: React.FC<Props> = (props) => {
  return <Component {...props} />;
};

export default Button;
