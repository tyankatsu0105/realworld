import * as React from 'react';

import { Types } from '~ui/shared';

import { Component } from './presentational';
// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentProps<typeof Component>;

// ------------------------------------
// Component
// ------------------------------------

const Button: Types.Component.OverridableComponent<'button', Props> = (
  props
) => {
  return <Component {...props} />;
};

export default Button;
