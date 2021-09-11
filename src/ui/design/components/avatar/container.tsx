import * as React from 'react';

import avatar from './assets/avatar.svg';
import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Component>;

// ------------------------------------
// Component
// ------------------------------------

const Avator: React.FC<Props> = (props) => {
  const src = props.src || avatar;
  return <Component {...props} src={src} />;
};

export default Avator;
